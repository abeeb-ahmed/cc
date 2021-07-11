import React from "react";

import ServiceItem from "./ServiceItem";
import "./ServiceSection4.css";
import service1 from "../images/service1.png";
import service2 from "../images/service2.png";
import service3 from "../images/service3.png";
import service4 from "../images/service4.png";

const ServiceSection4 = () => {
  return (
    <div className="service-section">
      <h2 data-aos="fade-up">What We Enjoy Doing</h2>
      <div className="service-section-container">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="service-section-grid"
        >
          <ServiceItem
            serviceImgUrl={service1}
            serviceSubTitle="Web Development"
            serviceImgAlt="website developer in lagos"
            serviceText="Design and development of bespoke, responsive, aesthetic and fast websites for businesses and individuals."
          />
          <ServiceItem
            serviceImgUrl={service2}
            serviceSubTitle="App Development"
            serviceImgAlt="mobile app developer in lagos"
            serviceText="Design, development and maintenance of cross platform mobile apps that run on IOS and android."
          />
          <ServiceItem
            serviceImgUrl={service3}
            serviceSubTitle="Digital Branding"
            serviceImgAlt="digital agency in lagos"
            serviceText="Planning and designing of individual and corporate branding including but not limited to logos, flyers, business cards and brochures "
          />
          <ServiceItem
            serviceImgUrl={service4}
            serviceSubTitle="Digital Marketing"
            serviceImgAlt="digital marketer in lagos"
            serviceText="SEO optimization, Facebook ads, google ranking and all other forms of strategies to drive audiences to your business. "
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection4;
