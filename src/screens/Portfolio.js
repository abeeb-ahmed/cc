import React from "react";
import { useParams, useHistory } from "react-router";

import "./Portfolio.css";
import { SingleProject } from "../data";
import HeroSection from "../components/HeroSection";
import TestimonialSection from "../components/TestimonialSection";
import ContactBlock from "../components/ContactBlock";
import FooterSection from "../components/FooterSection";

const Portfolio = () => {
  const history = useHistory();
  const { id } = useParams();
  const item = SingleProject.find((p) => p.id === Number(id));
  return (
    <div>
      {item === undefined ? (
        history.push("/")
      ) : (
        <>
          <HeroSection
            pageTitle={`Project: ${item.projectType}`}
            heroTitle={`Client: ${item.clientName}`}
            imgAlt={item.imgAlt}
            imgUrl={item.bgImg}
          />
          <div className="portfolio-section1 section">
            <div className="portfolio-section1-container container">
              <div data-aos="fade-up" className="text-700">
                <h2>About</h2>
                <p>{item.aboutText}</p>
              </div>
            </div>
            <div className="portfolio-section2 section">
              <div
                data-aos="fade-up"
                className="portfolio-section2-container container"
              >
                <img src={item.mockUpLaptop1} alt={item.imgAlt} />
              </div>
            </div>
            <div className="portfolio-section3 section">
              <div className="portfolio-section3-container container">
                <div data-aos="fade-up" className="text-700">
                  <h2>Project Approach</h2>
                  <p>{item.approachText}</p>
                </div>
              </div>
            </div>
            <div className="portfolio-section4 section">
              <div className="portfolio-section4-container">
                <div className="portfolio-section4-imgs">
                  <img
                    data-aos="fade-up"
                    src={item.mockUpPhone1}
                    alt={item.imgAlt}
                  />
                  <img
                    data-aos="fade-up"
                    src={item.mockUpPhone2}
                    alt={item.imgAlt}
                  />
                </div>
              </div>
            </div>
            <div className="portfolio-section5-container">
              <div data-aos="fade-up" className="portfolio-section5-btns">
                {item.isWeb && (
                  <a href={item.webUrl} target="blank">
                    <div className="portfolio-section5-btn">View Site</div>
                  </a>
                )}

                {item.isIos && (
                  <a href={item.iosUrl} target="blank">
                    <div className="portfolio-section5-btn">Download IOS</div>
                  </a>
                )}

                {item.isAndroid && (
                  <a href={item.androidUrl} target="blank">
                    <div className="portfolio-section5-btn">
                      Download Android
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>

          <TestimonialSection />
          <ContactBlock />
          <FooterSection />
        </>
      )}
    </div>
  );
};

export default Portfolio;
