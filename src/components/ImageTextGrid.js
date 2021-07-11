import React from "react";

import "./ImageTextGrid.css";

const ImageTextGrid = ({
  serviceImgUrl,
  imgFirst = false,
  serviceImgAlt,
  serviceHeader,
  serviceText,
}) => {
  return (
    <div className={`image-text-grid ${imgFirst && "reversed-grid"}`}>
      <div className="image-text-txt">
        <h2 data-aos="fade-up">{serviceHeader}</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          {serviceText}
        </p>
      </div>
      <div className="image-text-img">
        <img src={serviceImgUrl} alt={serviceImgAlt} />
      </div>
    </div>
  );
};

export default ImageTextGrid;
