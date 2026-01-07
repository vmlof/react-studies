import type { ActionDispatch } from "react";
import type { Action, IQuestion } from "../App";

type OptionsProps = {
  question: IQuestion;
  dispatch: ActionDispatch<[action: Action]>;
  answer: number | null;
};

function Options({ question, dispatch, answer }: OptionsProps) {
  const hasAnswerd = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswerd
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswerd}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
          {}
        </button>
      ))}
    </div>
  );
}

export default Options;
