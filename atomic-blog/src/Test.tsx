import { useState } from "react";
import SlowComponent from "./components/SlowComponent";

export default function Test() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      <SlowComponent />
    </div>
  );
}
