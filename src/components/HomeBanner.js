import React from "react";
import BannerImage from "../assets/images/home-banner.jpg";
import BannerMobileImage from "../assets/images/home-banner-mobile.jpg";
import HomeBackgroundVideo from "../assets/videos/MilkbarHomeDesktop-2.mp4";

function HomeBanner() {
  return (
    <div className="main_home_banner page_banner position-relative">
      <video autoPlay muted loop playsInline className="main_home_banner_video">
        <source src={HomeBackgroundVideo} type="video/mp4" />
      </video>
      <div className="main_home_banner_content position-absolute w-100 h-100">
        <div className="grandient-banner-area" />
      </div>
      <div className="bannerbox">
        {/* <img src={BannerImage} alt="Logo" style={{ width: '100%', position: "absolute", height:  }} /> */}
        <div className="home_banner_bottom text-light position-relative">
          <h1 className="text-white m-0 text-center lg:text-[28px] lg:px-[6.5rem] text-nowrap">
            <span className="hmtextstyle">branding, design, dev</span> for luxury brands
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
