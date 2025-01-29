import ClickCounter2 from "./components/Class/ClickCounter2";
import Counter from "./components/Class/Counter";
import HoverCounter2 from "./components/Class/HoverCounter2";
import User from "./components/Class/User";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Counter>
        {(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter2 count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      {/* <ClickCounter2 />
      <HoverCounter2 />
      <User render={(isLoggedIn) => (isLoggedIn ? "MMK" : "Guest")} /> */}
    </div>
  );
}

export default App;
