import React, { useEffect, useRef, useState } from "react";
// import { Link } from 'react-router-dom';
import iPhoneMockup from "../assets/images/iPhoneMockup.png";
import Gallery2 from "../assets/images/gallery-2.jpg";
import Gallery3 from "../assets/images/gallery-3.png";
import Gallery4 from "../assets/images/gallery-44.jpg";
import londonbasedbanner from "../assets/images/londonbasedbanner.png";
import Hongkongmiddle from "../assets/images/Hongkongmiddle.png";
import londonecommer from "../assets/images/londonecommer.png";
import Video from "../assets/videos/ContempoMobile.mp4";
import Toronto from "../assets/videos/Toronto.mp4";
import AthensBased from "../assets/videos/Athens-based.mp4";
import Torontobased from "../assets/videos/Torontobased.mp4";
import dubaibasedvideo from "../assets/videos/dubaibasedvideo.mp4";
import Londonbasedvideo from "../assets/videos/Londonbasedvideo.mp4";
import swifttheoffline from "../assets/videos/swifttheoffline.mp4";
import Video2 from "../assets/videos/single-projectslider-video2.mp4";
// import Gallery4 from '../assets/images/gallery-4.jpg';
// import Video from '../assets/videos/reviews-video.mp4';
// import Video2 from '../assets/videos/reviews-video2.mp4';
// import Video3 from '../assets/videos/reviews-video3.mp4';
// import ReviewImage1 from '../assets/images/review-image-1.jpg';
// import ReviewImage3 from '../assets/images/review-image-3.jpg';
// import ReviewImage4 from '../assets/images/review-image-4.jpg';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SingleProjectGallery({projects}) {
  const pinContainerRef = useRef(null);

  return (
    <>
   
      <div className="home_gallery_block hmgallryy overflow-hidden">
        {/* <div className="gallery-title-container mobile-version">
          <div className="gallery-title-content">
            <h3>full stack development meets experiential design</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <circle cx="2.22222" cy="2.22222" r="2.22222" fill="#A2BB3C" />
            </svg>
            <ul>
              <li>app development</li>
              <li>custom data management solutions</li>
              <li>app integration meets branded ux</li>
            </ul>
          </div>
        </div> */}
        {/* <div className="gallery-title-content text-center ">
          <h3 className="text-[28px] opacity-[0.85]">
            full stack development meets experiential design
          </h3>
          <div className="flex justify-center items-center mt-7 lg:mt-7">
            <div className="bg-[#A2BB3C] h-[0.4rem] w-[0.4rem] rounded-full"></div>
          </div>
          <ul className="mt-6 lg:mt-10 flex flex-col gap-2 lg:gap-5">
            <li className="text-[16px]  opacity-60 ">app development</li>
            <li className="text-[16px]  opacity-60">
              custom data management solutions
            </li>
            <li className="text-[16px] opacity-60">
              app integration meets branded ux
            </li>
          </ul>
        </div>



        <div className="firstsec gallery-top-container mt-10 lg:mt-32">
          <div className="gallery_pos gallery-content-1">
          <img src={iPhoneMockup} alt="iPhoneMockup" />
            <div className="gallery-content-review-title">
              <h4>Miami-based design firm </h4>
              <p>PROPERTY · BRAND DIRECTION · WEB DESIGN & DEVELOPMENT</p>
              <a class="view_prjct_btn" href="#">view project<svg xmlns="http://www.w3.org/2000/svg" width="11" height="4" viewBox="0 0 11 4" fill="none"><path d="M10.1768 2.17678C10.2744 2.07915 10.2744 1.92085 10.1768 1.82322L8.58579 0.232233C8.48816 0.134602 8.32986 0.134602 8.23223 0.232233C8.1346 0.329864 8.1346 0.488155 8.23223 0.585786L9.64645 2L8.23223 3.41421C8.1346 3.51184 8.1346 3.67014 8.23223 3.76777C8.32986 3.8654 8.48816 3.8654 8.58579 3.76777L10.1768 2.17678ZM0 2.25H10V1.75H0V2.25Z" fill="white"/>
</svg></a>
            </div>
          </div>
          <div className="gallery-content-2">
            <div className="gallery-title-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
              ></svg>
            </div>
            <div className="VideoBanner">
              <video autoPlay muted loop playsInline className="object-fit-cover">
                <source src={Toronto} type="video/mp4" />
              </video>
            </div>
            <div className="gallry-des_btm"  style={{textAlign: "left" }}>
              <h4>Toronto-based architecture firm</h4>
              <p>PROPERTY · WEB DESIGN · DEVELOPMENT</p>
              <a class="view_prjct_btn" href="#">view project<svg xmlns="http://www.w3.org/2000/svg" width="11" height="4" viewBox="0 0 11 4" fill="none">
              <path d="M10.1768 2.17678C10.2744 2.07915 10.2744 1.92085 10.1768 1.82322L8.58579 0.232233C8.48816 0.134602 8.32986 0.134602 8.23223 0.232233C8.1346 0.329864 8.1346 0.488155 8.23223 0.585786L9.64645 2L8.23223 3.41421C8.1346 3.51184 8.1346 3.67014 8.23223 3.76777C8.32986 3.8654 8.48816 3.8654 8.58579 3.76777L10.1768 2.17678ZM0 2.25H10V1.75H0V2.25Z" fill="white"/>
              </svg></a>
            </div>
          </div>
        </div>


        <div className="firstsec second_sec gallery-top-container mt-10 lg:mt-32">
          <div className="gallery-content-2">
            <div className="gallery-title-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
              ></svg>
            </div>
            <div className="VideoBanner">
              <video autoPlay muted loop playsInline className="object-fit-cover">
                <source src={AthensBased} type="video/mp4" />
              </video>
            </div>
            <div className="gallry-des_btm"  style={{textAlign: "left" }}>
              <h4>Athens-based yacht charter</h4>
              <p>BRAND DIRECTION · WEB DESIGN · DEVELOPMENT</p>
              <a class="view_prjct_btn" href="#">view project<svg xmlns="http://www.w3.org/2000/svg" width="11" height="4" viewBox="0 0 11 4" fill="none">
              <path d="M10.1768 2.17678C10.2744 2.07915 10.2744 1.92085 10.1768 1.82322L8.58579 0.232233C8.48816 0.134602 8.32986 0.134602 8.23223 0.232233C8.1346 0.329864 8.1346 0.488155 8.23223 0.585786L9.64645 2L8.23223 3.41421C8.1346 3.51184 8.1346 3.67014 8.23223 3.76777C8.32986 3.8654 8.48816 3.8654 8.58579 3.76777L10.1768 2.17678ZM0 2.25H10V1.75H0V2.25Z" fill="white"/>
              </svg></a>
            </div>
          </div>
          <div className="gallery_pos gallery-content-1">
          <img src={Hongkongmiddle} alt="Hongkongmiddle" />
            <div className="gallery-content-review-title">
              <h4>Hong Kong-based coffee group</h4>
              <p>WEB DESIGN & DEVELOPMENT</p>
              <a class="view_prjct_btn" href="#">Coming Soon</a>
            </div>
          </div>
          
        </div>


        <div className="firstsec thirdsec gallery-top-container mt-10 lg:mt-32">
          <div className="gallery_pos gallery-content-1">
          <img src={londonbasedbanner} alt="londonbasedbanner" />
            <div className="gallery-content-review-title">
              <h4>London-based event production</h4>
              <p>HOSPITALITY · BRAND DIRECTION · WEB DESIGN & DEVELOPMENT</p>
              <a class="view_prjct_btn" href="#">view project<svg xmlns="http://www.w3.org/2000/svg" width="11" height="4" viewBox="0 0 11 4" fill="none"><path d="M10.1768 2.17678C10.2744 2.07915 10.2744 1.92085 10.1768 1.82322L8.58579 0.232233C8.48816 0.134602 8.32986 0.134602 8.23223 0.232233C8.1346 0.329864 8.1346 0.488155 8.23223 0.585786L9.64645 2L8.23223 3.41421C8.1346 3.51184 8.1346 3.67014 8.23223 3.76777C8.32986 3.8654 8.48816 3.8654 8.58579 3.76777L10.1768 2.17678ZM0 2.25H10V1.75H0V2.25Z" fill="white"/>
</svg></a>
            </div>
          </div>
          <div className="gallery-content-2">
            <div className="gallery-title-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
              ></svg>
            </div>
            <div className="VideoBanner">
              <video autoPlay muted loop playsInline className="object-fit-cover">
                <source src={swifttheoffline} type="video/mp4" />
              </video>
            </div>
            <div className="gallry-des_btm"  style={{textAlign: "left" }}>
              <h4>Swift: the offline dating app website</h4>
              <p>BRANDING · COPY · APP DESIGN</p>
              <a class="view_prjct_btn" href="#">view project<svg xmlns="http://www.w3.org/2000/svg" width="11" height="4" viewBox="0 0 11 4" fill="none">
              <path d="M10.1768 2.17678C10.2744 2.07915 10.2744 1.92085 10.1768 1.82322L8.58579 0.232233C8.48816 0.134602 8.32986 0.134602 8.23223 0.232233C8.1346 0.329864 8.1346 0.488155 8.23223 0.585786L9.64645 2L8.23223 3.41421C8.1346 3.51184 8.1346 3.67014 8.23223 3.76777C8.32986 3.8654 8.48816 3.8654 8.58579 3.76777L10.1768 2.17678ZM0 2.25H10V1.75H0V2.25Z" fill="white"/>
              </svg></a>
            </div>
          </div>
        </div>

        <div className="firstsec four_sec gallery-top-container mt-10 lg:mt-32">
          <div className="gallery-content-2">
            <div className="gallery-title-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
              ></svg>
            </div>
            <div className="VideoBanner">
              <video autoPlay muted loop playsInline className="object-fit-cover">
                <source src={Torontobased} type="video/mp4" />
              </video>
            </div>
            <div className="gallry-des_btm"  style={{textAlign: "left" }}>
              <h4>Toronto-based landscape architect</h4>
              <p>BRANDING, WEB DESIGN & DEVELOPMENT</p>
              <a class="view_prjct_btn" href="#">coming soon</a>
            </div>
          </div>
          <div className="gallery_pos gallery-content-1">
              <video autoPlay muted loop playsInline className="object-fit-cover">
                <source src={dubaibasedvideo} type="video/mp4" />
              </video>
            <div className="gallery-content-review-title">
              <h4>Dubai-based property development</h4>
              <p>WEB DESIGN & DEVELOPMENT</p>
              <a class="view_prjct_btn" href="#">Coming Soon</a>
            </div>
          </div>
          
        </div>

          
      <div className="firstsec fivesec gallery-top-container mt-10 lg:mt-32">
          <div className="gallery_pos gallery-content-1">
          <img src={londonecommer} alt="londonecommer" />
            <div className="gallery-content-review-title">
              <h4>Dubai-based home eCommerce</h4>
              <p>ECOMMERCE · BRAND DIRECTION · WEB DESIGN & DEVELOPMENT</p>
              <a class="view_prjct_btn" href="#">view project<svg xmlns="http://www.w3.org/2000/svg" width="11" height="4" viewBox="0 0 11 4" fill="none"><path d="M10.1768 2.17678C10.2744 2.07915 10.2744 1.92085 10.1768 1.82322L8.58579 0.232233C8.48816 0.134602 8.32986 0.134602 8.23223 0.232233C8.1346 0.329864 8.1346 0.488155 8.23223 0.585786L9.64645 2L8.23223 3.41421C8.1346 3.51184 8.1346 3.67014 8.23223 3.76777C8.32986 3.8654 8.48816 3.8654 8.58579 3.76777L10.1768 2.17678ZM0 2.25H10V1.75H0V2.25Z" fill="white"/>
</svg></a>
            </div>
          </div>
          <div className="gallery-content-2">
            <div className="gallery-title-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
              ></svg>
            </div>
            <div className="VideoBanner">
              <video autoPlay muted loop playsInline className="object-fit-cover">
                <source src={Londonbasedvideo} type="video/mp4" />
              </video>
            </div>
            <div className="gallry-des_btm"  style={{textAlign: "left" }}>
              <h4>London-based luxury travel concierge </h4>
              <p>HOSPITALITY · BRAND DIRECTION · PHYSICAL DESIGN</p>
            </div>
          </div>
        </div> */}

        <div className="gallery-top-container mt-10 lg:mt-32">
          <div className="gallery-content-1">
            <video autoPlay muted loop playsInline controls={false} className="object-fit-cover">
              <source src={Video2} type="video/mp4" />
            </video>
            <div className="gallery-content-review-title">
              <h4>London-based luxury travel concierge</h4>
              <p>HOSPITALITY · BRAND DIRECTION · PHYSICAL DESIGN</p>
            </div>
          </div>
          {/* <div className="gallery-content-2">
            <div className="gallery-title-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
              ></svg>
            </div>
            <img src={Gallery2} alt="gallery-2" />
            <p className="gallery-review-title text-start" style={{ fontSize: "12px", textAlign: "left" }}><a href="/project/contempo">TORONTO-BASED ARCHITECTURE FIRM</a></p>
          </div> */}

          <div className="gallery-content-2 firstsec hmglry">
            <div className="gallery-title-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
              ></svg>
            </div>
            <div className="VideoBanner">
              <video autoPlay muted loop playsInline controls={false} className="object-fit-cover">
                <source src={Toronto} type="video/mp4" />
              </video>
            </div>
            
            <p className="gallery-review-title text-start" style={{ fontSize: "12px", textAlign: "left" }}><a href="/project/contempo">TORONTO-BASED ARCHITECTURE FIRM</a></p>
           
          </div>

        </div>
        <div className="gallery-bottom-container">
          <div className="gallery-content-3 ">
            <img src={Gallery3} alt="gallery-3" />

            <p className="gallery-review-title messina-sans  w-full  m-0 " style={{ fontSize: "12px", textAlign: "left" }}><a href="/project/swift">Members-only dating app - launching late 2024</a></p>
          </div>
          <div className="gallery-content-4">
            {/* <video autoPlay muted loop playsInline className="object-fit-cover">
              <source src={Video} type="video/mp4" />
            </video> */}
            <img src={Gallery4} alt="gallery-3" />
            <div className="gallery-content-review-title">
              <h4>Hong Kong-based coffee group</h4>
              <p>HOSPITALITY · BRAND DIRECTION · PHYSICAL DESIGN</p>
            </div>
          </div>
        </div>
        <div class="home-gallery-btn d-flex justify-content-center">
          <a class="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link" href="/work">View all Projects</a>
        </div>
      </div>
    </>
  );
}
