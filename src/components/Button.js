import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = ({
  className = "",
  title,
  url = "",
  outlined = false,
  outlinedWhite = false,
  big = false,
  whiteFont = false,
  onClick,
}) => {
  return (
    <Link to={url} exact>
      <div
        data-aos="fade-up"
        onClick={onClick}
        className={`button ${outlined ? "btn__outlined" : ""} ${
          big ? "btn__big" : ""
        } ${whiteFont ? "btn__wfont" : ""} ${
          outlinedWhite ? "btn__outlined-white" : ""
        } ${className}`}
      >
        {title}
      </div>
    </Link>
  );
};

export default Button;
