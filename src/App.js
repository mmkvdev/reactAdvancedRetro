import React from "react";
import ComponentC from "./components/Function/Context/ComponentC";
import "./styles/App.css";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value="mmk">
        <ChannelContext.Provider value="varma">
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
