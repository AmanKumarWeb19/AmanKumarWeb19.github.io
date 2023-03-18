import React from "react";
import "./skills.css";
import { data } from "./skill.js";

export const SkillsIcon = () => {
  return data.map(({ img, title }, index) => {
    return (
      <div id="skills" className="skills_container skills-card" key={index}>
        <img className="skills-card-img" src={img} alt="" />
        <h5 className="skills-card-name">{title}</h5>
      </div>
    );
  });
};
