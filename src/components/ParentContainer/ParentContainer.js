import React, { useState } from "react";
import SideNav from "../Sidenav/Nav";
import About from "../About/About";
import Project from "../Projects/Project";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";

import "./ParentContainer.css";

const ParentContainer = () => {
  const [currentPage, setCurrentPage] = useState("");

  const displayPage = () => {
    // console.log("hello world");
    if (currentPage === "About") return <About />;
    if (currentPage === "Project") return <Project />;
    if (currentPage === "Skills") return <Skills />;
    if (currentPage === "Contact") return <Contact />;
  };

  const pageChangeHandler = (prePage) => setCurrentPage(prePage);

  return (
    <>
      <div>
        <SideNav
          currentPage={currentPage}
          pageChangeHandler={pageChangeHandler}
        />
      </div>
      <div className="main-container"> {displayPage()} </div>
    </>
  );
};

export default ParentContainer;
