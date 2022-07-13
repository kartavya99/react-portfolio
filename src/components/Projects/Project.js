import React from "react";
import ProjectData from "./ProjectData";

const Project = () => {
  console.log(ProjectData[0]);
  console.log();
  return (
    <div>
      <div>{/* <img src=""></img> */}</div>
      <h1>Title</h1>
      <h2>technology</h2>
      <div>liveUrl</div>
      <div>GithubUrl</div>
      <p>info of the application</p>
    </div>
  );
};

export default Project;
