import React from "react";

import projectsData from "./ProjectsList.json";

import "./ProjectsList.css";

const ProjectList = () => {
  return (
    <section className="projects-list__wrapper">
      <div className="page-width">
        <div className="projects-list__content">
          <div className="section-header">
            <h3 className="section-subheading">{projectsData.subheading}</h3>
            <h2 className="section-heading">{projectsData.heading}</h2>
          </div>
          <ul className="projects-list">
            {projectsData.projects.map((project, index) => {
              return (
                <li
                  className={`projects-list__item ${
                    index % 2 == 0 ? "toCenter" : "toLeft"
                  }`}
                  key={project.id}
                  style={{
                    background: `url(${project.image}) no-repeat center/cover`,
                  }}
                >
                  <a href="" className="project-list__item-link">

                  <div className="project-content">
                    <h3 className="project-heading">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <button className="button project-button">
                      {project.button_text}
                    </button>
                  </div>
                  <h5 className="project-number">{project.id}</h5>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
