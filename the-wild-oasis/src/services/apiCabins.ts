import type { Cabin } from "../types/types";
import supabase, { supabaseUrl } from "./supabase";

type CreateCabinDTO = Omit<Cabin, "id" | "createdAt" | "image"> & {
  image: File | string;
};

export async function getCabins(): Promise<Cabin[]> {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createEditCabin({
  newCabin,
  id,
}: {
  newCabin: CreateCabinDTO;
  id?: number;
}) {
  const hasImagePath =
    typeof newCabin.image === "string" &&
    newCabin.image?.startsWith(supabaseUrl);

  const imageName =
    !hasImagePath && newCabin.image instanceof File
      ? `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")
      : "";

  const imagePath = hasImagePath
    ? (newCabin.image as string)
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/edit cabin
  let query:
    | ReturnType<typeof supabase.from>
    | ReturnType<ReturnType<typeof supabase.from>["insert"]>
    | ReturnType<ReturnType<typeof supabase.from>["update"]>;

  query = supabase.from("cabins");

  if (!id) {
    // A) CREATE
    query = query.insert([{ ...newCabin, image: imagePath }]);
  } else {
    // B) EDIT
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  if (hasImagePath) return data;

  // 2. Upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);

    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created",
    );
  }

  return data;
}

export async function deleteCabin(id: number) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
