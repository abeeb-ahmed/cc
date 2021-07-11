import React from "react";

import "./ServiceItem.css";

const Service = ({
  serviceImgUrl,
  serviceImgAlt,
  serviceSubTitle,
  serviceText,
}) => {
  return (
    <div data-aos="fade-up" className="service-item">
      <div className="service-icon">
        <img src={serviceImgUrl} alt={serviceImgAlt} />
      </div>
      <div className="service-text">
        <h5>{serviceSubTitle}</h5>
        <p>{serviceText}</p>
      </div>
    </div>
  );
};

export default Service;
