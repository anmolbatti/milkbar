import React from "react";
import Item1 from "../assets/images/service-slide-1.jpg";
import LeftArrow from "../assets/images/left-arrow.svg";
import RightArrow from "../assets/images/right-arrow.svg";
import { Link } from "react-router-dom";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

function featuredWorkSlider() {
  return (
    <div className="services_slider position-relative pb-120">
      <h6 className="text-uppercase letter-spacing-5 text-center">Services</h6>
      <div className="service_slider_wrapper position-relative">
        <Swiper
          modules={[Navigation, A11y, Scrollbar]}
          freeMode={true}
          centeredSlides={true}
          spaceBetween={12}
          slidesPerView={3.8}
          navigation={{
            nextEl: ".service-arrow-right",
            prevEl: ".service-arrow-left",
          }}
          scrollbar={{
            draggable: true,
            el: ".service-swiper-custom-scrollbar",
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1.6,
              spaceBetween: 10,
              centeredSlides: true,
            },
            769: {
              slidesPerView: 3.8,
              spaceBetween: 15,
            },
            769: {
              slidesPerView: 3.8,
              spaceBetween: 15,
            },
            1025: {
              slidesPerView: 3.8,
              spaceBetween: 12,
            },
          }}
        >
          <SwiperSlide>
            <div className="common_service_slide  position-relative">
              <img
                src={Item1}
                alt="Image"
                className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover"
              />
              <div className="common_service_slide_text position-absolute w-100 h-100 z-1 text-center">
                <h2>branding</h2>
                <ul className="list-style-none p-0">
                  <li>branding</li>
                  <li>logo +icon design</li>
                  <li>photography + videography direction</li>
                  <li>copywriting</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="common_service_slide  position-relative">
              <img
                src={Item1}
                alt="Image"
                className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover"
              />
              <div className="common_service_slide_text position-absolute w-100 h-100 z-1 text-center">
                <h2>web design</h2>
                <ul className="list-style-none p-0">
                  <li>branding</li>
                  <li>logo +icon design</li>
                  <li>photography + videography direction</li>
                  <li>copywriting</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="common_service_slide  position-relative">
              <img
                src={Item1}
                alt="Image"
                className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover"
              />
              <div className="common_service_slide_text position-absolute w-100 h-100 z-1 text-center">
                <h2>development</h2>
                <ul className="list-style-none p-0">
                  <li>branding</li>
                  <li>logo +icon design</li>
                  <li>photography + videography direction</li>
                  <li>copywriting</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="common_service_slide  position-relative">
              <img
                src={Item1}
                alt="Image"
                className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover"
              />
              <div className="common_service_slide_text position-absolute w-100 h-100 z-1 text-center">
                <h2>branding</h2>
                <ul className="list-style-none p-0">
                  <li>branding</li>
                  <li>logo +icon design</li>
                  <li>photography + videography direction</li>
                  <li>copywriting</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="common_service_slide  position-relative">
              <img
                src={Item1}
                alt="Image"
                className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover"
              />
              <div className="common_service_slide_text position-absolute w-100 h-100 z-1 text-center">
                <h2>web design</h2>
                <ul className="list-style-none p-0">
                  <li>branding</li>
                  <li>logo +icon design</li>
                  <li>photography + videography direction</li>
                  <li>copywriting</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="common_service_slide  position-relative">
              <img
                src={Item1}
                alt="Image"
                className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover"
              />
              <div className="common_service_slide_text position-absolute w-100 h-100 z-1 text-center">
                <h2>development</h2>
                <ul className="list-style-none p-0">
                  <li>branding</li>
                  <li>logo +icon design</li>
                  <li>photography + videography direction</li>
                  <li>copywriting</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="slider_nav d-flex align-items-center justify-content-center nowrap">
          <button className="service-arrow-left arrow common_slider_arrow d-flex align-items-center justify-content-center">
            <img src={LeftArrow} alt="Image" />
          </button>
          <div className="service-swiper-custom-scrollbar slider_scrollbar"></div>
          <button className="service-arrow-right arrow common_slider_arrow d-flex align-items-center justify-content-center">
            <img src={RightArrow} alt="Image" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default featuredWorkSlider;
