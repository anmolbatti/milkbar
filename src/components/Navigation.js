import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import MenuArrow from "../assets/images/down_arrow_icon.svg";

function Navigation() {
  const location = useLocation();
  const path = location.pathname;

  const scrolltoServices = () => {
    const bottomIdentifier = document.getElementById("milkbar-services");
    if (bottomIdentifier) {
      bottomIdentifier.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav>
        <ul className="d-flex justify-content-center w-100 list-style-none">
          <li className={`${path === "/" ? "active" : ""}`}>
            <Link
              to="/"
              className="text-uppercase letter-spacing-5 font-12 font-messina text-white"
              onClick={scrolltoServices}
            >
              Services
            </Link>
          </li>
          <li className={path === "/work" ? "active" : ""}>
            <Link
              to="/work"
              className="text-uppercase letter-spacing-5 font-12 font-messina text-white"
            >
              Work
            </Link>
          </li>
          <li className={path === "/contact" ? "active" : ""}>
            <Link
              to="/contact"
              className="text-uppercase letter-spacing-5 font-12 font-messina text-white"
            >
              Contact
            </Link>
          </li>
          <li className={path === "/about" ? "active" : ""}>
            <Link
              to="/about"
              className="text-uppercase letter-spacing-5 font-12 font-messina text-white"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
