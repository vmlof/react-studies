import { createContext, useContext, useEffect, useState } from "react";
import type { CitiesContextType, City } from "../types";

type CitiesContextProps = {
  children: React.ReactNode;
};

const BASE_URL: string = "http://localhost:8000";

const CitiesContext = createContext<CitiesContextType | null>(null);

function CitiesProvider({ children }: CitiesContextProps) {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data: City[] = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
