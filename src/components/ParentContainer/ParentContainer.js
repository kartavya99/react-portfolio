import React, { useState } from "react";
import SideNav from "../Sidenav/Nav";

import "./ParentContainer.css";

const ParentContainer = () => {
  const [currentPage, setCurrentPage] = useState("About");

  const pageChangeHandler = (prePage) => {
    setCurrentPage(prePage);
  };

  return (
    <div className="main-container">
      <SideNav
        currentPage={currentPage}
        pageChangeHandler={pageChangeHandler}
      />
    </div>
  );
};

export default ParentContainer;
