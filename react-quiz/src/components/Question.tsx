import type { ActionDispatch } from "react";
import type { Action, IQuestion } from "../App";
import Options from "./Options";

type QuestionProps = {
  question: IQuestion;
  dispatch: ActionDispatch<[action: Action]>;
  answer: number | null;
};

function Question({ question, dispatch, answer }: QuestionProps) {
  console.log(question);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
