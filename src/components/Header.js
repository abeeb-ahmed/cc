import React from "react";
import Particles from "react-tsparticles";

import "./Header.css";
import NavBar from "./NavBar";
import Button from "./Button";

const Header = () => {
  return (
    <div className="header">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="overlay"></div>
      <NavBar />
      <div className="header__container">
        <div className="header__text">
          <h1 data-aos="fade-right">NEXT LEVEL DESIGN AND DEVELOPMENT</h1>
          <p data-aos="fade-right">
            We are experts at improving online presence of businesses with our
            bespoke website, mobile app, branding and digital marketing
            solutions.
          </p>
          <div className="header-btn">
            <Button
              url="/contact"
              className="header__button"
              title="LET'S GET STARTED"
              whiteFont="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
