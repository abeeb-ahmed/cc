import React from "react";

import "./WebItem.css";

const WebItem = ({ webIcon, webAlt, webTitle, webText }) => {
  return (
    <div data-aos="fade-up" className="web-item">
      <img src={webIcon} alt={webAlt} />
      <h5>{webTitle}</h5>
      <p>{webText}</p>
    </div>
  );
};

export default WebItem;
