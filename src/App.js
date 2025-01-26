import "./App.css";
import Counter from "./components/Counter";
import Greet from "./components/function/Greet";
import GreetWithClass from "./components/class/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" />
      <GreetWithClass name="Clark" />
      <Counter rank={1} />
    </div>
  );
}

export default App;
