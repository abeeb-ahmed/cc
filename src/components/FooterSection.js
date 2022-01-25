import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import logo from "../images/logo-white.png";

import "./FooterSection.css";

const FooterSection = () => {
  const [year, setYear] = useState();
  useEffect(() => {
    const d = new Date();
    let currentYear = d.getFullYear();
    setYear(currentYear);
  }, []);
  return (
    <div className="footer-section">
      <div className="footer-section-container">
        <div className="footer-section-left">
          <NavLink to="/" exact>
            <img src={logo} alt="web developer lagos" />
          </NavLink>

          <p>
            CreationCreed is a website and mobile app development agency in
            Lagos, Nigeria. We pride ourselves in developing premium digital
            solutions for our clients.
          </p>
          <p>Phone: 0810 693 7061</p>
        </div>
        <div className="footer-section-middle">
          <h6>SITE MAP</h6>
          <ul>
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
        </div>
        <div className="footer-section-right">
          <h6>SOCIALS</h6>
          <div className="socials-icons">
            <div className="socials-icon">
              <a href="https://www.instagram.com/creationcreed/" target="blank">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
            <div className="socials-icon">
              <a href="mailto: creationcreed@gmail.com" target="blank">
                <i class="far fa-envelope"></i>
              </a>
            </div>
            <div className="socials-icon">
              <a href="https://www.facebook.com/creationcreed/" target="blank">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="socials-icon">
              <a href="https://wa.me/2348106937061 " target="blank">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; CreationCreed {year}</p>
      </div>
    </div>
  );
};

export default FooterSection;
