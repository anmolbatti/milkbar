import React, { useState, useEffect } from "react";
// import axios from "axios";
import SliderItem1 from '../data/projects/contempo/Land Design CA.png';
import iphonefirstimg from '../data/projects/contempo/iphonefirstimg.png';
import secondiphone from '../data/projects/contempo/secondiphone.png';
import SliderItem2 from '../data/projects/dallimore/DallimoreMarbella.png';
import IveyImg from '../data/projects/Ivey/iPhoneMockupnew.jpg';
import landdesignca from '../data/projects/land-design-ca/land-designca.png';
import TerraImg from '../data/projects/terra-ecommerce/Terra.jpg';
import SliderItem3 from '../data/projects/meso-travel/athens-based-banner.png';
import SliderItem4 from '../data/projects/swift/featured_slide.png';
import SliderItem5 from '../data/projects/califano/featured_slide.png';
import SliderItem6 from '../data/projects/teraciel-properties/featured_slide.png';
import SliderItem7 from '../data/projects/terra-ecommerce/featured_slide.png';
import SliderVideo3 from '../data/projects/meso-travel/Meso2.mp4';
import SwiftClubSquare from '../data/projects/swift/SwiftClubSquare.mp4';
import TeracielProperties2 from '../data/projects/teraciel-properties/TeracielProperties2.mp4';
import topvdeo from '../data/projects/califano/topvdeo.mp4';
import Milkb from '../data/projects/califano/Milkb.png';
import Sekut from '../data/projects/Sekut/Sekut.png';
import Sekut_Sand from '../data/projects/Sekut/Sekut_Sand.png';
import LeftArrow from "../assets/images/left-arrow.svg";
import RightArrow from "../assets/images/right-arrow.svg";
import { Link } from "react-router-dom";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import config from "../config";
import FeaturedMedia from "./featured/FeaturedMedia";

function FeaturedWorkSlider({ projects, title, isText }) {
  const [isMobile, setIsMobile] = useState(false);
  const [projectsToShow, setProjectsToShow] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (isMobile) setProjectsToShow(projects.slice(0, 3));
    else setProjectsToShow(projects);
  }, [isMobile, projects]);

  if (!Array.isArray(projects)) {
    // console.error("Projects is not an array:", projects);
    return <div></div>;
  }
  const viewAllProjects = () => {
    setProjectsToShow(projects);
  };
  if (projectsToShow.length > 0) {
    return (
      <>
        <div className="gallery-title-content bottombnrcontent text-center ">
          {isText && (
            <div>

              <div className=" dotsbtn flex justify-center items-center mt-7 lg:mt-7">
                <div className="bg-[#A2BB3C] h-[0.4rem] w-[0.4rem] rounded-full"></div>
              </div>
              <h3 className="text-[28px] opacity-[0.85]">
                full stack development meets experiential design
              </h3>

              <ul className="mt-6 lg:mt-10 flex flex-col gap-2 lg:gap-5">
                <li className="text-[16px]  opacity-60 ">app development</li>
                <li className="text-[16px]  opacity-60">
                  custom data management solutions
                </li>
                <li className="text-[16px] opacity-60">
                  app integration meets branded ux
                </li>
              </ul>
              {/* <div className="text-center d-flex justify-content-center hmbtn_prdct">
              <Link to="/work" className="text-white font-12 text-uppercase font-messina letter-spacing-5">MORE PROJECTS</Link>
          </div> */}

            </div>
          )}
        </div>
        <div className="featured_work_slider  position-relative z-1 ptb-120">
          <h6 className="text-uppercase letter-spacing-5 font-12 text-center featured-title">
            {title}
          </h6>

          <div className="slider_wrapper position-relative">
            <Swiper
              // install Swiper modules
              modules={[Navigation, A11y, Scrollbar]}
              freeMode={true}
              centeredSlides={true}
              navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
              scrollbar={{ draggable: true, el: '.swiper-custom-scrollbar' }}
              loop={true}
              breakpoints={{
                1281: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 0,
                },
                769: {
                  slidesPerView: 2.3,
                  spaceBetween: 20,
                },
                680: {
                  slidesPerView: 2.1,
                  spaceBetween: 10,
                },
                320: {
                  slidesPerView: 1.2,
                  spaceBetween: 10,
                },


              }}


            >



                  <SwiperSlide>

                  <div className="common_work_slide  position-relative">
                    {/* <img src={SliderItem3} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" /> */}
                    <video autoPlay muted loop playsInline className="object-fit-cover">
                      <source src={SwiftClubSquare} type="video/mp4" />
                    </video>
                    <div className="common_work_slide_text position-absolute w-100 h-100">
                      <div className="workbox_head">
                        <h2>The Swift Club: dating app design</h2>
                        <p className="font-messina text-uppercase">WEB DESIGN & APP DESIGN, BRANDING, COPY</p>
                      </div>
                      {/* <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                                  <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                  <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                  <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                  </svg> */}

                      {/* <div className="work_slide_hover_content position-absolute">
                                      <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                      <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                      <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                      <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                      </svg>
                                  </div> */}
                      <div className="text-center d-flex justify-content-center project_link">
                        <Link to="/project/swift" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                      </div>
                    </div>
                  </div>

                  </SwiperSlide>

                <SwiperSlide>

                <div className="common_work_slide  position-relative">
                  {/* <img src={SliderItem3} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" /> */}
                  <video autoPlay muted loop playsInline className="object-fit-cover">
                    <source src={SliderVideo3} type="video/mp4" />
                  </video>
                  <div className="common_work_slide_text position-absolute w-100 h-100">
                    <div className="workbox_head">
                      <h2>athens-based yacht charter</h2>
                      <p className="font-messina text-uppercase">22 BRAND DIRECTION · WEB DESIGN AND DEVELOPMENT</p>
                    </div>
                    {/* <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg> */}

                    {/* <div className="work_slide_hover_content position-absolute">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                    <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                    <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    </svg>
                                </div> */}
                    <div className="text-center d-flex justify-content-center project_link">
                      <Link to="/project/meso-travel" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                    </div>
                  </div>
                </div>

              </SwiperSlide>


              <SwiperSlide>

                <div className="common_work_slide  position-relative">
                  {/* <img src={SliderItem3} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" /> */}
                  <video autoPlay muted loop playsInline className="object-fit-cover">
                    <source src={TeracielProperties2} type="video/mp4" />
                  </video>
                  <div className="common_work_slide_text position-absolute w-100 h-100">
                    <div className="workbox_head">
                      <h2>dubai-based property development</h2>
                      <p className="font-messina text-uppercase">BRAND DIRECTION · WEB DESIGN AND DEVELOPMENT</p>
                    </div>
                    {/* <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
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
                                </div> */}
                    <div className="text-center d-flex justify-content-center project_link">
                      <Link to="/project/teraciel-properties" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>

                <div className="common_work_slide  position-relative">
                  <img src={TerraImg} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />

                  <div className="common_work_slide_text position-absolute w-100 h-100">
                    <div className="workbox_head">
                      <h2>Dubai-based home eCommerce</h2>
                      <p className="font-messina text-uppercase">ECOMMERCE · BRAND DIRECTION · WEB DESIGN & DEVELOPMENT</p>
                    </div>
                    {/* <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
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
                            </div> */}
                    <div className="text-center d-flex justify-content-center project_link">
                      <Link to="/project/terra-ecommerce" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                    </div>
                  </div>
                </div>

              </SwiperSlide>

              <SwiperSlide>

                <div className="common_work_slide duplicateed  position-relative">
                  <img src={IveyImg} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />

                  <div className="common_work_slide_text position-absolute w-100 h-100">
                    <div className="workbox_head">
                      <h2>miami-based design firm</h2>
                      <p className="font-messina text-uppercase">BRAND DIRECTION · WEB DESIGN AND DEVELOPMENT</p>
                    </div>
                    {/* <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
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
                            </div> */}
                    <div className="text-center d-flex justify-content-center project_link">
                      <Link to="/project/house1" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>

                <div className="common_work_slide duplicateed  position-relative">
                  <img src={landdesignca} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />

                  <div className="common_work_slide_text position-absolute w-100 h-100">
                    <div className="workbox_head">
                      <h2>Toronto-based Architecture</h2>
                      <p className="font-messina text-uppercase">HOSPITALITY · BRAND DIRECTION · PHYSICAL DESIGN</p>
                    </div>
                    <div className="text-center d-flex justify-content-center project_link">
                      <Link to="/project/land-design-ca" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
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
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
export default FeaturedWorkSlider;
