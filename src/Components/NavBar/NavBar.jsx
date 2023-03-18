import React from "react";
import { Link } from "react-scroll";
import "./NavBar.css";
import { gotoLink } from "../goToLink";

export const NavBar = () => {
  return (
    <div id="nav-menu" className="Navbar_container">
      <div className="nav-link home">
        <Link to="home" activeClass="active" spy={true} smooth={true}>
          Home
        </Link>
      </div>
      <div className="nav-link about">
        <Link to="about" spy={true} smooth={true}>
          About
        </Link>
      </div>
      <div className="nav-link projects">
        <Link to="projects" spy={true} smooth={true}>
          Projects
        </Link>
      </div>
      <div className="nav-link skills">
        <Link to="skills" spy={true} smooth={true}>
          Skills
        </Link>
      </div>
      <div className="nav-link contact">
        <Link to="contact" spy={true} smooth={true}>
          Contact Me
        </Link>
      </div>
      <div className="nav-link resume">
        <a
          id="resume-link-1"
          href="https://drive.google.com/uc?export=download&id=1SwBXVE-sjgj6A0ES6fEigpjUdQG4bdVx"
          onClick={() => {
            gotoLink(
              "https://drive.google.com/file/d/1SwBXVE-sjgj6A0ES6fEigpjUdQG4bdVx/view?usp=share_link"
            );
          }}
        >
          Resume
        </a>
      </div>
    </div>
  );
};
