import { useState } from "react";

function Challenge() {
  const [step, setStep] = useState(1);
  const [count, setCont] = useState(1);

  return (
    <div className="container">
      <button>-</button>
      <button>+</button>
      <p>Step: {step}</p>

      <button>-</button>
      <button onClick={setCont(count + 1)}>+</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Challenge;
