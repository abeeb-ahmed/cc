import React from "react";

import "./Services.css";
import webIcon1 from "../images/device.png";
import webIcon2 from "../images/add-contact.png";
import webIcon3 from "../images/speedometer.png";
import webIcon4 from "../images/rocket.png";
import HeroSection from "../components/HeroSection";
import InfoSection2 from "../components/InfoSection2";
import ImageTextGrid from "../components/ImageTextGrid";
import WebItem from "../components/WebItem";
import ContactForm from "../components/ContactForm";
import FooterSection from "../components/FooterSection";

const Services = () => {
  return (
    <div className="services">
      <HeroSection
        pageTitle="Services"
        heroTitle="What We Do"
        imgAlt="website designer in lagos"
        imgUrl="https://i.ibb.co/v4tgFLL/heroImg3.jpg"
      />
      <InfoSection2
        imgFirst={true}
        imgUri="https://i.ibb.co/64wHyPb/women-office1.png"
        imgAlt="website developer lagos"
        button={false}
        smallHeader="Digital Agency"
        bigHeader="Total Digital Solution Package For Your Business."
        text="At CreationCreed, we provide every digital solution your business can ever need, ranging from websites and mobile apps design and development, SEO optimization, social media ads, Google ranking, corporate logo design, corporate branding and so much more. Our services are encompassing, touching every area that you might ever need to improve your business corporate image and also maximize profits. "
      />

      <div className="service-section1">
        <div className="service-section1-container">
          <div data-aos="fade-up" className="service-section1-text">
            <h2>Website Development</h2>
            <p>
              Today, everything is bigger, better and continuously evolving.
              With websites competing to stand out amongst their highly
              saturated competition, web development needs to get more creative
              and functional. Our team is excellent in the art of creating
              beautiful and well-thought-out websites. We provide a range of web
              solutions which include: design and development of new websites
              from scratch, improving your current website and also maintaining
              your website. Technology used in web development process at
              CreationCreed includes: React, HTML, CSS, NodeJs, Netlify,
              MongoDB, Firebase and so on.
            </p>
          </div>
          <div className="service-section1-grid">
            <WebItem
              webIcon={webIcon1}
              webAlt="web designer in lagos"
              webTitle="Responsive"
              webText="We develop websites that scale and display beautifully on any device or platform. Consistency is guaranteed no matter the device or browser in which our websites are viewed from."
            />
            <WebItem
              webIcon={webIcon2}
              webAlt="web designer in lagos"
              webTitle="Mobile Friendly"
              webText="Nowadays, websites are majorly viewed on mobile devices more than on computers. This is why great attention is given to the way our websites scale on mobile devices."
            />
            <WebItem
              webIcon={webIcon3}
              webAlt="web designer in lagos"
              webTitle="Speed Tested"
              webText="Websites that are slow are proven to be inefficient as clients wouldn’t get the best user experience which will in turn result in reduction in profit. Our websites are developed with speed in mind."
            />
            <WebItem
              webIcon={webIcon4}
              webAlt="web designer in lagos"
              webTitle="Optimized"
              webText="Websites we create are not just beautiful, they’re also functional. We optimize them in order to drive clients, improve search engine ranking of your business and improve your audience."
            />
          </div>
        </div>
      </div>
      <div className="service-section2">
        <div className="service-section2-container">
          <div data-aos="fade-up" className="service-section2-text">
            <h2>Mobile App Development</h2>
            <p>
              You are here because you just discovered a big idea or solution to
              scale your business, which means you might need a mobile
              application to actualize those ideas. Be it for Android, IOS,
              we’ve got you covered. At CreationCreed, we design and develop
              customized, bespoke cross platform applications for businesses and
              startup. We handle all stages of mobile app production from
              planning, design, development, launch and maintenance. Our apps
              are developed to be fast and well optimized to give the best user
              experience possible. CreationCreed is the company to call whenever
              you need a beautiful and functional mobile app for any idea you
              might have.
            </p>
          </div>
        </div>
      </div>
      <div className="service-section3">
        <div className="service-section3-container">
          <ImageTextGrid
            serviceImgUrl="https://i.ibb.co/ngsSGZF/branding-Img1-1.png"
            serviceImgAlt="digital branding lagos"
            serviceHeader="Digital Branding"
            serviceText="Effective branding is very important in the success of a business. Every business owner has an interest in taking their brand to a position where it relates efficiently with their target audience in order to boost sales and general awareness of their products. At CreationCreed we offer branding services which includes: Brand identity design, brand strategy and positioning, brand auditing. We create corporate and business image by designing of company logos, business cards, brochures and so on"
          />
          <ImageTextGrid
            serviceImgUrl="https://i.ibb.co/zhVfZ5h/branding-Img2-1.png"
            imgFirst={true}
            serviceImgAlt="digital marketer in lagos"
            serviceHeader="Digital Marketing"
            serviceText="The market is saturated with different companies doing the same things you do. Customers get overwhelmed with different marketing messages from brands every day. It is therefore very important for companies to stand out from the pack and communicate effectively in order to gain and retain the attention of customers. At CreationCreed we strategize effective and efficient ways to get and keep audiences that turn to customers for your business through proven and tested digital marketing techniques and strategies."
          />
        </div>
      </div>
      <div className="service-section4">
        <div className="service-section4-container">
          <h2 data-aos="fade-up">Ready To Discuss Your Project?</h2>
          <ContactForm />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Services;
