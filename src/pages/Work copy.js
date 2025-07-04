import React, { useState, useEffect, useRef } from "react";
import BannerImage from "../assets/images/contact-banner.jpg";
import BannerMobileImage from "../assets/images/contact-banner-mobile.jpg";
import ProjectList from "../components/ProjectList";
import { useParams } from "react-router-dom";
import axios from "axios";
import config from "../config";
import ProjectSection2 from "../components/work-page-components/ProjectSection2";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BACKEND_SERVER_ADDRESS } from "../data/variables/variables-1";
function Work() {
  const isAdminRoute = window.location.pathname.startsWith("/admin");
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        axios
          .get(`${BACKEND_SERVER_ADDRESS}/api/admin/get-projects`)
          .then((response) => {
            const projectData = response.data;
            setProjects(projectData);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (err) {
        setError("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [id]);

  const headerRef = useRef(null);
  const headerDivRef = useRef(null);

  useEffect(() => {
    const responsivenessFunction = () => {
      if (headerRef.current) {
        const header = headerRef.current;
        const heightOfHeaderDiv = header.scrollHeight;

        if (headerDivRef.current) {
          const headerDiv = headerDivRef.current;
          headerDiv.style.height = heightOfHeaderDiv - 2 + "px"; // -2 for real mobile issue
        }
      }
    };
    responsivenessFunction();
    setTimeout(() => {
      responsivenessFunction();
    }, 3000);
    window.addEventListener("load", responsivenessFunction);
    window.addEventListener("DOMContentLoaded", responsivenessFunction);
    window.addEventListener("resize", responsivenessFunction);
    return () => {
      window.removeEventListener("load", responsivenessFunction);
      window.removeEventListener("resize", responsivenessFunction);
      window.removeEventListener("DOMContentLoaded", responsivenessFunction);
    };
  }, []);
  return (
    <>
      {!isAdminRoute && <Header />}
      <div>
        <div ref={headerDivRef} className=" overflow-hidden relative">
          {/* <div className="md:hidden h-full">
            <img
              src="/images/landing-page/hero-bg-mobile.png"
              className="h-full w-full object-cover object-center"
              alt=""
            />
          </div> */}

          <div className="hidden md:block">
            <img
              src="/images/landing-page/header-image.jpg"
              className="h-full w-full object-cover object-center md:object-fit  xl:object-[center_-35rem]  -scale-x-100"
              alt=""
            />
          </div>
          <div
            ref={headerRef}
            className="bg-black bg-opacity-80 lg:bg-opacity-70 w-full h-fit absolute top-0 "
          >
            <div className=" md:hidden opacity-0">
              <div className=" py-5 bg-gradient-to-b from-black to-transparent transition-all duration-500">
                <div className="text-[white] text-center font-medium text-lg">
                  milkbar
                </div>
                <hr className="mt-5 opacity-50" />
                <div className="mt-5">
                  <ul className="px-5 flex justify-between ">
                    <li className="text-[white] text-xs">SERVICES</li>
                    <li className="text-[white] opacity-60 hover:opacity-100 cursor-pointer text-xs">
                      WORK
                    </li>
                    <li className="text-[white] opacity-60 hover:opacity-100 cursor-pointer text-xs">
                      CONTACT
                    </li>
                    <li className="text-[white] opacity-60 hover:opacity-100 cursor-pointer text-xs">
                      ABOUT
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden md:block opacity-0">
              <div className="py-10  px-5 bg-gradient-to-b from-black to-transparent transition-all duration-500">
                <div className="flex justify-center items-center">
                  <div className="w-full max-w-screen-xl ">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-[white] text-center font-medium text-2xl">
                          milkbar
                        </div>
                      </div>
                      <div>
                        <ul className=" flex justify-between items-center gap-10">
                          <li className="text-[white] text-sm">SERVICES</li>
                          <li className="text-[white] opacity-60 hover:opacity-100 cursor-pointer text-sm">
                            WORK
                          </li>
                          <li className="text-[white] opacity-60 hover:opacity-100 cursor-pointer text-sm">
                            CONTACT
                          </li>
                          <li className="text-[white] opacity-60 hover:opacity-100 cursor-pointer text-sm">
                            ABOUT
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div>
                          <i className="fa-solid fa-envelope text-[white] text-2xl opacity-70 hover:opacity-100  active:scale-[0.95] cursor-pointer"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 lg:mt-36 xl:mt-[15rem]">
              <div className="px-5 flex justify-center items-center">
                <div className="lg:flex lg:w-[80%] w-full lg:justify-between">
                  <div className="lg:w-[30%]">
                    <div className="text-[white]  text-xl lg:text-3xl">
                      work
                    </div>
                    <div className="mt-24 lg:mt-32 text-xs lg:text-xs text-[white] opacity-[0.6] ">
                      FEATURED
                    </div>
                    <div className="text-[white] mt-5 lg:mt-7 opacity-[0.75] lg:text-2xl">
                      Swift: Members Only Dating App
                    </div>
                    <div className="text-[white] mt-5 lg:mt-7  opacity-[0.6] text-sm">
                      branding, app design, social media
                    </div>
                    <div className="text-[white] mt-2  opacity-[1] text-xs italic ">
                      launching late 2024
                    </div>
                  </div>
                  <div className="lg:w-[60%]">
                    <div className="mt-16 lg:mt-0">
                      <div className="flex justify-between items-end">
                        <div className="w-[32%] rounded-lg overflow-hidden transition-all duration-700 hover:translate-y-[-1rem] cursor-pointer">
                          <img
                            src="/images/landing-page/updated-mobile-2.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                        <div className="w-[32%] rounded-lg overflow-hidden transition-all duration-700 hover:translate-y-[-1rem] cursor-pointer">
                          <img
                            src="/images/landing-page/updated-mobile-3.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                        <div className="w-[32%] rounded-lg overflow-hidden transition-all duration-700 hover:translate-y-[-1rem] cursor-pointer">
                          <img
                            src="/images/landing-page/updated-mobile-1.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[5rem] bg-gradient-to-b from-transparent to-[#131313] transition-all duration-500"></div>
          </div>
        </div>
      </div>
      <ProjectList projects={projects} />

      {/* <ProjectSection2 /> */}
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default Work;
