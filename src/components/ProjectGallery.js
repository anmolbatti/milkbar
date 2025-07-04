import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import config from '../config';

const ProjectGallery = () => {
    const [ projects, setProjects ] = useState([]);
    const [ activeTab, setActiveTab ] = useState();
    const [ activeProject, setActiveProject ] = useState();
    const [ isPopupOpen, setIsPopupOpen ] = useState(false);

    const fetchProjectDetails = async () => {
        try {
          const response = await axios.get(
            `${config?.BASE_URL}/api/admin/get-tab-projects/`
          );
          setProjects(response.data);
        } catch (err) {
          console.log("Failed to fetch projects");
        } 
    };

    const handleProjectClick = (project) => {
        setActiveProject(project);
        setIsPopupOpen(true);
    }

    const renderProjects = () => {
        const activeProjects = projects.find(item => item?.title === activeTab)?.projects || [];
    
        return activeProjects.map((project, index) => {
            const itemClass = index % 2 === 0 ? "even" : "odd";
            return (
                <div key={project._id} className={`project-gallery-item ${itemClass}`} onClick={() => handleProjectClick(project)}>
                    <div className="image-block">
                        <img width="" height="" src={config?.BASE_URL + project?.featuredImage} alt="" />
                        {project?.video && (
                            <video autoPlay muted loop playsInline>
                                <source src={config?.BASE_URL + project?.video} type="video/mp4" />
                            </video>
                        )}
                    </div>
                    <div className="summary-block">
                        <h3>{project?.title}</h3>
                        <p>{project?.description}</p>
                    </div>
                </div>
            );
        });
    };

    useEffect(() => {
        fetchProjectDetails();
    }, []);

    useEffect(() => {
        if(projects.length > 0){
            setActiveTab(projects[0]?.title);
        }
    }, [projects]);

  return (
    <div className="project-gallery">
        <div className="project-gallery-wrapper">

            <div className="project-gallery-title center pb-30">
                <h2>a look at recent projects</h2>
                <p>click to expand each</p>
            </div>            
            <div className="project-gallery-tab-nav">
                <ul>
                    {projects?.map((item, key) => (
                        <li onClick={() => setActiveTab(item?.title)}><span className={activeTab === item?.title ? "active" : ""}>{item?.title}</span></li>
                    ))}
                </ul>
            </div>
            <div className="project-gallery-tab-panel-wrapper">                
                <div className="project-gallery-tab-panel">
                    <div className="project-gallery-items">
                        {renderProjects()}
                    </div>
                </div>
            </div>
            {isPopupOpen && (
                <div className={`project-gallery-popup ${isPopupOpen ? "active" : ""}`}>
                    <div className="project-gallery-popup-wrapper">
                        <div className="project-gallery-popup-header">
                            <div className="summary-block">
                                <h2>{activeProject?.title}</h2>
                                <p>{activeProject?.description}</p>
                            </div>
                            <div className="button-block">
                                <button className="quote-button"><Link to="/contact">Get A Quote</Link></button>
                                <button className="close-button" onClick={() => setIsPopupOpen(false)}>X</button>
                            </div>
                        </div>
                        <div className="project-gallery-popup-slider">
                            <Swiper                                        
                                spaceBetween={20}
                                slidesPerView={2.5}
                                loop={true}
                                centeredSlides={true}
                                breakpoints={{
                                    300: {
                                        slidesPerView: 2.5,
                                        spaceBetween: 20                                        
                                    },
                                    576: {
                                        slidesPerView: 4.5,
                                        spaceBetween: 40
                                    },
                                    1025: {
                                        slidesPerView: 4.1,
                                        spaceBetween: 50
                                    },
                                    1120: {
                                        slidesPerView: 5.1,
                                        spaceBetween: 50
                                    },
                                    1367: {
                                        slidesPerView: 5.8,
                                        spaceBetween: 60
                                    }, 
                                }}
                            >          

                                {activeProject?.images?.length > 0 && activeProject?.images.map((item, key) => (
                                    <SwiperSlide>
                                        <div className="project-gallery-popup-slide">                                            
                                            <img className="phone-image" width="" height="" src={config?.BASE_URL + item} alt="" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default ProjectGallery
