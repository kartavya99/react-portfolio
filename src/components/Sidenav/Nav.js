import React from "react";
import avatar from "../../Images/avatar.jpg";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="side-nav">
      <img src={avatar} alt="tech"></img>
      <h2>Kartavya Saini</h2>
      <h2> About </h2>
      <h2> Projects </h2>
      <h2> Skills</h2>
      <h2> Contact </h2>
      <h2> Resume </h2>
    </div>
  );
};

export default Nav;
