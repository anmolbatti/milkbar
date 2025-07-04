import React from "react";
import BannerImage from "../assets/images/contact-background.jpg";
import BannerMobileImage from "../assets/images/contact-banner-mobile.jpg";
import ContactForm from "./ContactForm";

function ContactBanner() {
  return (
    <>
      <div className="main_about_banner page_banner inner_page_banner contact_top_banner position-relative">
        <picture>
          <source
            media="(max-width: 645px)"
            srcSet={"/images/contact-page/contact-background-mobile-2.jpg"}
          />
          <img src={BannerImage} alt="Logo" />
        </picture>
        <div className="main_home_banner_content position-absolute w-100 h-100">
          <div className="plr-100 h-100 d-flex justify-content-center position-relative">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactBanner;
