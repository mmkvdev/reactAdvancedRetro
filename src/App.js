import "./App.css";
import ClassClick from "./components/Class/Events";
import Counter from "./components/Counter";
import FunctionClick from "./components/Function/Events";

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <Counter rank={1} />
      <ClassClick />
    </div>
  );
}

export default App;
