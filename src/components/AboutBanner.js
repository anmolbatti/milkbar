import React, { useState, useEffect } from 'react';
import BannerImage from '../assets/images/about-banner.jpg';
import BannerMobileImage from '../assets/images/about-banner-mobile.jpg';

function AboutBanner() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <>
        <div className="main_about_banner page_banner inner_page_banner about_top_banner position-relative">
            <picture>
                <source media="(max-width: 645px)" srcSet={BannerMobileImage} />
                <img src={BannerImage} alt="Logo" />
            </picture>    
            <div className="main_home_banner_content position-absolute w-100 h-100 showonmobile">
                <div className="plr-100 h-100 d-flex align-items-center justify-content-center position-relative">
                    <div className="bannerbox">
                        <div className="home_banner_bottom text-light position-relative">
                            <h1 className="text-white m-0 text-center">why Milkbar</h1>
                        </div>
                    </div>
                </div>
            </div>        
        </div>        
        <div className="about_content position-relative">
            <div className="text-center">
                {isMobile ? (
                <h3 className="m-0">φιλότιμο</h3>
                ) : (
                <h3 className="m-0">why Milkbar</h3>
                )}                
                <div className="dotdivider big text-center"><span></span></div> 
                <p className="font-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        </>
    );
}

export default AboutBanner;
