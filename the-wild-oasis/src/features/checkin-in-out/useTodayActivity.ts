import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";
import type { TodayActivity } from "../../types/types";

export function useTodayActivity() {
  const { isLoading, data: activities } = useQuery<TodayActivity[]>({
    queryFn: getStaysTodayActivity,
    queryKey: ["today-activity"],
  });

  return { activities, isLoading };
}
