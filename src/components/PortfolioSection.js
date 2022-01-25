import React from "react";
import { Link } from "react-router-dom";

import PortfolioItem from "./PortfolioItem";
import { SingleProject } from "../data";
import Button from "./Button";
import "./PortfolioSection.css";
import SubTitle from "./SubTitle";

const lastItem = SingleProject[SingleProject.length - 1];
const secondLastItem = SingleProject[SingleProject.length - 2];

const PortfolioSection = () => {
  return (
    <div className="portfolio-section">
      <div className="portfolio-section-container">
        <div data-aos="fade-up" className="portfolio-header">
          <SubTitle title="WHAT WE HAVE DONE" />
          <h2>Recent Works</h2>
        </div>
        <div className="portfolio-section-grid">
          <Link to={`works/${lastItem.id}`}>
            <div data-aos="fade-up" className="portfolio-bg">
              <img src={lastItem.heroImg} alt={lastItem.imgAlt} />
              <div className="layer"></div>
            </div>
            <PortfolioItem
              key={lastItem.id}
              status={lastItem.status}
              clientName={lastItem.clientName}
              projectType={lastItem.projectType}
              portfolioAlt={lastItem.imgAlt}
              portfolioImg={lastItem.heroImg}
            />
          </Link>
          <Link to={`works/${secondLastItem.id}`}>
            <div data-aos="fade-up" className="portfolio-bg">
              <img src={secondLastItem.heroImg} alt={secondLastItem.imgAlt} />
              <div className="layer"></div>
            </div>
            <PortfolioItem
              key={SingleProject.id}
              status={secondLastItem.status}
              clientName={secondLastItem.clientName}
              projectType={secondLastItem.projectType}
              portfolioAlt={secondLastItem.imgAlt}
              portfolioImg={secondLastItem.heroImg}
            />
          </Link>
        </div>
        <div className="portfolio-btn-container">
          <Button
            url="/works"
            className="portfolio-btn"
            outlined={true}
            title="view more"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
