import React, { useState } from "react";

import "./ContactForm.css";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  return (
    <div data-aos="fade-up" data-aos-delay="100" className="contact-form">
      <div className="contact-form-container">
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            type="text"
            name="firstName"
            id="firstName"
            required
          />
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            type="text"
            name="lastName"
            id="lastName"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            type="email"
            name="email"
            id="email"
            required
          />
          <input
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            placeholder="Phone Number"
            type="tel"
            name="phoneNum"
            id="phoneNum"
            required
          />
          <textarea
            name="message"
            id="message"
            cols="20"
            rows="10"
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
