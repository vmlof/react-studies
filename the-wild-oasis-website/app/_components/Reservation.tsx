import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { Cabin } from "../types/types";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

type ReservationProps = {
  cabin: Cabin;
};

export default async function Reservation({ cabin }: ReservationProps) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="grid max-[1150px]:grid-cols-1 grid-cols-2 border border-primary-800 min-h-100">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
