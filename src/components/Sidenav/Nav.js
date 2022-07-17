import React from "react";
import pic from "../../Images/pic.jpg";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Nav = ({ currentPage, pageChangeHandler }) => {
  // console.log(pageChangeHandler);
  return (
    <div className="sidenav">
      <img src={pic} alt="tech" className="nav-img"></img>
      <h1 className="name">KARTAVYA SAINI</h1>
      <li className="nav-list">
        <a
          href="#about"
          onClick={() => pageChangeHandler("About")}
          className="a-link"
        >
          About
        </a>
        <a
          href="#project"
          className="a-link"
          onClick={() => pageChangeHandler("Project")}
        >
          Project
        </a>
        <a
          href="#skills"
          className="a-link"
          onClick={() => pageChangeHandler("Skills")}
        >
          {" "}
          Skills{" "}
        </a>
        <a
          href="#contact"
          className="a-link"
          onClick={() => pageChangeHandler("Contact")}
        >
          {" "}
          Contact{" "}
        </a>
        <a href="#resume" className="a-link">
          {" "}
          Resume{" "}
        </a>
      </li>

      <footer>
        <div>
          <a
            href="https://github.com/kartavya99"
            target="__blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="p-2 mx-2 text-light"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kartavya99"
            target="__blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="p-2 mx-2 text-light"
            />
          </a>
          <a
            href="mailto:kartavyas@gmail.com"
            target="__blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              className="p-2 mx-2 text-light"
            />
          </a>
        </div>
      </footer>
      <div>
        <p className="footer-line"> have a nice day !!! </p>
      </div>
    </div>
  );
};

export default Nav;
