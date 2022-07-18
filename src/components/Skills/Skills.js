import React from "react";
import "./Skill.css";

const Skills = () => {
  return (
    <div className="skill">
      <heading>
        <div className="skills-heading"> Skills |</div>
      </heading>
      <div className="skills-div">
        <div className="para-skills ">
          <h3 className="heading-lng">Languages</h3>
          <h6 className="text-skills">HTML / CSS / JavaScript / SQL</h6>
        </div>
        <div className="para-skills ">
          <h3 className="heading-lng">Frontend</h3>
          <h6 className="text-skills">React / Bootstrap / JQuery / Redux</h6>
        </div>
        <div className="para-skills ">
          <h3 className="heading-lng">Backend</h3>
          <h6 className="text-skills">
            Node.js / ExpressJS / REST APIs / Apollo / MongoDB / Mongoose /
            Sequelize{" "}
          </h6>
        </div>
        <div className="para-skills ">
          <h3 className="heading-lng">Application</h3>
          <h6 className="text-skills">
            Git / Heroku / Insomnia / MySQL / Progressive Web Application /
            Webpack
          </h6>
        </div>
        <div className="para-skills ">
          <h3 className="heading-lng">Productivity</h3>
          <h6 className="text-skills">Slack / Zoom / Microsoft Office Suits</h6>
        </div>
      </div>
    </div>
  );
};

export default Skills;
