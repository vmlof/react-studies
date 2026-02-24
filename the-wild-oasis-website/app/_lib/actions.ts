"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function updateGuest(formData: FormData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const nationalID = formData.get("nationalID") as string;
  const [nationality, countryFlag] = (
    formData.get("nationality") as string
  )?.split("%");

  if (!/^[a-zA-z0-9]{6,12}$/.test(nationalID)) {
    throw new Error("Please provide a valid national ID");
  }

  const updateData = { nationality, countryFlag, NationalID: nationalID };

  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");

  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId: number) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings(Number(session.user.guestId));
  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingsIds.includes(bookingId))
    throw new Error("You are not allowed to delete this booking");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
}

export async function UpdateBooking(formData: FormData) {
  const bookingId = Number(formData.get("bookingId"));

  // 1) Authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // 2) Authorization
  const guestBookings = await getBookings(Number(session.user.guestId));
  console.log(guestBookings);

  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  console.log(guestBookingsIds);

  if (!guestBookingsIds.includes(bookingId))
    throw new Error("You are not allowed to update this booking");

  // 3) Building update data
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations")?.slice(0, 1000),
  };

  // 4) Mutation
  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  if (error) throw new Error("Booking could not be updated");

  // 5) Revalidation
  revalidatePath(`/account/reservations/${bookingId}`);

  redirect("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
