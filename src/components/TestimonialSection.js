import React from "react";

import SubTitle from "./SubTitle";
import Testimonial from "./Testimonial";
import "./TestimonialSection.css";

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <div data-aos="fade-up" className="testimonial-section-container">
        <div className="testimonial-text">
          <SubTitle title="What clients say" />
          <h2>Testimonials</h2>
        </div>
        <Testimonial />
      </div>
    </div>
  );
};

export default TestimonialSection;
