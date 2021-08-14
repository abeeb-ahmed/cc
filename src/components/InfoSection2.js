import React from "react";

import "./InfoSection2.css";
import Button from "./Button";
import SubTitle from "./SubTitle";

const InfoSection2 = ({
  btnUrl = "",
  imgFirst = false,
  button = true,
  smallHeader,
  bigHeader,
  imgUri,
  text,
  buttonText,
  imgAlt,
  onClick,
}) => {
  return (
    <div className="infosection">
      <div className="infosection__container">
        <div
          className={`infosection__grid ${imgFirst ? "grid__imgFirst" : ""}`}
        >
          <div data-aos="fade-up" className="infosection__left">
            <SubTitle title={smallHeader} />
            <h2>{bigHeader}</h2>
            <p>{text}</p>
            <div className="info-btn-container">
              {button && (
                <Button
                  onClick={onClick}
                  url={btnUrl}
                  className="info__button"
                  outlined={true}
                  title={buttonText}
                />
              )}
            </div>
          </div>
          <div data-aos="fade-up" className="infosection__right">
            <div className="infosection__right__img">
              <img src={imgUri} alt={imgAlt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection2;
