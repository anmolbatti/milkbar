import React, { useState, useEffect, useRef } from "react";
import BannerImage from "../assets/images/contact-banner.jpg";
import BannerMobileImage from "../assets/images/contact-banner-mobile.jpg";
import ProjectList from "../components/ProjectList";
import { useParams } from "react-router-dom";
import axios from "axios";
import config from "../config";
import ProjectSection2 from "../components/work-page-components/ProjectSection2";
import SingleProjectGallery from "../components/SingleProjectGallery2";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BACKEND_SERVER_ADDRESS1 } from "../data/variables/variables-1";
function Work() {
  const isAdminRoute = window.location.pathname.startsWith("/admin");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       axios
  //         .get(`${BACKEND_SERVER_ADDRESS1}/api/admin/get-projects`)
  //         .then((response) => {
  //           const projectData = response.data;
  //           setProjects(projectData);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     } catch (err) {
  //       setError("Failed to fetch projects");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProjects();
  // }, [id]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/data/ProjectsList.json");
        if (!response.ok) {
          throw new Error("Failed to load projects data");
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError("Failed to fetch project details");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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
        <div ref={headerDivRef} className="workbnr overflow-hidden relative">
          
          {/* <div className="hidden md:block">
            <img
              src="/images/landing-page/worknewbanner.jpg"
              className="bnrwork h-full w-full object-cover object-center"
              alt=""
            />
          </div> */}

          <div ref={headerRef} className=" workcontent bg-opacity-80 lg:bg-opacity-70 w-full absolute "  >
            

                  <div className="lg:w-[100%] workdes text-center">
                    <div className="text-[white]  text-xl lg:text-3xl">
                      work
                    </div>
                    <div className="doticon bg-[#A2BB3C] h-[0.4rem] w-[0.4rem] rounded-full m-auto"></div>
                      <div className="workheading text-[white] mt-5 lg:mt-7 opacity-[0.75] lg:text-2xl">
                        full stack development meets experiential design 
                      </div>
                   
                    <ul className="workbanner-links d-flex justify-content-center ">
                      <li>BRANDING & BRAND DIRECTION</li>
                      <li>WEB AND APP DESIGN</li>
                      <li>DEVELOPMENT</li>
                    </ul>
                  </div>
            
            <div className="h-[5rem] bg-gradient-to-b from-transparent to-[#131313] transition-all duration-500"></div>
          </div>

        </div>
      </div>
      <SingleProjectGallery projects={projects}/>

      {/* <ProjectSection2 /> */}
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default Work;
