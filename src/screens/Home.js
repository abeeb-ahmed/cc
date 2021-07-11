import React from "react";

import "./Home.css";
import Header from "../components/Header";
import InfoSection2 from "../components/InfoSection2";
import ServiceSection4 from "../components/ServiceSection4";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <InfoSection2
        btnUrl="/about"
        button={true}
        smallHeader="WHO WE ARE"
        bigHeader="A Digital Agency That Delivers Results"
        imgUri="https://i.ibb.co/L0TJqQK/vector1.png"
        text="CreationCreed is a digital agency in Lagos, Nigeria that specializes in improving the online presence of businesses. Our experienced team of designers, developers and digital marketers are capable of taking on projects that are sure to boost your business by developing beautiful and responsive websites, ecommerce websites, web apps and mobile apps. We love what we do and it shows in how we execute projects. With us, your business is in safe hands."
        buttonText="ABOUT US"
        imgAlt="web developer"
      />
      <InfoSection2
        btnUrl="/services"
        imgFirst={true}
        button={true}
        smallHeader="WHAT WE DO"
        bigHeader="Creating Bespoke Digital Solutions"
        imgUri="https://i.ibb.co/f2sRbhT/vector2.png"
        text="We are equipped with diverse perspectives and experiences. Our efficient teams collaborate to design and develop world-class digital experiences that help businesses grow. From strategic planning to design to web development to digital marketing, we are not only concerned with creating beautiful websites and mobile apps, we create digital solutions that gets the job done."
        imgAlt="web developer"
        buttonText="SERVICES"
      />
      <ServiceSection4 />
      <PortfolioSection />
      <TestimonialSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Home;
