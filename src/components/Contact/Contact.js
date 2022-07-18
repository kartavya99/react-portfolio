import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <div className="contact-div">
      <heading>
        <div className="contact-heading"> Contact Me |</div>
      </heading>

      <div className="para-contact">
        <p className="contact-text">
          {" "}
          Thank you for visiting my portfolio please click below to get in touch{" "}
        </p>
        {/* <div className="contact-text"> GitHuub</div>
        <div className="contact-text"> linkedin</div>
        <div className="contact-text"> Phone</div>
        <div className="contact-text"> Email</div> */}
      </div>

      <footer>
        <div className="div-footer d-flex justify-content-center">
          <a
            href="https://github.com/kartavya99"
            target="__blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            {/* <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="p-2 mx-2 text-light"
            /> */}
            github
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
    </div>
  );
};

export default Contact;
