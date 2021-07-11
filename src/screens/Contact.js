import React from "react";

import "./Contact.css";
import phoneImg from "../images/phone.png";
import emailImg from "../images/email.png";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/ContactForm";
import FooterSection from "../components/FooterSection";

const Contact = () => {
  return (
    <div className="contact">
      <HeroSection
        pageTitle="Contact"
        heroTitle="Get In Touch"
        imgAlt="mobile app developer lagos"
        imgUrl="https://i.ibb.co/fxRrJzB/heroImg5.jpg"
      />
      <div className="contact-container">
        <div data-aos="fade-up" className="contact-section1-text">
          <h2>Are You Ready To Begin A Project?</h2>
          <p>
            You are one step away to taking your business to the next level.
            Reach out to us today for your web development, mobile app
            development, digital branding and digital marketing projects.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="contact-section2"
        >
          <div className="contact-section2-item">
            <img src={phoneImg} alt="web designer in lagos" />
            <h5>0810-693-7061</h5>
          </div>
          <div className="contact-section2-item">
            <img src={emailImg} alt="mobile app developer in lagos" />
            <a href="mailto:creationcreed@gmail.com">
              <h5>creationcreed@gmail.com</h5>
            </a>
          </div>
        </div>
        <div className="contact-section3">
          <h2 data-aos="fade-up">
            Leave Us A Message And We'll Reach Out To You.
          </h2>
          <ContactForm />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Contact;
