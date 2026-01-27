import type { ActionDispatch } from "react";
import type { Action } from "../App";
import Options from "./Options";
import type { QuestionType } from "../types";

type QuestionProps = {
  question: QuestionType;
  dispatch: ActionDispatch<[action: Action]>;
  answer: number | null;
};

function Question({ question, dispatch, answer }: QuestionProps) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
