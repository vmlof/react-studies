import { useSearchParams } from "react-router";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat: string | null = searchParams.get("lat");
  const lng: string | null = searchParams.get("lng");

  return [lat, lng];
}
