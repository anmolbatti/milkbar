import React from "react";

import LeftArrow from '../assets/images/left-arrow.svg';
import RightArrow from '../assets/images/right-arrow.svg';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// function SocialMediaSlider(){
//     return(
//     <div className="services_slider position-relative social-media-slider">
//         <div className="social-media-slider-info">
//             <h6 className="text-uppercase letter-spacing-5 font-14 text-left">CLIENT: MARBLE BESPOKE</h6>
//             <p className="font-12 text-left font-messina">Greece-based marble procurement and design</p>
//         </div>
//         <div className="service_slider_wrapper position-relative">
//             <Swiper
//                 modules={[Navigation, A11y, Scrollbar]}
//                 freeMode={true}
//                 centeredSlides={true}
//                 spaceBetween={16}
//                 slidesPerView={6}
//                 navigation={{ nextEl: ".service-arrow-right", prevEl: ".service-arrow-left" }}
//                 scrollbar={{ draggable: true, el: '.service-swiper-custom-scrollbar' }}
//                 loop={true}
//                 breakpoints={{
//                     320: {
//                       slidesPerView: 1.6,
//                       spaceBetween: 12,
//                       centeredSlides:true,
//                     },
//                     575: {
//                         slidesPerView: 3.8,
//                         spaceBetween: 12,
//                     },
//                     769: {
//                         slidesPerView: 3.8,
//                         spaceBetween: 16,
//                     },
//                     1025: {
//                         slidesPerView: 3.8,
//                         spaceBetween: 16,
//                     }
//                   }}                
//             >                
//                 <SwiperSlide>
//                     <div className="common_service_slide  position-relative">
//                         <img src={Item1} alt="slider" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
//                     </div>
//                 </SwiperSlide> 
//                 <SwiperSlide>
//                     <div className="common_service_slide  position-relative">
//                         <img src={Item1} alt="slider" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
//                     </div>
//                 </SwiperSlide> 
//                 <SwiperSlide>
//                     <div className="common_service_slide  position-relative">
//                         <img src={Item1} alt="slider" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
//                     </div>
//                 </SwiperSlide> 
//                 <SwiperSlide>
//                     <div className="common_service_slide  position-relative">
//                         <img src={Item1} alt="slider" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
//                     </div>
//                 </SwiperSlide> 
//                 <SwiperSlide>
//                     <div className="common_service_slide  position-relative">
//                         <img src={Item1} alt="slider" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
//                     </div>
//                 </SwiperSlide> 
//                 <SwiperSlide>
//                     <div className="common_service_slide  position-relative">
//                         <img src={Item1} alt="slider" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
//                     </div>
//                 </SwiperSlide>            
//             </Swiper> 
            
//             <div className="slider_nav d-flex align-items-center justify-content-center nowrap">                
//                 <button className="service-arrow-left arrow common_slider_arrow d-flex align-items-center justify-content-center"><img src={LeftArrow} alt="slider" /></button>
//                 <div className="service-swiper-custom-scrollbar slider_scrollbar"></div>
//                 <button className="service-arrow-right arrow common_slider_arrow d-flex align-items-center justify-content-center"><img src={RightArrow} alt="slider" /></button>
//             </div>
//         </div>        
//     </div>
    
//   );
// }
function SingleProjectSlider({ clientName, clientDescription, slides }) {
    return (
        <div className="services_slider position-relative social-media-slider">
            
            <div className="service_slider_wrapper position-relative">
                <Swiper
                    modules={[Navigation, A11y, Scrollbar]}
                    freeMode={true}
                    centeredSlides={true}
                    spaceBetween={16}
                    slidesPerView={6}
                    navigation={{ nextEl: ".service-arrow-right", prevEl: ".service-arrow-left" }}
                    scrollbar={{ draggable: true, el: '.service-swiper-custom-scrollbar' }}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1.4, spaceBetween: 12, centeredSlides: true },
                        575: { slidesPerView: 2.5, spaceBetween: 12 },
                        769: { slidesPerView: 2.7, spaceBetween: 16 },
                        1025: { slidesPerView: 3.3, spaceBetween: 16 },
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={`slide-${index}`}>
                            <div className="common_service_slide position-relative">
                                <div className="social-media-slider-info">
                                    <h6 className="text-uppercase letter-spacing-5 font-14 text-left">{slide.clientName}</h6>
                                    <p className="font-12 text-left font-messina">{slide.clientDescription}</p>
                                </div>
                                <img 
                                    src={slide.sliderImage} 
                                    alt={`slider-${index}`} 
                                    className="h-100 w-100 object-fit-cover" 
                                    loading="lazy"
                                    onError={(e) => { e.target.src = 'path/to/fallback.jpg'; }} // Optional fallback
                                />
                                {slide.brandImage && (
                                    <div className="single-brand-sec position-absolute">
                                        <img 
                                            src={slide.brandImage} 
                                            alt={`brand-${index}`} 
                                            loading="lazy"
                                            onError={(e) => { e.target.src = 'path/to/brand-fallback.png'; }} // Optional fallback
                                        />
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="slider_nav d-flex align-items-center justify-content-center nowrap">
                    <button className="service-arrow-left arrow common_slider_arrow d-flex align-items-center justify-content-center">
                        <img src={LeftArrow} alt="slider" />
                    </button>
                    <div className="service-swiper-custom-scrollbar slider_scrollbar"></div>
                    <button className="service-arrow-right arrow common_slider_arrow d-flex align-items-center justify-content-center">
                        <img src={RightArrow} alt="slider" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SingleProjectSlider; 