import React from "react";
import "./About.css";
// import { SkillsIcon } from "../Skills/Skill.jsx";
import { gotoLink } from "../goToLink";

export const About = () => {
  return (
    <div id="about" className="about section">
      <div className="about_me_container">
        <div className="about_me_image">
          <div className="home-img">
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
      {/* <div>
        <h2 className="my_skills">My Skills</h2>
        <div className="skills_icon">
          <SkillsIcon />
        </div>
      </div> */}
      <div>
        <div className="cv_button">
          <a
            id="resume-link-2"
            href="https://drive.google.com/uc?export=download&id=1SwBXVE-sjgj6A0ES6fEigpjUdQG4bdVx"
            onClick={() => {
              gotoLink(
                "https://drive.google.com/file/d/1SwBXVE-sjgj6A0ES6fEigpjUdQG4bdVx/view?usp=share_link"
              );
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </div>
  );
};
