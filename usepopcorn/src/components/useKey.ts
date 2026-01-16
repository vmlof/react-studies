import { useEffect } from "react";

export function useKey(key: string, action: () => void) {
  useEffect(() => {
    const callBack = (e: KeyboardEvent) => {
      if (e.code.toLocaleLowerCase() === key.toLowerCase()) {
        action();
      }
    };

    document.addEventListener("keydown", callBack);

    return function () {
      document.removeEventListener("keydown", callBack);
    };
  }, [action, key]);
}
