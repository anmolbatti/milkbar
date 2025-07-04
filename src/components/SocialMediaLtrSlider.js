import React from "react";
import Item1 from '../assets/images/social-slide-image.png';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

function SocialMediaLtrSlider(){
    return(
        <>
    <h6 className="workhead font-12 text-uppercase letter-spacing-5">Recent Work</h6>
    <div className="social_ltrslider_outer common_social_slider common_social_slider1">
        <div className="social_ltrslider_left">
            <h3 className="letter-spacing-5">croatia’s new yachting hotspot</h3>
            <p className="font-messina">Pre-season social media campaign prior to opening in May 2025. </p>
        </div>
        <div className="social_ltrslider_right">
            <div className="social_ltrslider_wrapper position-relative">
                <Swiper
                    modules={[Navigation, A11y, Scrollbar]}
                    freeMode={true}
                    spaceBetween={16}
                    slidesPerView={2.8}
                    navigation={false}
                    scrollbar={{ draggable: true, el: '.ltrSlider-swiper-custom-scrollbar' }}
                    loop={false}
                    breakpoints={{
                        320: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                        centeredSlides:true,
                        loop:true,
                        },
                        576: {
                            slidesPerView: 1.5,
                            spaceBetween: 10
                        },
                        801: {
                            slidesPerView: 2.5,
                            spaceBetween: 10
                        },
                        1025: {
                            slidesPerView: 2.5,
                            spaceBetween: 16,
                        }
                    }}                
                >                
                    <SwiperSlide>
                        <div className="social_ltrslider_slide social_slider_slide  position-relative">
                            <img src={Item1} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />                            
                        </div>
                    </SwiperSlide> 
                    <SwiperSlide>
                        <div className="social_ltrslider_slide social_slider_slide  position-relative">
                            <img src={Item1} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />                            
                        </div>
                    </SwiperSlide> 
                    <SwiperSlide>
                        <div className="social_ltrslider_slide social_slider_slide  position-relative">
                            <img src={Item1} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />                            
                        </div>
                    </SwiperSlide> 
                    <SwiperSlide>
                        <div className="social_ltrslider_slide social_slider_slide position-relative">
                            <img src={Item1} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />                            
                        </div>
                    </SwiperSlide> 
                               
                </Swiper> 
                
                <div className="slider_nav">                
                    <div className="ltrSlider-swiper-custom-scrollbar slider_scrollbar"></div>
                </div>
            </div> 
        </div>               
    </div>
    </>
  );
}
export default SocialMediaLtrSlider; 