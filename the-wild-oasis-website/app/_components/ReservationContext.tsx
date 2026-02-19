"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ProviderProps = {
  children: React.ReactNode;
};

interface State {
  from: Date | undefined;
  to?: Date | undefined;
}

const initialState: State = {
  from: undefined,
  to: undefined,
};

interface ContextType {
  setRange: Dispatch<SetStateAction<State>>;
  range: State;
  resetRange: () => void;
}

const ReservationContext = createContext<ContextType | undefined>(undefined);

function ReservationProvider({ children }: ProviderProps) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("useContext must be used within a ReservationProvider");
  }
  return context;
}

export { ReservationProvider, useReservation };
