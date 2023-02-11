import React from "react";
import "./skills.css";
import { data } from "./skill.js";

export const SkillsIcon = () => {
  return data.map(({ img, title }, index) => {
    return (
      <div className="skills_container" key={index}>
        <img src={img} alt="" />
        <h5>{title}</h5>
      </div>
    );
  });
};
