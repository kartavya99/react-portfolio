import React from "react";
import projectData from "./ProjectData";
import "./Project.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Project = (props) => {
  console.log(props.projectData);
  console.log(
    projectData.map((project) => {
      return console.log(project);
    })
  );
  return (
    <section className="project">
      {projectData.map((project) => (
        <div className="card box row">
          <img src={project.img} alt={project.title} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.technology}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Project;
