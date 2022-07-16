import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-div">
      <heading>
        <div className="contact-heading"> Contact Me |</div>
      </heading>
      <p className="text">
        {" "}
        Thank you for visiting my portfolio please click below to get in touch{" "}
      </p>
      <div className="text"> GitHuub</div>
      <div className="text"> linkedin</div>
      <div className="text"> Phone</div>
      <div className="text"> Email</div>
    </div>
  );
};

export default Contact;
