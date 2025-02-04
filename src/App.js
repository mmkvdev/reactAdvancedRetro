import React from "react";
import "./styles/App.css";
import MoreAdvancedCounter from "./components/Function/Reducer/MoreAdvancedCounter";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <MoreAdvancedCounter />
    </div>
  );
}

export default App;
