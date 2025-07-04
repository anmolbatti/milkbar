import React from "react";
import SliderItem1 from "../assets/images/work-1.jpg";
import SliderItem2 from "../assets/images/work-2.png";
import SliderItem3 from "../assets/images/work-3.jpg";
import WorkSlideLogo1 from "../assets/images/work-slide-logo1.svg";
import Video2 from "../assets/videos/single-projectslider-video2.mp4";
import { Link } from "react-router-dom";
import config from "../config";

function ProjectList({ projects }) {
  if (!Array.isArray(projects)) {
    // console.error("Projects is not an array:", projects);
    return <div></div>;
  }

  const isLarge = (index) => {
    if (index % 2 === 0) {
      return index % 4 === 0 ? "large-cover-content" : "small-cover-content";
    } else {
      return index % 4 === 1 ? "small-cover-content" : "large-cover-content";
    }
  };

  if (projects.length > 0) {
    return (
      <div className="project_list_outer position-relative z-1 ptb-120">
        <div className="project_list_wrapper position-relative">
          {projects.map((project, index) => (
            <div
              className={`object-fit-cover common_work_slide position-relative project_list_box ${isLarge(
                index
              )}`}
            >
              {project.featuredImage &&
                (project.featuredImage.endsWith(".mp4") ? (
                  <video autoPlay muted loop playsInline>
                    <source
                      src={`${config.BASE_URL}${project.featuredImage}`}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <img
                    src={`${config.BASE_URL}${project.featuredImage}`}
                    alt="Featured"
                  />
                ))}
              {/* <img src={SliderItem1} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" /> */}
              <div className="common_work_slide_text position-absolute w-100 h-100">
                <div className="workbox_head">
                  <h2>{project.title}</h2>
                  <p>{project.whatWeDo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="project_list_outer position-relative z-1 ptb-120">
        <div className="project_list_wrapper position-relative plr-100">
          <div>
            <div className="common_work_slide  position-relative">
              <img
                src={SliderItem1}
                alt="Image"
                className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover"
              />
              <div className="common_work_slide_text position-absolute w-100 h-100">
                <div className="workbox_head">
                  <h2>croatia’s new yachting hotspot</h2>
                  <p className="font-messina text-uppercase">
                    Hospitality · Brand Direction · Physical Design
                  </p>
                </div>
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="showdefault"
                >
                  <circle
                    cx="22.5"
                    cy="22.5"
                    r="22.25"
                    stroke="white"
                    stroke-opacity="0.5"
                    stroke-width="0.5"
                  />
                  <circle
                    cx="22.5"
                    cy="22.5"
                    r="11.25"
                    fill="white"
                    fill-opacity="0.1"
                  />
                  <circle
                    cx="22.5"
                    cy="22.5"
                    r="11"
                    stroke="white"
                    stroke-opacity="0.5"
                    stroke-width="0.5"
                  />
                </svg>

                <div className="work_slide_hover_content position-absolute">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="showonhover"
                  >
                    <circle
                      cx="22.5"
                      cy="22.5"
                      r="22.25"
                      stroke="white"
                      stroke-opacity="0.5"
                      stroke-width="0.5"
                    />
                    <circle
                      cx="22.5"
                      cy="22.5"
                      r="11.25"
                      fill="white"
                      fill-opacity="0.1"
                    />
                    <circle
                      cx="22.5"
                      cy="22.5"
                      r="11"
                      stroke="white"
                      stroke-opacity="0.5"
                      stroke-width="0.5"
                    />
                  </svg>
                  <img src={WorkSlideLogo1} alt="Image" />
                </div>
                <div className="text-center d-flex justify-content-center project_link">
                  <Link
                    to="/project"
                    className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
                        <div className="common_work_slide  position-relative">
                            <img src={SliderItem2} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                            <div className="common_work_slide_text position-absolute w-100 h-100 h-100">
                                <div className="workbox_head">
                                <h2>dubai-based architecture</h2>
                                <p className="font-messina text-uppercase">PROPERTY · BRAND DIRECTION · DEVELOPMENT</p> 
                                </div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
        
                                <div className="work_slide_hover_content position-absolute">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                    <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                    <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    </svg>
                                    <img src={WorkSlideLogo1} alt="Image" />                                
                                </div>
                                <div className="text-center d-flex justify-content-center project_link">
                                    <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="common_work_slide  position-relative">
                            <img src={SliderItem3} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                            <div className="common_work_slide_text position-absolute w-100 h-100 h-100">
                                <div className="workbox_head">
                                <h2>athens-based yachting</h2>
                                <p className="font-messina text-uppercase">YACHTING · BRAND DIRECTION · DEVELOPMENT</p> 
                                </div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
        
                                <div className="work_slide_hover_content position-absolute">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                    <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                    <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    </svg>
                                    <img src={WorkSlideLogo1} alt="Image" />                                
                                </div>
                                <div className="text-center d-flex justify-content-center project_link">
                                    <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="common_work_slide  position-relative">
                            <img src={SliderItem1} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                            <div className="common_work_slide_text position-absolute w-100 h-100">
                                <div className="workbox_head">
                                <h2>croatia’s new yachting hotspot</h2>
                                <p className="font-messina text-uppercase">Hospitality · Brand Direction · Physical Design</p> 
                                </div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
        
                                <div className="work_slide_hover_content position-absolute">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                    <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                    <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    </svg>
                                    <img src={WorkSlideLogo1} alt="Image" />                                
                                </div>
                                <div className="text-center d-flex justify-content-center project_link">
                                    <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="common_work_slide  position-relative">
                            <img src={SliderItem2} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                            <div className="common_work_slide_text position-absolute w-100 h-100 h-100">
                                <div className="workbox_head">
                                <h2>dubai-based architecture</h2>
                                <p className="font-messina text-uppercase">PROPERTY · BRAND DIRECTION · DEVELOPMENT</p> 
                                </div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
        
                                <div className="work_slide_hover_content position-absolute">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                    <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                    <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    </svg>
                                    <img src={WorkSlideLogo1} alt="Image" />                                
                                </div>
                                <div className="text-center d-flex justify-content-center project_link">
                                    <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="common_work_slide  position-relative">
                            <img src={SliderItem3} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                            <div className="common_work_slide_text position-absolute w-100 h-100 h-100">
                                <div className="workbox_head">
                                <h2>athens-based yachting</h2>
                                <p className="font-messina text-uppercase">YACHTING · BRAND DIRECTION · DEVELOPMENT</p> 
                                </div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
        
                                <div className="work_slide_hover_content position-absolute">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                    <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                    <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    </svg>
                                    <img src={WorkSlideLogo1} alt="Image" />                                
                                </div>
                                <div className="text-center d-flex justify-content-center project_link">
                                    <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="common_work_slide  position-relative">
                            <img src={SliderItem1} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                            <div className="common_work_slide_text position-absolute w-100 h-100">
                                <div className="workbox_head">
                                <h2>croatia’s new yachting hotspot</h2>
                                <p className="font-messina text-uppercase">Hospitality · Brand Direction · Physical Design</p> 
                                </div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
        
                                <div className="work_slide_hover_content position-absolute">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                    <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                    <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    </svg>
                                    <img src={WorkSlideLogo1} alt="Image" />                                
                                </div>
                                <div className="text-center d-flex justify-content-center project_link">
                                    <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="common_work_slide  position-relative">
                            <img src={SliderItem2} alt="Image" className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" />
                            <div className="common_work_slide_text position-absolute w-100 h-100 h-100">
                                <div className="workbox_head">
                                <h2>dubai-based architecture</h2>
                                <p className="font-messina text-uppercase">PROPERTY · BRAND DIRECTION · DEVELOPMENT</p> 
                                </div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showdefault">
                                <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                </svg>
        
                                <div className="work_slide_hover_content position-absolute">
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="showonhover">
                                    <circle cx="22.5" cy="22.5" r="22.25" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    <circle cx="22.5" cy="22.5" r="11.25" fill="white" fill-opacity="0.1"/>
                                    <circle cx="22.5" cy="22.5" r="11" stroke="white" stroke-opacity="0.5" stroke-width="0.5"/>
                                    </svg>
                                    <img src={WorkSlideLogo1} alt="Image" />                                
                                </div>
                                <div className="text-center d-flex justify-content-center project_link">
                                    <Link to="/project" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>
    );
  }
}
export default ProjectList;
