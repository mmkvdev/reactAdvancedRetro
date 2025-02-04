import React, { useState, useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function MoreAdvancedCounter() {
  //   const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  useReducer();
  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
      <div>
        <h1>{count2}</h1>
        <button onClick={() => dispatch2("increment")}>Increment</button>
        <button onClick={() => dispatch2("decrement")}>Decrement</button>
        <button onClick={() => dispatch2("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default MoreAdvancedCounter;
