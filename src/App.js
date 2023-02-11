import "./App.css";
import { About } from "./Components/About/About";
import { NavBar } from "./Components/NavBar/NavBar";
import { Project } from "./Components/ProjectHome/Project";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Project />
    </div>
  );
}

export default App;
