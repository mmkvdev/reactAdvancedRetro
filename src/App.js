import ComponentC from "./components/Class/Context/ComponentC";
import { UserProvider } from "./components/Class/Context/userContext";
import PostList from "./components/Class/HTTP/PostList";
import PushListData from "./components/Class/HTTP/PushListData";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      {/* <PostList /> */}
      <PushListData />
    </div>
  );
}

export default App;
