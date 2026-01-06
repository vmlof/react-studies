import { useReducer, useState, type ChangeEvent } from "react";

function reducer(state: number, action: any) {
  console.log(state, action);
  if (action.type === "inc") return state + action.payload;
  if (action.type === "dec") return state + action.payload;
  if (action.type === "setCount") return state + action.payload;
}

export default function DateCounter() {
  //   const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, 0);

  const [step, setStep] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = () => {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({ type: "dec", payload: -1 });
  };

  const inc = function () {
    dispatch({ type: "inc", payload: 1 });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e: ChangeEvent<HTMLInputElement>) {
    // setCount(Number(e.target.value));
    dispatch({ type: "SetCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e: ChangeEvent<HTMLInputElement>) {
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    setStep(1);
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
