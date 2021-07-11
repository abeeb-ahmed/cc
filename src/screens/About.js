import React from "react";

import "./About.css";
import HeroSection from "../components/HeroSection";
import InfoSection2 from "../components/InfoSection2";
import ProcessItem from "../components/ProcessItem";
import ServiceSection4 from "../components/ServiceSection4";
import ContactForm from "../components/ContactForm";
import FooterSection from "../components/FooterSection";

const About = () => {
  return (
    <div className="about">
      <HeroSection
        pageTitle="About Us"
        heroTitle="Who We Are And What We Do."
        imgAlt="web designer in Lagos"
        imgUrl="https://i.ibb.co/55QMvWY/heroImg4.jpg"
      />
      <InfoSection2
        imgUri="https://i.ibb.co/pXGy74z/black-man.png"
        imgFirst={false}
        imgAlt="web developer nigeria"
        button={false}
        smallHeader="Who We Are"
        bigHeader="Indigenous Web And App Agency In Nigeria."
        text="CreationCreed is a Lagos based digital agency that specializes in designing and developing websites and mobile apps for individuals and businesses. We also deal in digital branding and marketing with the aim of improving, promoting and giving our clients competitive advantages over their competition. Our designers, developers and digital marketers are well equipped with the technicality to take your project ideas from conception to launch."
      />
      <div className="about-section-2">
        <div className="about-section-2-container">
          <h2 data-aos="fade-up">Our Process</h2>
          <div className="about-section-2-items">
            <ProcessItem
              processNum="1"
              processHeader="Research"
              processText="We begin every project by carrying out a thorough research to examine the scope, feasibility and best approach to take on projects."
            />
            <ProcessItem
              processNum="2"
              processHeader="Plan"
              processText="The next step involves planning, which helps us organize our thought process so we can efficiently perform our tasks in the best way possible."
            />
            <ProcessItem
              processNum="3"
              processHeader="Design"
              processText="Designing then involves creating mockups and wireframes of projects in order to map out layout and general structure of the projects before passing it for development."
            />
            <ProcessItem
              processNum="4"
              processHeader="Develop"
              processText="This is where the actual development of the projects is done. Mockups and wireframes are transformed into actual working projects with the help of highly planned out codes."
            />
            <ProcessItem
              processNum="5"
              processHeader="Test"
              processText="The projects are then put through rigorous tests to ensure that they work the way they’re intended to by checking the code base for bugs and fixing them when found."
            />
            <ProcessItem
              processNum="6"
              processHeader="Launch"
              processText="This is the final part of our process, where bug free, highly optimized projects are shipped out for the end users. "
            />
          </div>
        </div>
      </div>
      <ServiceSection4 />
      <div className="about-section-3">
        <div className="about-section-3-container">
          <span data-aos="fade-up">
            "The world is evolving, and to be a serious player in any business
            sector you’re in requires a strong online presence. This is the
            reason why CreationCreed was created, to provide state of the art
            digital solutions to help Nigerian businesses scale appropriately."
          </span>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="about-section-3-profile"
          >
            <img
              src="https://i.ibb.co/mbYbcdb/ahmed.jpg"
              alt="website designer lagos"
            />
            <div className="about-section-3-profile-text">
              <h5>Abeeb Ahmed</h5>
              <h5>CEO, CreationCreed</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section-4">
        <div className="about-section-4-container">
          <h2 data-aos="fade-up">
            Ready To Start A Project? Let's Talk About It.
          </h2>
          <ContactForm />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default About;
