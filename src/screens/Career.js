import React from "react";

import "./Career.css";
import HeroSection from "../components/HeroSection";
import FooterSection from "../components/FooterSection";

const Career = () => {
  return (
    <div className="career">
      <HeroSection
        pageTitle="Career"
        heroTitle="Join The Team"
        imgAlt="branding agency in Lagos"
        imgUrl="https://i.ibb.co/Tgy7d04/heroImg1.jpg"
      />
      <div className="career-container">
        <div data-aos="fade-up" className="career-section1-text">
          <h5>Sorry, No Vacant Positions Right Now</h5>
          <p>You can always check back to get updates on job vacancies.</p>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Career;
