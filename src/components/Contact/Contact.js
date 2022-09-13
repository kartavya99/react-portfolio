import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSmile } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact-div">
      <header>
        <div className="contact-heading"> Contact Me |</div>
      </header>

      <div className="para-contact">
        <p className="contact-text">
          {" "}
          Thank you for taking time to go through my portfolio! I am very
          passionate about learning new technologies and I hope that some of my
          projects would have created interest in you as Web developer.
        </p>
        <p className="contact-text">
          Should you like to reach out me, please feel free to send me an email{" "}
        </p>
      </div>

      <footer>
        <div className="div-footer d-flex justify-content-center">
          <a
            href="https://github.com/kartavya99"
            target="__blank"
            rel="noopener noreferrer"
            className="footer-contact"
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
            className="footer-contact"
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
            className="footer-contact"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              className="p-2 mx-2 text-light"
            />
          </a>
          <a
            href="tel:+61410742021"
            target="__blank"
            rel="noopener noreferrer"
            title="(0410) 742-021"
            className="footer-contact"
          >
            <FontAwesomeIcon
              icon={faPhone}
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
