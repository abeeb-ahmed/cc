import React from "react";
import { Link } from "react-router-dom";

import "./Portfolios.css";
import { SingleProject } from "../data";
import HeroSection from "../components/HeroSection";
import PortfolioItem from "../components/PortfolioItem";
import ContactBlock from "../components/ContactBlock";
import FooterSection from "../components/FooterSection";

const Porfolio = ({ match }) => {
  const items = [...SingleProject];
  console.log(items);
  return (
    <div className="portfolios">
      <HeroSection
        pageTitle="Our Works"
        heroTitle="Projects We Have Done"
        imgAlt="digital marketer in lagos"
        imgUrl="https://i.ibb.co/5WpSHBt/man-coding.jpg"
      />
      <div className="section">
        <div className="container">
          <div className="portfolios-section1-grid">
            {items.map((item) => (
              <Link to={`works/${item.id}`} key={item.id}>
                <div data-aos="fade-up" className="portfolio-bg">
                  <img src={item.heroImg} alt={item.imgAlt} />
                  <div className="layer"></div>
                </div>
                <PortfolioItem
                  key={item.id}
                  status={item.status}
                  clientName={item.clientName}
                  projectType={item.projectType}
                  portfolioAlt={item.imgAlt}
                  portfolioImg={item.heroImg}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <ContactBlock />
      <FooterSection />
    </div>
  );
};

export default Porfolio;
