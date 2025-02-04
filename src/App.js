import React, { useReducer } from "react";
import "./styles/App.css";
import MoreAdvancedCounter from "./components/Function/Reducer/MoreAdvancedCounter";
import ComponentA from "./components/Function/Reducer/ComponentA";
import ComponentB from "./components/Function/Reducer/ComponentB";
import ComponentC from "./components/Function/Reducer/ComponentC";

export const CountContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    case "default":
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      Count - {count}
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default App;
