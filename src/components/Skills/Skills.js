import React from "react";
import "./Skill.css";

const Skills = () => {
  return (
    <div className="skill">
      <div className="para-skills ">
        <h3 className="heading">Languages</h3>
        <h6 className="text-skills">HTML / CSS / JavaScript / SQL</h6>
      </div>
      <div className="para-skills ">
        <h3 className="heading">Frontend</h3>
        <h6 className="text-skills">React / Bootstrap / JQuery / Redux</h6>
      </div>
      <div className="para-skills ">
        <h3 className="heading">Backend</h3>
        <h6 className="text-skills">
          Node.js / ExpressJS / REST APIs / Apollo / MongoDB / Mongoose /
          Sequelize{" "}
        </h6>
      </div>
      <div className="para-skills ">
        <h3 className="heading">Application</h3>
        <h6 className="text-skills">
          Git / Heroku / Insomnia / MySQL / Progressive Web Application /
          Webpack
        </h6>
      </div>
      <div className="para-skills ">
        <h3 className="heading">Productivity</h3>
        <h6 className="text-skills">Slack / Zoom / Microsoft Office Suits</h6>
      </div>
    </div>
  );
};

export default Skills;
