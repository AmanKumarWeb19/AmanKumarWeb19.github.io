import "./App.css";
import { About } from "./Components/About/About";
import { Banner } from "./Components/Banner/Banner";
import { Contact } from "./Components/Contact/Contact";
import GitHubStats from "./Components/GithubStats/GitHubStats";
import { NavBar } from "./Components/NavBar/NavBar";
import { Project } from "./Components/ProjectHome/Project";

function App() {
  return (
    <div className="scroll">
      <NavBar />
      <Banner />
      <About />
      <GitHubStats />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
