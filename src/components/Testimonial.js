import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import "./Testimonial.css";

SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);

const Testimonial = () => {
  return (
    <div className="testimonial">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="slide-img">
            <img
              src="https://i.ibb.co/2FpCGF6/prof.jpg"
              alt="web development"
            />
          </div>
          <div className="testimonial-text">
            <p>
              "The quality of work from CreationCreed in terms of design,
              technical capacity and just the overall friendliness and demeanor
              of the people I was in contact with is top notch. My website was
              also ready before the agreed date. I highly recommend them."
            </p>
            <h6>Prof. Popoola </h6>
            <h6 className="client-company-text"> MD, charis medical center</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-img">
            <img
              src="https://i.ibb.co/JrTLDQN/B766-DBCD-FF88-44-BA-B29-C-3-A9263-D160-F1.jpg"
              alt="web development"
            />
          </div>

          <div className="testimonial-text">
            <p>
              "My project was executed in a very professional manner and I was
              very pleased with the outcome of their work. It was a pleasure
              doing business with the folks at CreationCreed."
            </p>
            <h6>Dr. Fola David </h6>
            <h6 className="client-company-text">
              Founder, FolaDavid Foundation
            </h6>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
