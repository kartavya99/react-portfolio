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
    <section className="">
      {projectData.map((project) => (
        <div className="card custom-style">
          <img className="card-img-top" src={project.img} alt={project.title} />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">text</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>

        // <div className="">
        //   <img src={project.img} alt={project.title} className="" />
        //   <div className="">
        //     <h5 className="">{project.title}</h5>
        //     <p className="">{project.technology}</p>
        //   </div>
        // </div>
      ))}
    </section>
  );
};

export default Project;
