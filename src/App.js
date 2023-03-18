import "./App.css";
import { About } from "./Components/About/About";
import { Banner } from "./Components/Banner/Banner";
import { Contact } from "./Components/Contact/Contact";
import GitHubStats from "./Components/GithubStats/GitHubStats";
import { NavBar } from "./Components/NavBar/NavBar";
import { Project } from "./Components/ProjectHome/Project";
import { SkillsIcon } from "./Components/Skills/Skill.jsx";

function App() {
  return (
    <div className="scroll">
      <NavBar />
      <Banner />
      <About />
      <div style={{ marginBottom: "50px" }}>
        <h2 className="my_skills">My Skills</h2>
        <div className="skills_icon">
          <SkillsIcon />
        </div>
      </div>
      <GitHubStats />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
