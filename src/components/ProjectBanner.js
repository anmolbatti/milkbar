import React from "react";
import BannerImage from '../assets/images/project-banner.jpg';
import BannerMobileImage from '../assets/images/project-banner-mobile.jpg';
import MesoLogo from '../assets/images/meso.svg';
import config from '../config';


function ProjectBanner({ project }) {
    // if (!Array.isArray(project)) {
    //     // console.error("Projects is not an array:", projects);
    //     return (<div></div>);
    // }
    console.log('myproject', project);
    if(project){
        return (
            <div className="main_home_banner page_banner project_banner position-relative">
                
                <picture>
                    <source media="(max-width: 645px)" srcSet={`${config.BASE_URL}${project?.bannerImage}`} />
                    <img src={`${config.BASE_URL}${project?.bannerImage}`} alt="Logo" />
                </picture>
    
                <div className="main_home_banner_content position-absolute w-100 h-100">
                    <div className="plr-100 h-100 d-flex align-items-center justify-content-center position-relative">
                        <div className="bannerbox">
                            <div className="home_banner_bottom text-light position-relative text-center">
                                <h1 className="text-white m-0 text-center">{project?.title}</h1>
                                <img src={MesoLogo} alt="Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else{
        return (
            <div className="main_home_banner page_banner project_banner position-relative">
                
                <picture>
                    <source media="(max-width: 645px)" srcSet={BannerMobileImage} />
                    <img src={BannerImage} alt="Logo" />
                </picture>
    
                <div className="main_home_banner_content position-absolute w-100 h-100">
                    <div className="plr-100 h-100 d-flex align-items-center justify-content-center position-relative">
                        <div className="bannerbox">
                            <div className="home_banner_bottom text-light position-relative text-center">
                                <h1 className="text-white m-0 text-center"></h1>
                                <img src={MesoLogo} alt="Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default ProjectBanner;
