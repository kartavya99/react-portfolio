import React from "react";
import projectData from "./ProjectData";
import "./Project.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Project = (props) => {
  // console.log(projectData);
  // console.log(
  //   projectData.map((project) => {
  //     return console.log(project);
  //   })
  // );
  return (
    <div>
      <heading className="">
        <div className="project-heading"> Projects |</div>
      </heading>
      <section className="container-fluid">
        {projectData.map((project) => (
          // <div className="inner-container">
          //   <div className="card custom-style">
          //     <img
          //       className="card-img-top"
          //       src={project.img}
          //       alt={project.title}
          //     />
          //     <div className="card-body">
          //       <h5 className="card-title">{project.title}</h5>
          //       <p className="card-text">text</p>
          //       {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          //     </div>
          //   </div>
          // </div>

          <div className="card custom-style box">
            <img src={project.img} alt={project.title} className="card-body " />
            <div className="">
              <h5 className="">{project.title}</h5>
              <p className="">{project.technology}</p>
              <a
                href={project.gitHubUrl}
                target="__blank"
                rel="noopener noreferrer"
              >
                REPO
              </a>
              <a
                href={project.liveUrl}
                className="pro-link"
                target="__blank"
                rel="noopener noreferrer"
              >
                LIVE
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Project;
