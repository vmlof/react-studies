"use client";

import { isWithinInterval } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Cabin, Settings } from "../types/types";
import { useReservation } from "./ReservationContext";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isAlreadyBooked(
  range: { from: Date | undefined; to: Date | undefined },
  datesArr: Date[],
) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date: Date) =>
      isWithinInterval(date, { start: range.from!, end: range.to! }),
    )
  );
}

type DateSelectorProps = {
  settings: Settings;
  cabin: Cabin;
  bookedDates: Date[];
};

function DateSelector({ settings, cabin, bookedDates }: DateSelectorProps) {
  const { range, setRange, resetRange } = useReservation();

  // Handle date selection from DayPicker
  const handleSelect = (selectedRange: DateRange | undefined) => {
    if (selectedRange) {
      setRange(selectedRange);
    } else {
      resetRange();
    }
  };

  // CHANGE
  const regularPrice = 23;
  const discount = 23;
  const numNights = 23;
  const cabinPrice = 23;
  // const range: { from: Date | undefined; to: Date | undefined } = {
  //   from: undefined,
  //   to: undefined,
  // };

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="flex items-center justify-center py-6 min-[1025px]:pt-20 px-[50%] sm:px-0"
        mode="range"
        onSelect={handleSelect}
        selected={range}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
      />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between py-2 px-5 md:px-8 bg-accent-500 text-primary-800 h-auto md:h-18">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
