import { useState } from "react";
import { isFuture, isPast, isToday } from "date-fns";
import supabase from "../services/supabase";
import Button from "../ui/Button";
import { subtractDates } from "../utils/helpers";

import { bookings } from "./data-booking";
import { cabins } from "./data-cabins";
import { guests } from "./data-guests";

interface MockCabin {
  id?: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description?: string;
}

interface MockBooking {
  created_at: string;
  startDate: string;
  endDate: string;
  cabinId: number;
  guestId: number;
  hasBreakfast: boolean;
  observations: string;
  isPaid: boolean;
  numGuests: number;
}

async function deleteGuests() {
  const { error } = await supabase.from("guests").delete().gt("id", 0);
  if (error) console.error(error.message);
}

async function deleteCabins() {
  const { error } = await supabase.from("cabins").delete().gt("id", 0);
  if (error) console.error(error.message);
}

async function deleteBookings() {
  const { error } = await supabase.from("bookings").delete().gt("id", 0);
  if (error) console.error(error.message);
}

async function createGuests() {
  const guestsData = guests.map((guest) => ({
    fullName: guest.fullName,
    email: guest.email,
    NationalID: guest.nationalID,
    nationality: guest.nationality,
    countryFlag: guest.countryFlag,
  }));

  const { error } = await supabase.from("guests").insert(guestsData);
  if (error) console.error(error.message);
}

async function createCabins() {
  const cabinsData = cabins.map((cabin) => ({
    name: cabin.name,
    maxCapacity: cabin.maxCapacity,
    regularPrice: cabin.regularPrice,
    discount: cabin.discount,
    description: cabin.description,
    image: cabin.image,
  }));

  const { error } = await supabase.from("cabins").insert(cabinsData);
  if (error) console.error(error.message);
}

async function createBookings() {
  const { data: guestsIds, error: guestsError } = await supabase
    .from("guests")
    .select("id")
    .order("id");

  if (guestsError) console.error(guestsError);

  const allGuestIds = guestsIds ? guestsIds.map((guest) => guest.id) : [];

  const { data: cabinsIds, error: cabinsError } = await supabase
    .from("cabins")
    .select("id")
    .order("id");

  if (cabinsError) console.error(cabinsError);

  const allCabinIds = cabinsIds ? cabinsIds.map((cabin) => cabin.id) : [];

  const finalBookings = bookings.map((booking: MockBooking) => {
    const cabin = cabins.at(booking.cabinId - 1) as MockCabin;
    const numNights = subtractDates(booking.endDate, booking.startDate);

    const cabinRegularPrice = cabin ? cabin.regularPrice : 0;
    const cabinDiscount = cabin ? cabin.discount : 0;

    const cabinPrice = numNights * (cabinRegularPrice - cabinDiscount);
    const extrasPrice = booking.hasBreakfast
      ? numNights * 15 * booking.numGuests
      : 0;
    const totalPrice = cabinPrice + extrasPrice;

    let status;
    if (
      isPast(new Date(booking.endDate)) &&
      !isToday(new Date(booking.endDate))
    )
      status = "checked-out";
    if (
      isFuture(new Date(booking.startDate)) ||
      isToday(new Date(booking.startDate))
    )
      status = "unconfirmed";
    if (
      (isFuture(new Date(booking.endDate)) ||
        isToday(new Date(booking.endDate))) &&
      isPast(new Date(booking.startDate)) &&
      !isToday(new Date(booking.startDate))
    )
      status = "checked-in";

    return {
      created_at: booking.created_at,
      startDate: booking.startDate,
      endDate: booking.endDate,
      numNights: numNights,
      numGuests: booking.numGuests,
      cabinPrice: cabinPrice,
      extrasPrice: extrasPrice,
      totalPrice: totalPrice,
      status: status,
      hasBreakFast: booking.hasBreakfast,
      isPaid: booking.isPaid,
      observations: booking.observations,
      cabinId: allCabinIds.at(booking.cabinId - 1),
      guestId: allGuestIds.at(booking.guestId - 1),
    };
  });

  const { error } = await supabase.from("bookings").insert(finalBookings);
  if (error) console.error("", error.message);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);
    await deleteBookings();
    await deleteGuests();
    await deleteCabins();

    await createGuests();
    await createCabins();
    await createBookings();

    setIsLoading(false);
  }

  async function uploadBookings() {
    setIsLoading(true);
    await deleteBookings();
    await createBookings();
    setIsLoading(false);
  }

  return (
    <div
      style={{
        marginTop: "auto",
        backgroundColor: "#e0e7ff",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3>SAMPLE DATA</h3>

      <Button onClick={uploadAll} disabled={isLoading}>
        Upload ALL
      </Button>

      <Button onClick={uploadBookings} disabled={isLoading}>
        Upload bookings ONLY
      </Button>
    </div>
  );
}

export default Uploader;
