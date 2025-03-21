import "./styles.css";
import { Navbar } from "./Navbar";
import { List } from "./List";
import PostProvider from "./postContext";

export default function App() {
  return (
    //Add the Context provider here
    <PostProvider>
      <div className="App">
        <Navbar />
        <List />
      </div>
    </PostProvider>
  );
}
