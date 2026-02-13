"use client";

import { useState } from "react";

type CounterProps = {
  users: any;
};

export default function Counter({ users }: CounterProps) {
  const [count, setCount] = useState(0);

  console.log(users);

  return (
    <div>
      <p>There are {users.length} users</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
}
