import React from "react";
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/swiper-bundle.min.css";
import FeaturedMedia from "./featured/FeaturedMedia";

function MobileDisplay({ project }) {
  const { mobileImages, mobileTitle, mobileDescription } = project;

  if (project) {
    return (
      <div className="bg-black text-white">
        <div className="seamless_booking_slider position-relative z-1 ptb-120">
          <div className="mobile_display_head text-center">
            <h6 className="text-uppercase m-0 text-base">MOBILE DISPLAY</h6>
            <div className="dotdivider text-center mtb15">
              <span></span>
            </div>
            <h2>{mobileTitle}</h2>
            <p className="font-messina">{mobileDescription}</p>
          </div>
          <div className="w-full d-flex justify-content-center">
            <div className="mobile-display-list-slider w-full">
              {/* Swiper setup */}
              <Swiper
                    modules={[Navigation, A11y, Scrollbar]}
                    freeMode={true}
                    centeredSlides={true}
                    spaceBetween={40}
                    slidesPerView={5}
                    navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
                    scrollbar={{ draggable: true, el: '.swiper-custom-scrollbar' }}
                    loop={true}
                    breakpoints={{
                        320: {
                        slidesPerView: 1.8,
                        spaceBetween: 15,
                        },       
                        769: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        }
                    }}
                                  >
                {/* SwiperSlides without mapping */}
                <SwiperSlide className="mobile-cover-none mobile-cover-side">
                  <FeaturedMedia featuredImage={mobileImages[0]} />
                </SwiperSlide>
                <SwiperSlide className="mobile-cover-none">
                  <FeaturedMedia featuredImage={mobileImages[1]} />
                </SwiperSlide>
                <SwiperSlide className="mobile-cover-none">
                  <FeaturedMedia featuredImage={mobileImages[2]} />
                </SwiperSlide>
                <SwiperSlide className="mobile-cover-none">
                  <FeaturedMedia featuredImage={mobileImages[3]} />
                </SwiperSlide>
                <SwiperSlide className="mobile-cover-none mobile-cover-side">
                  <FeaturedMedia featuredImage={mobileImages[4]} />
                </SwiperSlide>
                <SwiperSlide className="mobile-cover-none mobile-cover-side">
                  <FeaturedMedia featuredImage={mobileImages[0]} />
                </SwiperSlide>
                <SwiperSlide className="mobile-cover-none">
                  <FeaturedMedia featuredImage={mobileImages[1]} />
                </SwiperSlide>
                <SwiperSlide className="mobile-cover-none">
                  <FeaturedMedia featuredImage={mobileImages[2]} />
                </SwiperSlide>
                <SwiperSlide className="mobile-cover-none">
                  <FeaturedMedia featuredImage={mobileImages[3]} />
                </SwiperSlide>
                <SwiperSlide className="mobile-cover-none mobile-cover-side">
                  <FeaturedMedia featuredImage={mobileImages[4]} />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default MobileDisplay;
