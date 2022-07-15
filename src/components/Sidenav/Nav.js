import React from "react";

import pic from "../../Images/pic.jpg";

import "./Nav.css";

const Nav = ({ currentPage, pageChangeHandler }) => {
  // console.log(pageChangeHandler);
  return (
    <div className="">
      <img src={pic} alt="tech" className=""></img>
      <h1 className="name">Kartavya Saini</h1>
      <a href="#about" onClick={() => pageChangeHandler("About")} className="">
        About
      </a>
      <a
        className=""
        href="#project"
        onClick={() => pageChangeHandler("Project")}
      >
        Project
      </a>
      <a
        className=""
        href="#skills"
        onClick={() => pageChangeHandler("Skills")}
      >
        {" "}
        Skills{" "}
      </a>
      <a
        className=""
        href="#contact"
        onClick={() => pageChangeHandler("Contact")}
      >
        {" "}
        Contact{" "}
      </a>
      <a className="" href="#resume">
        {" "}
        Resume{" "}
      </a>
    </div>
  );
};

export default Nav;
