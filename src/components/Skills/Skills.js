import React from "react";
import { skillData } from "./SkillData";
import SkillItem from "./SkillItem";
import "./Skill.css";

const Skills = () => {
  return (
    <div className="skill">
      <header>
        <div className="skills-heading"> Skills |</div>
      </header>
      <div className="skills-div">
        {skillData.map((skill, index) => (
          <SkillItem skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
