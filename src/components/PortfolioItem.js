import React from "react";

import "./PortfolioItem.css";

const PortfolioItem = ({
  onClick,
  portfolioImg,
  portfolioAlt,
  status,
  clientName,
  projectType,
}) => {
  return (
    <div data-aos="fade-up" onClick={onClick} className="portfolio-item">
      <div className="portfolio-bg">
        <img src={portfolioImg} alt={portfolioAlt} />
        <div className="layer"></div>
      </div>
      <div className="portfolio-text">
        <h6>{status}</h6>
        <h2>{clientName}</h2>
        <h5>{projectType}</h5>
      </div>
    </div>
  );
};

export default PortfolioItem;
