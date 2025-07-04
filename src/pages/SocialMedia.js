import React from "react";
import BannerImage from "../assets/images/social-media-bannernew.jpg";
import BannerMobileImage from "../assets/images/social-media-banner-mobile.png";
import SingleProjectBanner from "../components/SingleProjectBanner";
import WhatWeDo from "../components/WhatWeDo";
import TextBlock from "../components/TextBlock";
// import Gallery from '../components/HomeGallery';
import Item1 from "../assets/images/service-slide-1.jpg";
// import SocialMediaLtrSlider  from '../components/SocialMediaLtrSlider';
// import SocialMediaRtlSlider  from '../components/SocialMediaRtlSlider';
// import SocialMediaLtrSlider2  from '../components/SocialMediaLtrSlider2';
import Envisioning from "../components/Envisioning";
import SingleProjectSlider from "../components/SingleProjectSlider";
import SocailMediaSteps from "../components/SocailMediaSteps";
import Background from "../assets/images/social-botm.jpg";
import socialBotmvideo from "../assets/videos/socialbotmvideo.mp4";
import SingleProjectGallery from "../components/SingleProjectGallery";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  const isAdminRoute = window.location.pathname.startsWith("/admin");

  const WhatWeDoData = [
    {
      contentlist: "brand direction for social",
    },
    {
      contentlist: "content planning + photography direction",
    },
    {
      contentlist: "social media management",
    },
    {
      contentlist: "social advertising",
    },
  ];
  const slides = [
    {
      clientName: "CLIENT: MARBLE BESPOKE",
      clientDescription: "Greece-based marble procurement and design",
      sliderImage: Item1,
      brandImage: "",
    },
    {
      clientName: "CLIENT1: MARBLE BESPOKE",
      clientDescription: "Greece-based marble procurement and design",
      sliderImage: Item1,
      brandImage: "",
    },
    {
      clientName: "CLIENT2: MARBLE BESPOKE",
      clientDescription: "Greece-based marble procurement and design",
      sliderImage: Item1,
      brandImage: "",
    },
    {
      clientName: "CLIENT3: MARBLE BESPOKE",
      clientDescription: "Greece-based marble procurement and design",
      sliderImage: Item1,
      brandImage: "",
    },
    {
      clientName: "CLIENT4: MARBLE BESPOKE",
      clientDescription: "Greece-based marble procurement and design",
      sliderImage: Item1,
      brandImage: "",
    },
    {
      clientName: "CLIENT5: MARBLE BESPOKE",
      clientDescription: "Greece-based marble procurement and design",
      sliderImage: Item1,
      brandImage: "",
    },
  ];
  return (
    <>
      {!isAdminRoute && <Header />}
      <div className="social_media_page single_project_page">
        <SingleProjectBanner
          BannerImage={BannerImage}
          BannerMobileImage={BannerMobileImage}
          bannerHeading="social media:"
          bannerSubHeading="the art of the window display"
        />
        <TextBlock Content=" Social media should be small components of your brand, amplified. They should spark emotion, (scroll) stopping, and leave the feeling of wanting more." />
        {/* <Gallery />  */}
        <SingleProjectGallery />
        <WhatWeDo content={WhatWeDoData} />
        <SingleProjectSlider slides={slides} />
        {/* <SocialMediaSlider /> */}
        <SocailMediaSteps />
        {/* <TextBlock Content="Meso is an Athens-based yacht charter company serving HNW clientele in Greece, Turkey, Spain, Albania, and more. We wanted to reference the Greek routes in the brand design while maintaining a simple look and feel to reflect the ease of booking with Meso." />   */}
        {/* <SocialMediaLtrSlider />
        <SocialMediaRtlSlider />
        <SocialMediaLtrSlider2 /> */}
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

export default App;
