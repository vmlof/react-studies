import { memo, useState, type ChangeEvent } from "react";
import clickSound from "./ClickSound.m4a";

interface Workout {
  name: string;
  numExercises: number;
}

interface CalculatorProps {
  workouts: Workout[];
  allowSound: boolean;
}

function Calculator({ workouts, allowSound }: CalculatorProps) {
  const [number, setNumber] = useState(workouts.at(0)?.numExercises || 0);
  const [sets, setSets] = useState(3);
  const [speed, setSpeed] = useState(90);
  const [durationBreak, setDurationBreak] = useState(5);

  const duration: number =
    (number * sets * speed) / 60 + (sets - 1) * durationBreak;
  const mins: number = Math.floor(duration);
  const seconds: number = (duration - mins) * 60;

  const playSound = () => {
    if (!allowSound) return;
    const sound = new Audio(clickSound);
    sound.play().catch((err) => console.error("Erro ao tocar som:", err));
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<number>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setter(Number(e.target.value));
    };

  return (
    <>
      <form>
        <div>
          <label>Type of workout</label>
          <select value={number} onChange={handleInputChange(setNumber)}>
            {workouts.map((workout) => (
              <option value={workout.numExercises} key={workout.name}>
                {workout.name} ({workout.numExercises} exercises)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>How many sets?</label>
          <input
            type="range"
            min="1"
            max="5"
            value={sets}
            onChange={handleInputChange(setSets)}
          />
          <span>{sets}</span>
        </div>
        <div>
          <label>How fast are you?</label>
          <input
            type="range"
            min="30"
            max="180"
            step="30"
            value={speed}
            onChange={handleInputChange(setSpeed)}
          />
          <span>{speed} sec/exercise</span>
        </div>
        <div>
          <label>Break length</label>
          <input
            type="range"
            min="1"
            max="10"
            value={durationBreak}
            onChange={handleInputChange(setDurationBreak)}
          />
          <span>{durationBreak} minutes/break</span>
        </div>
      </form>
      <section>
        <button onClick={() => {}}>–</button>
        <p>
          {mins < 10 && "0"}
          {mins}:{seconds < 10 && "0"}
          {Math.round(seconds)}
        </p>
        <button onClick={() => {}}>+</button>
      </section>
    </>
  );
}

export default memo(Calculator);
