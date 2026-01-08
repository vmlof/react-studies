import type { ActionDispatch } from "react";
import type { Action } from "../App";

type NextButtonProps = {
  dispatch: ActionDispatch<[action: Action]>;
  answer: number | null;
  numQuestions: number;
  index: number;
};

function NextButton({
  dispatch,
  answer,
  numQuestions,
  index,
}: NextButtonProps) {
  if (answer === null) return;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
