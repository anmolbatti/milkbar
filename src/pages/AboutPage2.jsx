import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerImage from "../assets/images/about-banner-new.jpg"
import useBasic from "../hooks/useBasics/useBasics";

const AboutPage2 = () => {
  const isAdminRoute = window.location.pathname.startsWith("/admin");
  const screenSize = useBasic((state) => state.screenSize);

  return (
    <>
      <section>
        <div className="md:hidden">
          <div className="h-screen w-full relative">
          <img src={BannerImage} alt="" className="w-full h-full object-cover object-center"/>
          
            <div className="absolute top-0 w-full h-full aboutusbanner">
              <div className="w-full h-full flex items-end">
                <div className="bg-[black] bg-opacity-[65%] backdrop-blur-sm w-full aboutusbanner-summary">
                  <div className="px-5 py-10  h-full">
                    <div>
                      <div className="flex gap-3 items-center">
                        <div className="bg-[#a2bb3c] h-[0.8rem] w-[0.8rem] rounded-full"></div>
                        <div className="">Why Milkbar?</div>
                      </div>
                    </div>
                    <div className="text-sm mt-5 leading-loose aboutus_des">
                       Milkbar is ‘Milkbar’ because the principal’s family immigrated from a Greek village to Australia.
                    </div>
                    <div className="text-sm mt-5 leading-loose aboutus_des">
                    During this era, many Greek immigrants opened corner cafes, emulating the traditional Greek cafe, called ‘milk bars’. Milk bars became the cornerstone of a community in transition from immense loss to prosperity, remaining grounded in tradition.
                    </div>
                    <div className="text-sm mt-5 leading-loose aboutus_des">
                    Everything beautiful exists in a perpetual state between classic and new, ruined and resurrected, remembered and envisioned.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="h-screen w-full relative">
            {/* <video autoPlay muted loop playsInline className="w-full h-full object-cover object-center">
              <source
                src="/videos/AboutBackground.mp4"
                type="video/mp4"
              />
              <source
                src="/videos/AboutBackground.mov"
                type="video/quicktime"
              />
            </video> */}
            <div className="h-screen w-full relative">
              <img src={BannerImage} alt="" className="w-full h-full object-cover object-center"/>
              </div>
            <div className=" absolute top-0 w-full h-full">
              <div className="h-full">
                <div className="w-full h-full flex ">
                  <div className=" w-[60%] xl:w-[50%] bg-[black] bg-opacity-[65%] backdrop-blur-sm h-full ">
                    <div className="flex justify-end items-center h-full">
                      <div className="xl:pr-[175px] py-10 w-[90%] lg:w-[80%] xl:w-[80%]">
                        <div>
                          <div className="flex gap-3 items-center">
                            <div className="bg-[#a2bb3c] h-[0.8rem] w-[0.8rem] rounded-full"></div>
                            <div className=" lg:text-2xl">Why Milkbar?</div>
                          </div>
                        </div>
                        <div className="text-sm lg:text-base mt-5 lg:mt-16 leading-loose">
                        Milkbar is ‘Milkbar’ because the principal’s family immigrated from a Greek village to Australia.
                        </div>
                        <div className="text-sm lg:text-base mt-5 lg:mt-7 xl:mt-10 leading-loose">
                        During this era, many Greek immigrants opened corner cafes, emulating the traditional Greek cafe, called ‘milk bars’. Milk bars became the cornerstone of a community in transition from immense loss to prosperity, remaining grounded in tradition.
                        </div>
                        <div className="text-sm lg:text-base mt-5 lg:mt-7 xl:mt-10  leading-loose">
                        Everything beautiful exists in a perpetual state between classic and new, ruined and resurrected, remembered and envisioned.{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[40%] xl:w-[50%] h-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage2;
