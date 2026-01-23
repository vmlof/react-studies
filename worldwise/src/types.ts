import City from "./components/City";

interface Position {
  lat: number;
  lng: number;
}

export interface City {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: Position;
  id: string;
}

export interface CitiesContextType {
  cities: City[];
  isLoading: boolean;
  currentCity: City | null;
  getCity: (id: string) => void;
}
