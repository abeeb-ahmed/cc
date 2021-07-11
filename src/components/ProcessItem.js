import React from "react";

import "./ProcessItem.css";

const ProcessItem = ({ processNum, processText, processHeader }) => {
  return (
    <div data-aos="fade-up" className="process-item">
      <span>{processNum}</span>
      <div className="process-item-text">
        <h5>{processHeader}</h5>
        <p>{processText}</p>
      </div>
    </div>
  );
};

export default ProcessItem;
