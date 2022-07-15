import React from "react";

import pic from "../../Images/pic.jpg";
import "./Nav.css";

const Nav = ({ currentPage, pageChangeHandler }) => {
  // console.log(pageChangeHandler);
  return (
    <div className="sidenav">
      <img src={pic} alt="tech" className="nav-img"></img>
      <h1 className="name">Kartavya Saini</h1>
      <a href="#about" onClick={() => pageChangeHandler("About")} className="">
        About
      </a>
      <a
        href="#project"
        className=""
        onClick={() => pageChangeHandler("Project")}
      >
        Project
      </a>
      <a
        href="#skills"
        className=""
        onClick={() => pageChangeHandler("Skills")}
      >
        {" "}
        Skills{" "}
      </a>
      <a
        href="#contact"
        className=""
        onClick={() => pageChangeHandler("Contact")}
      >
        {" "}
        Contact{" "}
      </a>
      <a href="#resume" className="">
        {" "}
        Resume{" "}
      </a>
    </div>
  );
};

export default Nav;
