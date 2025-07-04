import React from "react";
import AboutBanner from "../components/AboutBanner";
import Gallery from "../components/HomeGallery";
import Header from "../components/Header";
import Footer from "../components/Footer";

function aboutPage() {
  const isAdminRoute = window.location.pathname.startsWith("/admin");

  return (
    <>
      <div className="aboutpage">
        <AboutBanner />
        <Gallery />
      </div>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default aboutPage;
