import IntervalClassCounter from "./components/Class/Effects/IntervalClassCounter";
import IntervalHookCounter from "./components/Function/Counter/IntervalHookCounter";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <IntervalClassCounter />
      <IntervalHookCounter />
    </div>
  );
}

export default App;
