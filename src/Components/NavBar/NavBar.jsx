import React from "react";
import { Link } from "react-scroll";
import "./NavBar.css";
import { gotoLink } from "../goToLink";

export const NavBar = () => {
  return (
    <div className="Navbar_container">
      <div>
        <Link to="home" activeClass="active" spy={true} smooth={true}>
          Home
        </Link>
      </div>
      <div>
        <Link to="about" spy={true} smooth={true}>
          About
        </Link>
      </div>
      <div>
        <Link to="projects" spy={true} smooth={true}>
          Projects
        </Link>
      </div>
      <div>
        <Link to="contact_me" spy={true} smooth={true}>
          Contact Me
        </Link>
      </div>
      <div>
        <a  href="https://drive.google.com/uc?export=download&id=1SwBXVE-sjgj6A0ES6fEigpjUdQG4bdVx"
            onClick={() => {
              gotoLink(
                "https://drive.google.com/file/d/1SwBXVE-sjgj6A0ES6fEigpjUdQG4bdVx/view?usp=share_link"
              );
            }}>Resume
       </a>
      </div>
    </div>
  );
};
