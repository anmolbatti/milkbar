import React from "react";
import { BACKEND_SERVER_ADDRESS } from "../../data/variables/variables-1";
import VideoElement from "./VideoElement";
import FeaturedImageOrVideo from "./FeaturedImageOrVideo";

const CardOfProjectType1 = (props) => {
  const { data } = props;
  const {
    name,

    videoSrc,
    backgroundImageSrc,
    id,
    videoResolutionType,
  } = data;
  const { bannerImage, featuredImage, category, title, description } = data;

  return (
    <>
      <div>
        <div className=" h-[25rem] sm:h-[30rem] lg:h-[30rem] xl:h-[42rem]   relative overflow-hidden rounded ">
          <div className="h-full transition-all duration-700 hover:scale-[1.05] cursor-pointer">
            <img
              src={`${BACKEND_SERVER_ADDRESS}${bannerImage}`}
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute top-0 h-full w-full bg-[black] bg-opacity-50">
              <div className=" h-full flex justify-center items-center">
                <div className="w-[80%]">
                  <div className="flex justify-center items-center">
                    {/* {"REGULAR" === "REGULAR" && (
                      <video className="w-full" autoPlay loop muted>
                        <source
                          src={`${BACKEND_SERVER_ADDRESS}${featuredImage}`}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    )} */}
                    {/* {videoResolutionType === "MOBILE" && (
                      <video
                        className="w-[30%] rounded-[11%]"
                        autoPlay
                        loop
                        muted
                      >
                        <source
                          src={`${BACKEND_SERVER_ADDRESS}${featuredImage}`}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    )} */}

                    <FeaturedImageOrVideo url={featuredImage} />
                  </div>
                  <div className="mt-5 md:mt-10  text-[white] opacity-[0.7] md:text-lg">
                    {title}
                  </div>
                  <div className="mt-3 md:mt-4 uppercase text-[white] opacity-[0.7] text-xs md:text-sm">
                    {description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardOfProjectType1;
