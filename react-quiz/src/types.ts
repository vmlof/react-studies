import type { ActionDispatch } from "react";
import type { Action } from "./contexts/QuizContext";

export interface QuestionType {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
  id: number;
}

export interface QuizContextType {
  questions: QuestionType[];
  status: string;
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
  secondsRemaining: number | null;
  numQuestions: number;
  maxPossiblePoints: number;
  dispatch: ActionDispatch<[action: Action]>;
}
