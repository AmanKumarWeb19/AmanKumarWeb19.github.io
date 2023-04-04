import React from "react";
import "./skills.css";
import { data } from "./skill.js";

export const SkillsIcon = () => {
  return (
    <div id="skills" style={{ marginBottom: "50px" }}>
      <h2 className="my_skills">My Skills</h2>
      <div className="skills_icon">
        {data.map(({ img, title }, index) => {
          return (
            <div className="skills-card" key={index}>
              <img className="skills-card-img" src={img} alt="" />
              <h5 className="skills-card-name">{title}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};
