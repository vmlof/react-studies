import { useEffect, type ActionDispatch } from "react";
import { UseQuiz } from "../contexts/QuizContext";

function Timer() {
  const { secondsRemaining, dispatch } = UseQuiz();

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
