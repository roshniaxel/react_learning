import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((counter) => counter + 1);
  }

  return (
    // <div onClick={() => setCounter((counter) => counter + 1)}>{counter}</div>
    <div onClick={handleClick}>{counter}</div>
  );
}
