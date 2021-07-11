import React from "react";
import { Link } from "react-router-dom";

import PortfolioItem from "./PortfolioItem";
import { SingleProject } from "../data";
import Button from "./Button";
import "./PortfolioSection.css";
import SubTitle from "./SubTitle";

const PortfolioSection = () => {
  return (
    <div className="portfolio-section">
      <div className="portfolio-section-container">
        <div data-aos="fade-up" className="portfolio-header">
          <SubTitle title="WHAT WE HAVE DONE" />
          <h2>Recent Works</h2>
        </div>
        <div className="portfolio-section-grid">
          <Link to={`works/${SingleProject[0].id}`}>
            <div data-aos="fade-up" className="portfolio-bg">
              <img
                src={SingleProject[0].heroImg}
                alt={SingleProject[0].imgAlt}
              />
              <div className="layer"></div>
            </div>
            <PortfolioItem
              key={SingleProject[0].id}
              status={SingleProject[0].status}
              clientName={SingleProject[0].clientName}
              projectType={SingleProject[0].projectType}
              portfolioAlt={SingleProject[0].imgAlt}
              portfolioImg={SingleProject[0].heroImg}
            />
          </Link>
          <Link to={`works/${SingleProject[1].id}`}>
            <div data-aos="fade-up" className="portfolio-bg">
              <img
                src={SingleProject[1].heroImg}
                alt={SingleProject[1].imgAlt}
              />
              <div className="layer"></div>
            </div>
            <PortfolioItem
              key={SingleProject[1].id}
              status={SingleProject[1].status}
              clientName={SingleProject[1].clientName}
              projectType={SingleProject[1].projectType}
              portfolioAlt={SingleProject[1].imgAlt}
              portfolioImg={SingleProject[1].heroImg}
            />
          </Link>
        </div>
        <Button
          url="/works"
          className="portfolio-btn"
          outlined={true}
          title="view more"
        />
      </div>
    </div>
  );
};

export default PortfolioSection;
