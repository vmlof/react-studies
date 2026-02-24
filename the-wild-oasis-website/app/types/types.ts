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
  id?: number;
  email: string | null | undefined;
  fullName: string | null | undefined;
  nationality?: string;
  countryFlag?: string;
  NationalID?: string;
}

export interface Booking {
  id: number;
  created_at: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  totalPrice: number;
  guestId: number;
  cabinId: number;
  cabins: {
    name: string;
    image: string;
  };
}
