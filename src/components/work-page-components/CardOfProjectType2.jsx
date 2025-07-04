import React from "react";
import FeaturedImageOrVideo from "./FeaturedImageOrVideo";
import { BACKEND_SERVER_ADDRESS } from "../../data/variables/variables-1";

const CardOfProjectType2 = (props) => {
  const { data } = props;
  const {
    name,
    category,
    videoSrc,
    backgroundImageSrc,
    id,
    videoResolutionType,
  } = data;

  const { bannerImage, featuredImage, title, description } = data;

  return (
    <>
      <div>
        <div className="h-[15rem] sm:h-[20rem] lg:h-[25rem]  relative overflow-hidden rounded">
          <div className="h-full transition-all duration-700 hover:scale-[1.05] cursor-pointer">
            <img
              src={`${BACKEND_SERVER_ADDRESS}${bannerImage}`}
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute top-0 h-full w-full bg-[black] bg-opacity-60">
              <div className=" h-full flex justify-center items-center">
                <div className="w-[80%]">
                  <div className="flex justify-center items-center">
                    <FeaturedImageOrVideo url={featuredImage} />
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="px-3">
          <div className="mt-5 md:mt-10  text-[white] opacity-[0.7] md:text-lg">
            {title}
          </div>
          <div className="mt-3 md:mt-4 uppercase text-[white] opacity-[0.7] text-xs md:text-sm">
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardOfProjectType2;
