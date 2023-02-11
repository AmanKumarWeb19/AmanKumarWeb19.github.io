import React from "react";
import "./About.css";
import { SkillsIcon } from "../Skills/Skill.jsx";

export const About = () => {
  return (
    <div id="about" className="main_container">
      <div className="about_me_container">
        <div className="about_me_image">
          <div>
            <img src="/aman.jpg" alt="" />
          </div>
        </div>
        <div>
          <h2 className="about_me">About Me</h2>

          <h4>
            <div>
              <p>
                My name is Aman Kumar. Started as a Medical Representative but
                soon found the light in web development.
              </p>
              <p>
                It's barely been a minute since I have started learning to code,
                building simple real-world apps is something I duly cherish.
              </p>
              <p>
                I am diligently looking for opportunities to work as a web
                developer.
              </p>
            </div>
          </h4>
        </div>
      </div>
      <div>
        <h2 className="my_skills">My Skills</h2>
        <div className="skills_icon">
          <SkillsIcon />
        </div>
      </div>
      <div></div>
    </div>
  );
};
