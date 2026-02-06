import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export function useBookins() {
  const {
    isPending,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookins"],
    queryFn: getBookings,
  });

  return { isPending, error, bookings };
}
