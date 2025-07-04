import React, { useEffect, useRef, useState } from "react";
// import { Link } from 'react-router-dom';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturedImage from "./featured/FeaturedImage";
import FeaturedMedia from "./featured/FeaturedMedia";
gsap.registerPlugin(ScrollTrigger);

const SingleProjectGallery = (props) => {
  const pinContainerRef = useRef(null);
  const { project } = props;
  const { galleryImages } = project;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth); // Adjust the width as needed
  };

  useEffect(() => {
    changeWindowWidth(); // Check on mount

    window.addEventListener("resize", changeWindowWidth); // Listen for resize events

    return () => {
      window.removeEventListener("resize", changeWindowWidth); // Cleanup listener on unmount
    };
  }, []);
  return (
    <>
      <div className="home_gallery_block single_home_gallery_block overflow-hidden ptb-120">
        <div
          className="home_gallery_wrapper position-relative pin-container"
          ref={pinContainerRef}
        >
          <div className="home_gallery_middle d-flex justify-content-center d-flex">
            <div className="home_gallery_image position-relative gallery_image_2">
              <div className="home_gallery_image_sec">
                <FeaturedMedia featuredImage={galleryImages[0]} />
              </div>
            </div>
            <div className="home_gallery_image position-relative gallery_image_3">
              <div className="home_gallery_image_sec">
                <FeaturedMedia featuredImage={galleryImages[1]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProjectGallery;
