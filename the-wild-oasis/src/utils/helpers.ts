import { formatDistance, parseISO, isDate } from "date-fns";
import { differenceInDays } from "date-fns";

// We want to make this function work for both Date objects and strings (which come from Supabase)
const ensureDate = (date: Date | string): Date =>
  isDate(date) ? (date as Date) : parseISO(date as string);

export const subtractDates = (
  date1: Date | string,
  date2: Date | string,
): number => differenceInDays(ensureDate(date1), ensureDate(date2));

export const formatDistanceFromNow = (dateStr: string): string =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

interface GetTodayOptions {
  end?: boolean;
}

export const getToday = (options: GetTodayOptions = {}): string => {
  const today = new Date();

  if (options?.end) {
    // To compare with Supabase's created_at, we might need the date to be at the
    // very end of the day (23:59:59) rather than the start (00:00:00).
    today.setUTCHours(23, 59, 59, 999);
  } else {
    today.setUTCHours(0, 0, 0, 0);
  }

  return today.toISOString();
};

export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
