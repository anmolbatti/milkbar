import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Gallery1 from "../assets/images/gallery-1.png";
import Gallery2 from "../assets/images/gallery-2.jpg";
import Gallery3 from "../assets/images/gallery-3.png";
import Gallery4 from "../assets/images/gallery-4.jpg";
import config from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function HomeGallery({ brandSection }) {
  const pinContainerRef = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinContainerRef.current,
          start: "top +=400",
          end: "+=1000",
          scrub: true,
          markers: false,
        },
      });

      tl.to(
        ".gallery_image_1",
        {
          duration: 1,
          x: 0,
          y: -200,
        },
        0
      );
      tl.to(
        ".gallery_image_2",
        {
          duration: 1,
          x: -80,
          y: 0,
        },
        0
      );
      tl.to(
        ".gallery_image_3",
        {
          duration: 1,
          x: 80,
          y: 0,
        },
        0
      );
      tl.to(
        ".gallery_image_4",
        {
          duration: 1,
          x: 0,
          y: -110,
        },
        0
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  if (brandSection) {
    return (
      <div className="home_gallery_block overflow-hidden ptb-120">
        <div
          className="home_gallery_wrapper position-relative pin-container"
          ref={pinContainerRef}
        >
          <div className="gallery-item">
            {" "}
            {/* Added a key prop */}
            <div className="home_gallery_top">
              <div className="home_gallery_image position-relative gallery_image_1 z-2">
                {brandSection?.imageOne && ( // Display imageOne
                  <img
                    src={`${config.BASE_URL}${brandSection?.imageOne}`}
                    alt="Gallery Image One"
                    className="w-100 position-absolute"
                  />
                )}
                <span className="position-absolute font-12 font-messina text-uppercase viewalllink underline_link">
                  <Link to="/work" className="text-white">
                    View All Projects
                  </Link>
                </span>
              </div>
            </div>
            <div className="home_gallery_middle d-flex justify-content-center nowrap">
              <div className="home_gallery_image position-relative gallery_image_2">
                {brandSection?.imageTwo && ( // Display imageTwo
                  <img
                    src={`${config.BASE_URL}${brandSection?.imageTwo}`}
                    alt="Gallery Image Two"
                    className="w-100 position-absolute"
                  />
                )}
              </div>
              <div className="home_gallery_image position-relative gallery_image_3">
                {brandSection?.imageThree && ( // Display imageThree
                  <img
                    src={`${config.BASE_URL}${brandSection?.imageThree}`}
                    alt="Gallery Image Three"
                    className="w-100 position-absolute"
                  />
                )}
              </div>
            </div>
            <div className="home_gallery_bottom">
              <div className="home_gallery_image position-relative gallery_image_4">
                {brandSection?.imageFour && ( // Display imageFour
                  <img
                    src={`${config.BASE_URL}${brandSection?.imageFour}`}
                    alt="Gallery Image Four"
                    className="w-100 position-absolute"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="home_gallery_block overflow-hidden ptb-120">
        <div
          className="home_gallery_wrapper position-relative pin-container"
          ref={pinContainerRef}
        >
          <div className="home_gallery_top">
            <div className="home_gallery_image position-relative gallery_image_1 z-2">
              <img
                src={Gallery2}
                alt="Gallery Image"
                className="w-100 position-absolute"
              />
              <span className="position-absolute font-12 font-messina text-uppercase viewalllink underline_link">
                <Link to="/work" className="text-white">
                  View All Projects
                </Link>
              </span>
            </div>
          </div>
          <div className="home_gallery_middle d-flex justify-content-center nowrap">
            <div className="home_gallery_image position-relative gallery_image_2">
              <img
                src={Gallery1}
                alt="Gallery Image"
                className="w-100 position-absolute"
              />
            </div>
            <div className="home_gallery_image position-relative gallery_image_3">
              <img
                src={Gallery3}
                alt="Gallery Image"
                className="w-100 position-absolute"
              />
            </div>
          </div>
          <div className="home_gallery_bottom">
            <div className="home_gallery_image position-relative gallery_image_4">
              <img
                src={Gallery4}
                alt="Gallery Image"
                className="w-100 position-absolute"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeGallery;
