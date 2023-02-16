import React from "react";
import "./contact.css";
import { gotoLink } from "../goToLink";

export const Contact = () => {
  return (
    <div className="contact_outer_container" id="contact_me">
      <div className="contact_container">
        <div className="reach_out">
          <div className="say_hello">
            <h1 style={{ color: "#1E2022" }}>SAY HELLO</h1>
          </div>
          <div>Feel Free to Reach out</div>
          <div className="temp_header">
            <img src="./email.svg" alt="" />
          </div>
          <div>akgupta0524@gmail.com</div>
          <div className="temp_header">
            <img src="./phone.svg" alt="" />
          </div>
          <div>+91 6202378933</div>
        </div>
        <div className="contact_input">
          <input
            className="contact_name"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="contact_email"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="contact_message"
            type="text"
            placeholder="Enter Message"
          />
          <button className="submit_button" disabled>
            Submit
          </button>
        </div>
      </div>
      <div className="footer_links">
        <div>
          <img
            src="./github_light.svg"
            alt=""
            onClick={() => {
              gotoLink("https://github.com/AmanKumarWeb19");
            }}
          />
          <div>github/Aman-Kumar</div>
        </div>
        <div>
          <img
            src="./linkedin.svg"
            alt=""
            onClick={() => {
              gotoLink("https://www.linkedin.com/in/aman-kumar-1a3047194/");
            }}
          />
          <div>linkedIn/Aman-Kumar</div>
        </div>
        <div>
          <img
            src="./twitter.svg"
            alt=""
            onClick={() => {
              gotoLink("https://twitter.com/StackDevelopr");
            }}
          />
          <div>twitter/Aman-Kumar</div>
        </div>
      </div>
    </div>
  );
};
