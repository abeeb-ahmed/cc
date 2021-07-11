import React from "react";

import "./CallButton.css";

const CallButton = () => {
  return (
    <div className="call-button">
      <a href="tel:+2348106937061">
        <i class="fas fa-phone"></i>
      </a>
    </div>
  );
};

export default CallButton;
