import React from "react";
import avatar from "../../Images/avatar.jpg";

import "./Nav.css";

const Nav = ({ currentPage, pageChangeHandler }) => {
  // console.log(pageChangeHandler);
  return (
    <div className="side-nav ">
      <img src={avatar} alt="tech" className="img"></img>
      <h2 className="a">Kartavya Saini</h2>
      <a href="#about" onClick={() => pageChangeHandler("About")} className="a">
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
