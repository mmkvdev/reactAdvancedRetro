import ClickCounter from "./components/Class/ClickCounter";
import HoverCounter from "./components/Class/HoverCounter";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <ClickCounter name="MMK" />
      <HoverCounter />
    </div>
  );
}

export default App;
