import "./App.css";
import { About } from "./Components/About/About";
import { Banner } from "./Components/Banner/Banner";
import { Contact } from "./Components/Contact/Contact";
import { NavBar } from "./Components/NavBar/NavBar";
import { Project } from "./Components/ProjectHome/Project";

function App() {
  return (
    <div className="scroll">
      <NavBar />
      <Banner />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
