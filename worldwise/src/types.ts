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

export interface LocalityDetail {
  name: string;
  description: string;
  order: number;
  wikidataId?: string;
  geonameId?: number;
}

export interface LocalityInfo {
  administrative: LocalityDetail[];
  informative: LocalityDetail[];
}

export interface GeolocationResponse {
  latitude: number;
  lookupSource: string;
  longitude: number;
  localityLanguageRequested: string;
  continent: string;
  continentCode: string;
  countryName: string;
  countryCode: string;
  principalSubdivision: string;
  principalSubdivisionCode: string;
  city: string;
  locality: string;
  postcode: string;
  plusCode: string;
  localityInfo: LocalityInfo;
}
