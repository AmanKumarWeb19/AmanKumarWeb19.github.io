import React from 'react'
import { gotoLink } from "../goToLink";
import { data } from "../ProjectData.js";
import "./Project.css"

export const Project = () => {
    return (
        <div className="container" id="projects">
          <div className="project_head">
            <h1>Projects</h1>
          </div>
          <div>
            <div className="project_container">
              {data.map(
                (
                  { title, repo, website, project_thumbnail, txt1, tech },
                  index
                ) => {
                  return (
                    <div className="project_box" key={index}>
                      <div>
                        <h2>{title}</h2>
                        <div className="icons">
                          <img
                            src="/github.svg"
                            alt=""
                            onClick={() => {
                              gotoLink(repo);
                            }}
                          />
                          <img
                            src="/link.svg"
                            alt=""
                            onClick={() => {
                              gotoLink(website);
                            }}
                          />
                        </div>
                      </div>
                      <h4>
                        <div>{txt1}</div>
                      </h4>
                      <div className="project_image">
                        <img src={project_thumbnail} alt="" />
                      </div>
                      <h4>{tech}</h4>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      );
}
