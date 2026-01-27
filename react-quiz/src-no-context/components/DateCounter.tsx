import { useReducer, type ChangeEvent } from "react";

interface State {
  count: number;
  step: number;
}

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "setCount"; payload: number }
  | { type: "setStep"; payload: number };

const initialState: State = { count: 0, step: 1 };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

export default function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  console.log(state);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = () => {
    dispatch({ type: "decrement" });
  };

  const inc = function () {
    dispatch({ type: "increment" });
  };

  const defineCount = function (e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      {(count !== 0 || step !== 1) && (
        <div>
          <button onClick={reset}>Reset</button>
        </div>
      )}
    </div>
  );
}
