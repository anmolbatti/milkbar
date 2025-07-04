import React from "react";
import ContactBanner from "../components/ContactBanner";
import Header from "../components/Header";
import Footer from "../components/Footer";

function aboutPage() {
  const isAdminRoute = window.location.pathname.startsWith("/admin");
  return (
    <>
      {!isAdminRoute && <Header />}
      <div className="aboutpage">
        <ContactBanner />
      </div>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default aboutPage;
