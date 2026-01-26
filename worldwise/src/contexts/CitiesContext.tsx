import { createContext, useContext, useEffect, useReducer } from "react";
import type { CitiesContextType, City, NewCity } from "../types";

type CitiesContextProps = {
  children: React.ReactNode;
};

interface State {
  cities: City[];
  isLoading: boolean;
  currentCity: City | null;
  error: string;
}

type Action =
  | { type: "loading" }
  | { type: "cities/loaded"; payload: City[] }
  | { type: "city/created"; payload: City }
  | { type: "city/deleted"; payload: string }
  | { type: "rejected"; payload: string }
  | { type: "city/loaded"; payload: City };

const initialState: State = {
  cities: [],
  isLoading: false,
  currentCity: null,
  error: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };
    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: null,
      };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

const BASE_URL: string = "http://localhost:8000";

const CitiesContext = createContext<CitiesContextType | null>(null);

function CitiesProvider({ children }: CitiesContextProps) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: "loading" });

      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data: City[] = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading cities...",
        });
      }
    }
    fetchCities();
  }, []);

  async function getCity(id: string) {
    console.log(id, currentCity?.id);
    if (id === currentCity?.id) return;

    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data: City = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading the city...",
      });
    }
  }

  async function createCity(newCity: NewCity) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data: City = await res.json();

      dispatch({ type: "city/created", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error creating the city...",
      });
    }
  }

  async function deleteCity(id: string) {
    dispatch({ type: "loading" });

    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      dispatch({ type: "city/deleted", payload: id });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error deleting the city...",
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
        error,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities(): CitiesContextType {
  const context = useContext(CitiesContext);
  if (context === undefined || context === null)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
