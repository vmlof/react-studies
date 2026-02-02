export interface Cabin {
  id: number;
  createdAt: string;
  description: string;
  discount: number;
  image: string | null;
  maxCapacity: number;
  name: string;
  regularPrice: number;
}
