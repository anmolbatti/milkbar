import React, { useState, useEffect } from 'react';
import SliderItem1 from '../assets/images/work-1.jpg';
import SliderItem2 from '../assets/images/work-2.png';
import SliderItem3 from '../assets/images/work-3.jpg';
import WorkSlideLogo1 from '../assets/images/work-slide-logo1.svg';
import LeftArrow from '../assets/images/left-arrow.svg';
import RightArrow from '../assets/images/right-arrow.svg';
import {Link } from "react-router-dom";
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

function FeaturedWorkSlider(){
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        };
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return(
    <div className="featured_work_slider position-relative z-1 ptb-120">
        
        <h6 className="text-uppercase letter-spacing-5 font-12 text-center">Featured Work</h6>
        {isMobile ? (
            
        <div className="slider_wrapper position-relative">            
            <div>                
                <div className='swiper-slide swiper-slide-active'>
                    <div className="common_work_slide  position-relative">
                        <img src={SliderItem1} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                        <div className="common_work_slide_text position-absolute w-100 h-100">
                            <div className="workbox_head">
                            <h2>croatia’s new yachting hotspot</h2>
                            <p className="font-messina text-uppercase">Hospitality · Brand Direction · Physical Design</p> 
                            </div>
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                            <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                            <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                            <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                            </svg>

                            <div className="work_slide_hover_content position-absolute">
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
                                <img src={WorkSlideLogo1} alt="Image" />                                
                            </div>
                            <div className="text-center d-flex justify-content-center project_link">
                                <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='swiper-slide swiper-slide-active'>
                    <div className="common_work_slide  position-relative">
                        <img src={SliderItem2} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                        <div className="common_work_slide_text position-absolute w-100 h-100 h-100">
                            <div className="workbox_head">
                            <h2>dubai-based architecture</h2>
                            <p className="font-messina text-uppercase">PROPERTY · BRAND DIRECTION · DEVELOPMENT</p> 
                            </div>
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                            <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                            <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                            <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                            </svg>

                            <div className="work_slide_hover_content position-absolute">
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
                                <img src={WorkSlideLogo1} alt="Image" />                                
                            </div>
                            <div className="text-center d-flex justify-content-center project_link">
                                <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='swiper-slide swiper-slide-active'>
                    <div className="common_work_slide  position-relative">
                        <img src={SliderItem3} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                        <div className="common_work_slide_text position-absolute w-100 h-100 h-100">
                            <div className="workbox_head">
                            <h2>athens-based yachting</h2>
                            <p className="font-messina text-uppercase">YACHTING · BRAND DIRECTION · DEVELOPMENT</p> 
                            </div>
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                            <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                            <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                            <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                            </svg>

                            <div className="work_slide_hover_content position-absolute">
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
                                <img src={WorkSlideLogo1} alt="Image" />                                
                            </div>
                            <div className="text-center d-flex justify-content-center project_link">
                                <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
        ) : (
            <div className="slider_wrapper position-relative">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, A11y, Scrollbar]}
                    freeMode={true}
                    centeredSlides={true}
                    spaceBetween={70}
                    slidesPerView={3.8}
                    navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
                    scrollbar={{ draggable: true, el: '.swiper-custom-scrollbar' }}
                    loop={true}
                    breakpoints={{
                        320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        },
                        769: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        769: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1025: {
                            slidesPerView: 3.7,
                            spaceBetween: 70,
                        }
                    }}
                    
                    
                >                
                    <SwiperSlide>
                        <div className="common_work_slide  position-relative">
                            <img src={SliderItem1} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                            <div className="common_work_slide_text position-absolute w-100 h-100">
                                <div className="workbox_head">
                                <h2>croatia’s new yachting hotspot</h2>
                                <p className="font-messina text-uppercase">Hospitality · Brand Direction · Physical Design</p> 
                                </div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
    
                                <div className="work_slide_hover_content position-absolute">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                    <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                    <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    </svg>
                                    <img src={WorkSlideLogo1} alt="Image" />                                
                                </div>
                                <div className="text-center d-flex justify-content-center project_link">
                                    <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="common_work_slide  position-relative">
                            <img src={SliderItem2} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                            <div className="common_work_slide_text position-absolute w-100 h-100 h-100">
                                <div className="workbox_head">
                                <h2>dubai-based architecture</h2>
                                <p className="font-messina text-uppercase">PROPERTY · BRAND DIRECTION · DEVELOPMENT</p> 
                                </div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
    
                                <div className="work_slide_hover_content position-absolute">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                    <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                    <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    </svg>
                                    <img src={WorkSlideLogo1} alt="Image" />                                
                                </div>
                                <div className="text-center d-flex justify-content-center project_link">
                                    <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="common_work_slide  position-relative">
                            <img src={SliderItem3} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                            <div className="common_work_slide_text position-absolute w-100 h-100 h-100">
                                <div className="workbox_head">
                                <h2>athens-based yachting</h2>
                                <p className="font-messina text-uppercase">YACHTING · BRAND DIRECTION · DEVELOPMENT</p> 
                                </div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
    
                                <div className="work_slide_hover_content position-absolute">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                    <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                    <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    </svg>
                                    <img src={WorkSlideLogo1} alt="Image" />                                
                                </div>
                                <div className="text-center d-flex justify-content-center project_link">
                                    <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="common_work_slide  position-relative">
                            <img src={SliderItem1} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                            <div className="common_work_slide_text position-absolute w-100 h-100">
                                <div className="workbox_head">
                                <h2>croatia’s new yachting hotspot</h2>
                                <p className="font-messina text-uppercase">Hospitality · Brand Direction · Physical Design</p> 
                                </div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
    
                                <div className="work_slide_hover_content position-absolute">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                    <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                    <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    </svg>
                                    <img src={WorkSlideLogo1} alt="Image" />                                
                                </div>
                                <div className="text-center d-flex justify-content-center project_link">
                                    <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="common_work_slide  position-relative">
                            <img src={SliderItem2} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                            <div className="common_work_slide_text position-absolute w-100 h-100 h-100">
                                <div className="workbox_head">
                                <h2>dubai-based architecture</h2>
                                <p className="font-messina text-uppercase">PROPERTY · BRAND DIRECTION · DEVELOPMENT</p> 
                                </div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
    
                                <div className="work_slide_hover_content position-absolute">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                    <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                    <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    </svg>
                                    <img src={WorkSlideLogo1} alt="Image" />                                
                                </div>
                                <div className="text-center d-flex justify-content-center project_link">
                                    <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="common_work_slide  position-relative">
                            <img src={SliderItem3} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                            <div className="common_work_slide_text position-absolute w-100 h-100 h-100">
                                <div className="workbox_head">
                                <h2>athens-based yachting</h2>
                                <p className="font-messina text-uppercase">YACHTING · BRAND DIRECTION · DEVELOPMENT</p> 
                                </div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
    
                                <div className="work_slide_hover_content position-absolute">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                    <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                    <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    </svg>
                                    <img src={WorkSlideLogo1} alt="Image" />                                
                                </div>
                                <div className="text-center d-flex justify-content-center project_link">
                                    <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="common_work_slide  position-relative">
                            <img src={SliderItem1} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                            <div className="common_work_slide_text position-absolute w-100 h-100">
                                <div className="workbox_head">
                                <h2>croatia’s new yachting hotspot</h2>
                                <p className="font-messina text-uppercase">Hospitality · Brand Direction · Physical Design</p> 
                                </div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
    
                                <div className="work_slide_hover_content position-absolute">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                    <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                    <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    </svg>
                                    <img src={WorkSlideLogo1} alt="Image" />                                
                                </div>
                                <div className="text-center d-flex justify-content-center project_link">
                                    <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="common_work_slide  position-relative">
                            <img src={SliderItem2} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                            <div className="common_work_slide_text position-absolute w-100 h-100 h-100">
                                <div className="workbox_head">
                                <h2>dubai-based architecture</h2>
                                <p className="font-messina text-uppercase">PROPERTY · BRAND DIRECTION · DEVELOPMENT</p> 
                                </div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
    
                                <div className="work_slide_hover_content position-absolute">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                    <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                    <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    </svg>
                                    <img src={WorkSlideLogo1} alt="Image" />                                
                                </div>
                                <div className="text-center d-flex justify-content-center project_link">
                                    <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="common_work_slide  position-relative">
                            <img src={SliderItem3} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                            <div className="common_work_slide_text position-absolute w-100 h-100 h-100">
                                <div className="workbox_head">
                                <h2>athens-based yachting</h2>
                                <p className="font-messina text-uppercase">YACHTING · BRAND DIRECTION · DEVELOPMENT</p> 
                                </div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
    
                                <div className="work_slide_hover_content position-absolute">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                    <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                    <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    </svg>
                                    <img src={WorkSlideLogo1} alt="Image" />                                
                                </div>
                                <div className="text-center d-flex justify-content-center project_link">
                                    <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper> 
                
                <div className="slider_nav d-flex align-items-center justify-content-center nowrap">                
                    <button className="arrow-left arrow common_slider_arrow d-flex align-items-center justify-content-center"><img src={LeftArrow} alt="Image" /></button>
                    <div className="swiper-custom-scrollbar slider_scrollbar"></div>
                    <button className="arrow-right arrow common_slider_arrow d-flex align-items-center justify-content-center"><img src={RightArrow} alt="Image" /></button>
                </div>
            </div>
        )}
        
    </div>
  );
}
export default FeaturedWorkSlider; 