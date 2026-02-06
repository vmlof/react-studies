import { useQuery } from "@tanstack/react-query";
import { getBookings, type Filter } from "../../services/apiBookings";
import { useSearchParams } from "react-router";

export function useBookins() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter: Filter | null =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // { field: "status", value: 5000, method: "gte" };

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  const {
    isPending,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookins", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isPending, error, bookings };
}
