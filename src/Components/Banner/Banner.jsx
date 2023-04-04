import React from "react";
import "./banner.css";
import { gotoLink } from "../goToLink.js";
import { Particle } from "../Particle";
import Typewriter from "typewriter-effect";

export const Banner = () => {
  return (
    <div id="home" className="conatiner">
      <div className="particle">
        <Particle />
      </div>
      <div className="data" id="homes">
        <div>
          <h1 id="user-detail-name" className="home_title">
            Hi,I'm Aman Kumar
          </h1>
        </div>
        <div className="typeWriteCont">
          <h1>
            <Typewriter
              options={{
                strings: ["A Web Developer", "A Problem Solver"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <div>
          <h3 id="user-detail-intro">
            Passionate and diligent web developer with specialization in MERN
            stack. Enthusiastic about building interactive and user-friendly
            websites.Looking forward to an exciting opportunity to work in a
            challenging role as a full-stack developer.
          </h3>
        </div>

        <div>
          <div className="links_container">
            <div className="links_image">
              <img
                src="/github_light.svg"
                alt=""
                onClick={() => {
                  gotoLink("https://github.com/AmanKumarWeb19");
                }}
              />
              <img
                src="/twitter.svg"
                alt=""
                onClick={() => {
                  gotoLink("https://twitter.com/StackDevelopr");
                }}
              />
              <img
                src="/linkedin.svg"
                alt=""
                onClick={() => {
                  gotoLink("https://www.linkedin.com/in/aman-kumar-1a3047194/");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
