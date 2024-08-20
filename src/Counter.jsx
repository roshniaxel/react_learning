// import { useReducer, useState } from "react";

// function reducer(state, action) {
//   return state;
// }

// export function Counter({ initialCount = 0 }) {
//   const [] = useReducer(reducer, initialCount);
//   const [count, setCount] = useState(initialCount);

//   return (
//     <>
//       <button onClick={() => setCount((c) => c - 1)}>-</button>
//       {count}
//       <button onClick={() => setCount((c) => c - 1)}>+</button>
//     </>
//     // // <div onClick={() => setCounter((counter) => counter + 1)}>{counter}</div>
//     // <div onClick={handleClick}>{counter}</div>
//   );
// }

import { useReducer } from "react";

function reducer(count, action) {
  switch (action.type) {
    case "DECREMENT":
      return count - 1;
    case "INCREMENT":
      return count + 1;
    case "INCREMENT by payload":
      return count + action.payload.value;
    case "RESET":
      return 0;
    default:
      return count;
  }
}

export function CounterReducer({ initialcount = 0 }) {
  const [count, dispatch] = useReducer(reducer, initialcount);
  return (
    <>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button
        onClick={() =>
          dispatch({ type: "INCREMENT by payload", payload: { value: 5 } })
        }
      >
        +5
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </>
  );
}
