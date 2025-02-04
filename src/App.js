import React from "react";
import "./styles/App.css";
import ComplexCounter from "./components/Function/Reducer/ComplexCounter";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <ComplexCounter />
    </div>
  );
}

export default App;
