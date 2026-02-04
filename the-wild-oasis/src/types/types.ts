export interface Cabin {
  id: number;
  createdAt: string;
  description: string;
  discount: number;
  image: string;
  maxCapacity: number;
  name: string;
  regularPrice: number;
}

export interface Settings {
  id: number;
  createdAt: string;
  minBookingLength: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  breakfastPrice: number;
}
