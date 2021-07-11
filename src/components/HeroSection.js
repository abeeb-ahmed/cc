import React from "react";

import "./HeroSection.css";
import NavBar from "./NavBar";

const HeroSection = ({ pageTitle, heroTitle, imgUrl, imgAlt }) => {
  return (
    <div className="hero-section">
      <NavBar />
      <img className="hero-bg" src={imgUrl} alt={imgAlt} />
      <div className="hero-layer"></div>
      <div className="hero-section-container">
        <div className="hero-section-text">
          <h5 data-aos="fade-right">{pageTitle}</h5>
          <h1 data-aos="fade-left">{heroTitle}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
