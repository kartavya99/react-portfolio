import React from "react";
import "./Skill.css";

const Skills = () => {
  return (
    <div className="">
      <div>
        <h3>Languages</h3>
        <h6>HTML, CSS, JavaScript, SQL</h6>
      </div>
      <div>
        <h3>Frontend</h3>
        <h6>React, Bootstrap, JQUery, Redux</h6>
      </div>
      <div>
        <h3>Backend</h3>
        <h6>
          Node.js, ExpressJS, REST APIs, Apollo, MongoDB, Mongoose, Sequelize{" "}
        </h6>
      </div>
      <div>
        <h3>Application</h3>
        <h6>
          Git, Heroku, Insomnia, MySQL, Progressive Web Application, Webpack
        </h6>
      </div>
      <div>
        <h3>Productivity</h3>
        <h6>Slack, Zoom, Microsoft Office Suits</h6>
      </div>
    </div>
  );
};

export default Skills;
