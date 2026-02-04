import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";
import type { Settings } from "../../types/types";

export function useSettings() {
  const {
    isPending,
    error,
    data: settings,
  } = useQuery<Settings>({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isPending, error, settings };
}
