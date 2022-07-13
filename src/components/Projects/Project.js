import React from "react";
import projectData from "./ProjectData";
import "./Project.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Project = () => {
  // console.log(ProjectData[0]);

  const projectElements = projectData.map((project) => {
    return (
      <div className="card box row">
        <img src={project.img} alt={project.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.technology}</p>
        </div>
      </div>
    );
  });

  return <div className="project">{projectElements}</div>;
};

export default Project;
