import React from "react";
import projectData from "./ProjectData";

const Project = (props) => {
  // console.log(ProjectData[0]);
  // console.log();
  const projectElements = projectData.map((project) => {
    console.log(project);
  });
  return <div>{projectElements}</div>;
};

export default Project;
