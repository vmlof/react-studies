import { useState } from "react";
import SlowComponent from "./components/SlowComponent";

type CounterProps = {
  children: React.ReactNode;
};

function Counter({ children }: CounterProps) {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      {children}
    </div>
  );
}

export default function Test() {
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <Counter>
        <SlowComponent />
      </Counter>
    </div>
  );
}
