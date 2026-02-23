export interface Cabin {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description?: string;
}

export interface Settings {
  id: number;
  createdAt: string;
  minBookingLength: number;
  maxBookingLength: number;
  breakfastPrice: number;
  maxGuestsPerBooking: number;
}

export interface Guest {
  email: string | null | undefined;
  fullName: string | null | undefined;
}
