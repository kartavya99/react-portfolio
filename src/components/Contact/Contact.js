import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <div className="contact-div">
      <header>
        <div className="contact-heading"> Contact Me |</div>
      </header>

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
            className="footer-contact"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="3x"
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
              size="3x"
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
              size="3x"
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
            <i class="fa-regular fa-phone"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
