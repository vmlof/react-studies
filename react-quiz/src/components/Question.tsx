import Options from "./Options";

import { UseQuiz } from "../contexts/QuizContext";

function Question() {
  const { questions, index } = UseQuiz();
  const question = questions.at(index);

  return (
    <div>
      <h4>{question?.question}</h4>
      <Options question={question!} />
    </div>
  );
}

export default Question;
