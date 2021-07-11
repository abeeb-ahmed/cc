import React from "react";

import "./ContactSection.css";
import SubTitle from "./SubTitle";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div data-aos="fade-up" className="contact-section-container">
        <SubTitle title="Get In Touch" />
        <div className="contact-section-text">
          <h2>Contact Us</h2>
          <p>
            Ready to start a project? Leave us a message and we will reach out
            to you.
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
