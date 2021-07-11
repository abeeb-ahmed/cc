import React from "react";

import "./ContactBlock.css";
import Button from "./Button";

const ContactBlock = () => {
  return (
    <div className="contact-block">
      <div className="container">
        <h2 data-aos="fade-up">Ready to get started?</h2>
        <Button
          url="/contact"
          className="contact-block-btn"
          outlinedWhite={true}
          title="HIRE US"
          big={true}
          whiteFont={true}
        />
      </div>
    </div>
  );
};

export default ContactBlock;
