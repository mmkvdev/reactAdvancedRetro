import "./styles/App.css";
import StyleSheet from "./components/Function/StyleSheet";
import Inline from "./components/Function/Inline";
import ModuleCss from "./components/Function/ModuleCss";

function App() {
  return (
    <div className="App">
      <StyleSheet primary />
      <Inline />
      <ModuleCss />
    </div>
  );
}

export default App;
