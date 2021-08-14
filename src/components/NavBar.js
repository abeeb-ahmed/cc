import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Button from "./Button.js";
import "./NavBar.css";
import logo from "../images/logo-white.png";
import logo2 from "../images/new-logo-white.png";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleClose = () => {
    setClicked(false);
  };
  const handleScroll = () => {
    if (window.scrollY > 600) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "navbar__sticky" : ""}`}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <NavLink to="/" exact>
            <img
              className={scrolled ? "logo-big" : ""}
              src={scrolled ? logo2 : logo}
              alt="CreationCreed"
            />
          </NavLink>
        </div>
        <ul className="navbar__laptop">
          <li>
            <NavLink to="/about">ABOUT US</NavLink>
          </li>
          <li>
            <NavLink to="/services">SERVICES</NavLink>
          </li>
          <li>
            <NavLink to="/works">OUR WORKS</NavLink>
          </li>
          <li>
            <NavLink to="/career">CAREER</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
        <div className="navbar__toggler" onClick={handleClick}>
          {clicked ? (
            <i className="cancel fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
      </div>
      <div
        className={`navbar__mobile ${clicked ? "visible" : ""}`}
        onClick={handleClose}
      >
        <ul data-aos="fade-up">
          <li>
            <NavLink to="/about">ABOUT US</NavLink>
          </li>
          <li>
            <NavLink to="/services">SERVICES</NavLink>
          </li>
          <li>
            <NavLink to="/works">OUR WORKS</NavLink>
          </li>
          <li>
            <NavLink to="/career">CAREER</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
        <div className="nav-btn-container">
          <Button
            url="/contact"
            className="navbar__button"
            outlinedWhite={true}
            title="START A PROJECT"
            big={true}
            whiteFont={true}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
