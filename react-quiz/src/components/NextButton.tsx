import type { ActionDispatch } from "react";
import type { Action } from "../App";

type NextButtonProps = {
  dispatch: ActionDispatch<[action: Action]>;
  answer: number | null;
};

function NextButton({ dispatch, answer }: NextButtonProps) {
  if (answer === null) return;

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
