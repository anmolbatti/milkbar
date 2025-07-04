import React from "react";
import SliderItem1 from "../assets/images/athen-seamless-1.jpg";
import LeftArrow from "../assets/images/left-arrow.svg";
import RightArrow from "../assets/images/right-arrow.svg";
import { Link } from "react-router-dom";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { BACKEND_SERVER_ADDRESS } from "../data/variables/variables-1";
import config from "../config";
import FeaturedMedia from "./featured/FeaturedMedia";

function FeaturedWorkSlider({ project }) {
  const {
    desktopImages,
    mobileImages,
    designIntro,
    designTitle,
    designDescription,
  } = project;
  console.log("desktopImages",desktopImages)
  if (project) {
    return (
      <div className="bg-creame text-dark">
        <div className="seamless_booking_slider position-relative z-1 ptb-120">
          <div className="seamless_booking_head text-center">
            <h6 className="text-uppercase letter-spacing-5 font-12 text-center">
              {designIntro}
            </h6>
            <div class="dotdivider text-center mtb15">
              <span></span>
            </div>
            <h2>{designTitle}</h2>
            <p className="font-messina">{designDescription}</p>
          </div>
          <div className="seamless_booking_slider_wrapper position-relative pt-[40px]">
            <Swiper
              // install Swiper modules
              modules={[Navigation, A11y, Scrollbar]}
              freeMode={true}
              centeredSlides={true}
              navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
              scrollbar={{ draggable: true, el: ".swiper-custom-scrollbar" }}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1.3,
                  spaceBetween: 10,
                  centeredSlides: true,
                },
                769: {
                  slidesPerView: 2,
                  spaceBetween: 60,
                },
                1025: {
                  slidesPerView: 2,
                  spaceBetween: 100,
                },
                1440: {
                  slidesPerView: 2,
                  spaceBetween: 150,
                },
                1820: {
                  slidesPerView: 3,
                  spaceBetween: 100,
                },
              }}
            >
              {desktopImages &&
                desktopImages.map((image, index) => (
                  <SwiperSlide>
                    <div
                      className="seamless_booking_slide  position-relative"
                      key={index}
                    >
                      <FeaturedMedia featuredImage={image} />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
export default FeaturedWorkSlider;
