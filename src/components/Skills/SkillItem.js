import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillItem = ({ skill }) => {
  return (
    <div className="d-flex align-items-center my-4 skill-list-container">
      <div className="icon">
        <FontAwesomeIcon
          icon={skill.icon}
          size="3x"
          className="pe-3 me-3 text-light"
        />
      </div>

      <div>
        <h3 className="heading-lng  m-0 mt-3">{skill.title}</h3>
        <p className="text-skills">{skill.items.join(" / ")}</p>
      </div>
    </div>
  );
};

export default SkillItem;
