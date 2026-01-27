import { useEffect, type ActionDispatch } from "react";
import type { Action } from "../App";

type TimerProps = {
  dispatch: ActionDispatch<[action: Action]>;
  secondsRemaining: number | null;
};

function Timer({ dispatch, secondsRemaining }: TimerProps) {
  const mins: number = Math.floor(secondsRemaining! / 60);
  const seconds: number = secondsRemaining! % 60;

  useEffect(() => {
    const id: number = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}: {seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
