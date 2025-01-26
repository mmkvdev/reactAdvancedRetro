import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/function/Greet";
import { Greet2 } from "./components/function/Greet";
import GreetWithClass from "./components/class/Greet";
import GreetWithoutJSX from "./components/function/GreetWithoutJSX";
import Welcome from "./components/class/Welcome";

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" key="king">
        <h1>This is children prop from Bruce</h1>
      </Greet>
      <Greet name="Clark">
        <button>This is the submit buttom from clark</button>
      </Greet>
      <Greet name="Diana">
        <p>This is the paragraph from Diana</p>
      </Greet>
      <Greet2 />
      <GreetWithClass name="Bruce" key="king" />
      <GreetWithClass name="Clark" key="king" />
      <GreetWithClass name="Diana" key="king" />
      <GreetWithoutJSX name="Bruce" key="king" />
    </div>
  );
}

export default App;
