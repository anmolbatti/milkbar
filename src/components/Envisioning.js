import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal'; 
// import BackgroundMobile from '../assets/images/envisioning-mobile.jpg';

import 'swiper/css';
    
function Envisioning({ socialBotmvideo, Background, envisioningTitle }){
    const [isMobileView, setIsMobileView] = useState(false);
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };
    useEffect(() => {
      handleResize(); 
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize); 
      };
    }, []);
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    console.log("isModalOpen: ", isModalOpen)
    
    return(
    // <div className="envisioning position-relative">      
    //     {isMobileView ? (
    //         <video width="100%" autoPlay muted loop>
    //             <source src={socialBotmvideo} type="video/mp4" />
    //         </video>
    //     ) : (
    //         <img src={Background} alt="Logo" />
    //     )}         
    //     <div className="envisioning_content position-absolute z-2 top-0 start-0 h-100 w-100 d-flex flex-column align-items-center justify-content-center plr-100 text-center">
    //         <h4>{envisioningTitle}</h4>
    //         <Link to='/contact' className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">Contact Us</Link>
    //     </div>       
    // </div>   
    <div className="envisioning position-relative dsf">      
      {isMobileView ? (
          <video 
              width="100%" 
              autoPlay 
              muted 
              loop 
              onClick={openModal}
          >
              <source src={socialBotmvideo} type="video/mp4" />
          </video>
      ) : (
          <img src={Background} alt="Logo" />
      )}
      <div className="envisioning_content position-absolute z-2 top-0 start-0 h-100 w-100 d-flex flex-column align-items-center justify-content-center plr-100 text-center">
          <h4>{envisioningTitle}</h4>
          <Link to='/contact' className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">Contact Us</Link>
      </div> 

      <Modal 
          isOpen={isModalOpen} 
          onRequestClose={closeModal} 
          className="modal" // Add your modal styles here
          overlayClassName="overlay" // Add your overlay styles here
      >
          <div className="modal-content position-relative">
              <video width="100%" autoPlay 
              muted 
              loop >
                  <source src={socialBotmvideo} type="video/mp4" />
              </video>
              <a onClick={closeModal} className="close-modall position-absolute">X</a>
          </div>
      </Modal>
    </div> 
  );
}
export default Envisioning; 
