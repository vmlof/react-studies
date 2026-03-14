export interface GeocodingResult {
  latitude: number;
  longitude: number;
  timezone: string;
  name: string;
  country_code: string;
}

export interface GeocodingResponse {
  results?: GeocodingResult[];
}

export interface WeatherResponse {
  daily: {
    weathercode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: string[];
  };
}
