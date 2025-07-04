import React, { useEffect, useState } from "react";
import ProjectBanner from "../components/ProjectBanner";
import WhatWeDo from "../components/WhatWeDo";
import BrandDirection from "../components/BrandDirection";
import Gallery from "../components/HomeGallery";
import SeamlessBooking from "../components/SeamlessBooking";
import MobileDisplay from "../components/MobileDisplay";
import ContactUs from "../components/ContactUs";
import MoreProjectSlider from "../components/MoreProjectSlider";
import { useParams } from "react-router-dom";
import axios from "axios";
import config from "../config";
import SingleProjectGallery from "../components/SingleProjectGallery_old";
import FeaturedWorkSlider from "../components/FeaturedWorkSlider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BACKEND_SERVER_ADDRESS } from "../data/variables/variables-1";
import HeroSectionOfProjectDetailsPage from "../components/project/HeroSectionOfProjectDetailsPage";
import useBasic from "../hooks/useBasics/useBasics";

function App() {
  const isAdminRoute = window.location.pathname.startsWith("/admin");
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const screenSize = useBasic((state) => state.screenSize);
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch("/data/ProjectsList.json");
        if (!response.ok) {
          throw new Error("Failed to load projects data");
        }
        const data = await response.json();
        console.log("data",data)
        setProjects(data);
        const selectedProject = data.find((p) => p.id === id);
        if (selectedProject) {
          setProject(selectedProject);
        } else {
          setError("Project not found");
        }
      } catch (err) {
        setError("Failed to fetch project details");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* {!isAdminRoute && <Header />} */}
      {/* <ProjectBanner project={project} /> */}
      <div key={project.id}>
        <HeroSectionOfProjectDetailsPage project={project} />
        <WhatWeDo project={project} />
        <BrandDirection project={project} brandSection={project} />
        <SingleProjectGallery project={project} />
        <SeamlessBooking project={project} />
        <MobileDisplay project={project} />
        <ContactUs project={project} />
        <FeaturedWorkSlider projects={projects} title="MORE PROJECTS" isText={false} />
      </div>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
