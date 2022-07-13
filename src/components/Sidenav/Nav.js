import React from "react";
import avatar from "../../Images/avatar.jpg";

import "./Nav.css";

const Nav = ({ currentPage, pageChangeHandler }) => {
  // console.log(pageChangeHandler);
  return (
    <div className="side-nav">
      <img src={avatar} alt="tech"></img>
      <h2>Kartavya Saini</h2>
      <a href="#about" onClick={() => pageChangeHandler("About")}>
        About
      </a>
      <a href="#project" onClick={() => pageChangeHandler("Project")}>
        Project
      </a>
      <a href="#skills" onClick={() => pageChangeHandler("Skills")}>
        {" "}
        Skills{" "}
      </a>
      <a href="#contact" onClick={() => pageChangeHandler("Contact")}>
        {" "}
        Contact{" "}
      </a>
      <a href="#resume"> Resume </a>
    </div>
  );
};

export default Nav;
