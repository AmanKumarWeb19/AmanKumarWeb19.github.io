import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./gitHub.css";
const GitHubStats = () => {
  return (
    <div className="gitHubStats_Container">
      <div
        className="gitStats_Wrap"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <div className="gitStats_two">
          <a href="https://github.com/AmanKumarWeb19">
            <img
              id="github-streak-stats"
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com/?user=amankumarweb19&"
              alt="amamKumar" //stats
            />
          </a>
        </div>
        <div className="gitStats_one">
          <a href="https://github.com/AmanKumarWeb19">
            <img
              id="github-top-langs"
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=amankumarweb19&show_icons=true&locale=en&layout=compact"
              alt="amanKumar"
            />
          </a>
        </div>
        <div className="gitStats_three">
          <a href="https://github.com/AmanKumarWeb19">
            <img
              id="github-stats-card"
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=amankumarweb19&show_icons=true&locale=en"
              alt="amamKumar" //stats
            />
          </a>
        </div>
      </div>
      <div className="gitcalendar_wrap">
        <GitHubCalendar username="AmanKumarWeb19" />
      </div>
    </div>
  );
};

export default GitHubStats;
