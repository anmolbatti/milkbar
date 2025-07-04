import React from "react";
import SingleProjectBanner from "../components/SingleProjectBanner";
import BannerImage from "../assets/images/brand-banner.jpg";
import BannerMobileImage from "../assets/images/brand-banner-mobile.png";
import WhatWeDo from "../components/WhatWeDo";
import TextBlock from "../components/TextBlock";
import Envisioning from "../components/Envisioning";
import SingleProjectSlider from "../components/SingleProjectSlider";
import SocailMediaSteps from "../components/SocailMediaSteps";
import brandslider1 from "../assets/images/brandslider1.png";
import brandslider2 from "../assets/images/brandslider2.png";
import brandslider3 from "../assets/images/brandslider3.png";
import brandImage1 from "../assets/images/brandimage1.svg";
import Background from "../assets/images/social-botm.jpg";
import socialBotmvideo from "../assets/videos/brandbotmvideo.mp4";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Branding() {
  const isAdminRoute = window.location.pathname.startsWith("/admin");
  const WhatWeDoData = [
    {
      contentlist: "logo and icon design",
    },
    {
      contentlist: "brand element creation",
    },
    {
      contentlist: "photography/videography direction",
    },
    {
      contentlist: "copywriting",
    },
  ];
  const slides = [
    {
      clientName: "CLIENT: MARBLE BESPOKE",
      clientDescription: "Greece-based marble procurement and design",
      sliderImage: brandslider1,
      brandImage: brandImage1,
    },
    {
      clientName: "CLIENT1: MARBLE BESPOKE",
      clientDescription: "Greece-based marble procurement and design",
      sliderImage: brandslider2,
      brandImage: brandImage1,
    },
    {
      clientName: "CLIENT2: MARBLE BESPOKE",
      clientDescription: "Greece-based marble procurement and design",
      sliderImage: brandslider3,
      brandImage: brandImage1,
    },
    {
      clientName: "CLIENT3: MARBLE BESPOKE",
      clientDescription: "Greece-based marble procurement and design",
      sliderImage: brandslider1,
      brandImage: brandImage1,
    },
    {
      clientName: "CLIENT4: MARBLE BESPOKE",
      clientDescription: "Greece-based marble procurement and design",
      sliderImage: brandslider2,
      brandImage: brandImage1,
    },
    {
      clientName: "CLIENT5: MARBLE BESPOKE",
      clientDescription: "Greece-based marble procurement and design",
      sliderImage: brandslider3,
      brandImage: brandImage1,
    },
  ];
  return (
    <>
      {!isAdminRoute && <Header />}
      <div className="social_media_page brand_page">
        <SingleProjectBanner
          BannerImage={BannerImage}
          BannerMobileImage={BannerMobileImage}
          bannerHeading=""
          bannerSubHeading="the fine balance between branding and ‘if you know you know’"
        />
        <div className="single-project-banner-bottm d-grid position-relative">
          <TextBlock Content=" No one brands like Europe. Distinct, timeless, and authentic elements are what ensure a brand survives an increasingly micro-trend based market without shouting." />
          <TextBlock Content="Find a style and a story. Develop within." />
        </div>
        <SingleProjectSlider slides={slides} />
        <WhatWeDo content={WhatWeDoData} />
        <SocailMediaSteps showTitle={true} />
        <Envisioning
          socialBotmvideo={socialBotmvideo}
          Background={Background}
          envisioningTitle="let us know what you’re envisioning "
        />
      </div>
      {!isAdminRoute && <Footer />}
    </>
  );
}
