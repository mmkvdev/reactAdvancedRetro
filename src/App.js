import React from "react";
import "./styles/App.css";
import FocusInput from "./components/Function/Refs/FocusInput";
import Timer from "./components/Class/Refs/Timer";
import FunctionTimer from "./components/Function/Refs/Timer";

function App() {
  return (
    <div className="App">
      <Timer />
      <FunctionTimer />
    </div>
  );
}

export default App;
