import type { QuestionType } from "../types";
import { UseQuiz, type Action } from "../contexts/QuizContext";

type OptionsProps = {
  question: QuestionType;
};

function Options({ question }: OptionsProps) {
  const { dispatch, answer } = UseQuiz();
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
