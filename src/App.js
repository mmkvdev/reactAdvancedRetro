import React from "react";
import "./styles/App.css";
import Counter from "./components/Function/Reducer/Counter";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
