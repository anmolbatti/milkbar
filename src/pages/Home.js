import React, { useState, useEffect } from "react";
import HomeBanner from "../components/HomeBanner";
import WhatWeDo from "../components/WhatWeDo";
import FeaturedWorkSlider from "../components/FeaturedWorkSlider";
// import ServicesSlider from '../components/ServicesSlider';
import ServiceTabsPanel from "../components/ServiceTabsPanel";

import ProjectGallery from "../components/ProjectGallery";

import Gallery from "../components/HomeGallery";
import FollowMilkbar from "../components/FollowMilkbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import config from "../config";
import SingleProjectGallery from "../components/SingleProjectGallery";
import ReviewSlider from "../components/ReviewSlider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BACKEND_SERVER_ADDRESS1 } from "../data/variables/variables-1";

function App() {
  const isAdminRoute = window.location.pathname.startsWith("/admin");
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
  }, [id]);

  return (
    <>
      <HomeBanner />
      {/* <WhatWeDo project={} /> */}
      <FeaturedWorkSlider projects={projects} title="Featured Work" isText={true} />
      <SingleProjectGallery projects={projects}/>

      {/* <ProjectGallery /> */}

      <ReviewSlider />
      {/* <ServicesSlider /> */}
      <ServiceTabsPanel />
      <FollowMilkbar />
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
