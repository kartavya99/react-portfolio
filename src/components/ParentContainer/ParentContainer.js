import React, { useState } from "react";
import SideNav from "../Sidenav/Nav";
import About from "../About/About";
import Project from "../Projects/Project";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import "bootstrap/dist/css/bootstrap.min.css";

import "./ParentContainer.css";

const ParentContainer = () => {
  const [currentPage, setCurrentPage] = useState("Project");

  const displayPage = () => {
    // console.log("hello world");
    if (currentPage === "About") return <About />;
    if (currentPage === "Project") return <Project />;
    if (currentPage === "Skills") return <Skills />;
    if (currentPage === "Contact") return <Contact />;
  };

  const pageChangeHandler = (prePage) => setCurrentPage(prePage);

  return (
    <div className="row">
      <div className="col-sm-4 side-nave">
        <SideNav
          currentPage={currentPage}
          pageChangeHandler={pageChangeHandler}
        />
      </div>
      <div className="col-sm-8 parent-div"> {displayPage()} </div>
    </div>
  );
};

export default ParentContainer;
