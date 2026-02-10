import { useContext } from "react";
import { DarkModeContext } from "./DarkModeCOntext";

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");

  return context;
}

export { useDarkMode };
