import React, { useState, useEffect } from "react";
import BannerImage from "../assets/images/footer-background.jpg";
import BannerMobileImage from "../assets/images/home-banner-mobile.jpg";
import FooterVideo from "../assets/videos/footer-video.MOV";

function Footer() {
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveItem(currentPath);
  }, []);

  const handleItemClick = (path) => {
    setActiveItem(path);
  };

  return (
    <footer className="site_footer">
      <video autoPlay muted loop playsInline className="footer_bg_video">
        <source src={FooterVideo} type="video/mp4" />
      </video>
      <div className="footer_wrapper d-flex">
        {/* Reach Us Section */}
        <div className="footer_menu reach_us">
          <h3 className="menu_title">Reach Us</h3>
          <ul>
            <li>
              <a href="mailto:info@themilkbar.co">info@themilkbar.co</a>
            </li>
            <li>
              <a href="#">Send a Message</a>
            </li>
            <li>
              <a href="#">WhatsApp Us</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer_menu quick_links">
          <h3 className="menu_title">Quick Links</h3>
          <ul>
            <li className={activeItem === "/about" ? "active" : ""}>
              <a href="/about" onClick={() => handleItemClick("/about")}>
                About
              </a>
            </li>
            <li className={activeItem === "/project" ? "active" : ""}>
              <a href="/project" onClick={() => handleItemClick("/project")}>
                Recent Work
              </a>
            </li>
            <li className={activeItem === "/services" ? "active" : ""}>
              <a href="/services" onClick={() => handleItemClick("/services")}>
                Services
              </a>
            </li>
            <li className={activeItem === "/contact" ? "active" : ""}>
              <a href="/contact" onClick={() => handleItemClick("/contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
