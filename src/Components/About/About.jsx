import React from "react";
import "./About.css";
import { gotoLink } from "../goToLink";

export const About = () => {
  return (
    <div id="about" className="about section">
      <div className="about_me_container">
        <div className="about_me_image">
          <div>
            <img className="home-img" src="/amann.jpg" alt="" />
          </div>
        </div>
        <div>
          <h2 className="about_me">About Me</h2>

          <h4>
            <div id="user-detail-intro">
              <p>
                My name is Aman Kumar. Started as a Medical Representative but
                soon found the light in web development.
              </p>
              <p>
                It's barely been a minute since I have started learning to code,
                building simple real-world apps using JavaScript is something I
                duly cherish.
              </p>
              <p>
                I am diligently looking for opportunities to work as a web
                developer both on Frontend & Backend.
              </p>
            </div>
          </h4>
        </div>
      </div>

      <div>
        <div className="cv_button">
          <a
            id="resume-link-2"
            href="https://drive.google.com/uc?export=download&id=1mqtU-djLf_NFGkyg26WXdi83GYLFJtgc"
            onClick={() => {
              gotoLink(
                "https://drive.google.com/file/d/1mqtU-djLf_NFGkyg26WXdi83GYLFJtgc/view?usp=share_link"
              );
            }}
          >
            <div id="resume-button-2">DOWNLOAD RESUME</div>
          </a>
        </div>
      </div>
    </div>
  );
};
