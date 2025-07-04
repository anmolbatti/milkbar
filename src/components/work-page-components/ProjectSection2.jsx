import React from "react";
import ProjectSectionSmallScreen from "./ProjectSectionSmallScreen";
import ProjectSectionBigScreen from "./ProjectSectionBigScreen";
import useProjectSectionCustomHook from "../../hooks/project-section-in-work-page/useProjectSectionCustomHook";

const ProjectSection2 = () => {
  const data = [
    {
      name: "London-based luxury travel concierge",
      category: "HOSPITALITY-BRAND DIRECTION",
      videoSrc: "/videos/boat.mp4",
      videoResolutionType: "REGULAR",
      backgroundImageSrc: "/images/landing-page/ocean.jpg",
      id: Math.random(),
    },
    {
      name: "London-based luxury travel concierge",
      category: "HOSPITALITY-BRAND DIRECTION",
      videoSrc: "/videos/house.mp4",
      videoResolutionType: "REGULAR",
      backgroundImageSrc: "/images/landing-page/house-2.jpg",
      id: Math.random(),
    },
    {
      name: "London-based luxury travel concierge",
      category: "HOSPITALITY-BRAND DIRECTION",
      videoSrc: "/videos/mobile.mp4",
      videoResolutionType: "MOBILE",
      backgroundImageSrc: "/images/landing-page/inside-house.jpg",
      id: Math.random(),
    },
    {
      name: "London-based luxury travel concierge",
      category: "HOSPITALITY-BRAND DIRECTION",
      videoSrc: "/videos/boat.mp4",
      videoResolutionType: "REGULAR",
      backgroundImageSrc: "/images/landing-page/ocean.jpg",
      id: Math.random(),
    },
    {
      name: "London-based luxury travel concierge",
      category: "HOSPITALITY-BRAND DIRECTION",
      videoSrc: "/videos/house.mp4",
      videoResolutionType: "REGULAR",
      backgroundImageSrc: "/images/landing-page/house-2.jpg",
      id: Math.random(),
    },
    {
      name: "London-based luxury travel concierge",
      category: "HOSPITALITY-BRAND DIRECTION",
      videoSrc: "/videos/mobile.mp4",
      videoResolutionType: "MOBILE",
      backgroundImageSrc: "/images/landing-page/inside-house.jpg",
      id: Math.random(),
    },
  ];
  const { projectsData } = useProjectSectionCustomHook();

  return (
    <section>
      <div className="pt-10 md:pt-32 lg:pt-[13rem] flex justify-center items-center bg-[#131313] px-5">
        <div className="max-w-screen-xl w-full  py-10 ">
          <ProjectSectionSmallScreen projectsData={projectsData} />
          <ProjectSectionBigScreen projectsData={projectsData} />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection2;
