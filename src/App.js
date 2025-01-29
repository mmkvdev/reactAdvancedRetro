import ComponentC from "./components/Class/Context/ComponentC";
import { UserProvider } from "./components/Class/Context/userContext";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <UserProvider value="MMK">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
