import React from "react";
// import BannerImage from '../assets/images/social-media-bannernew.jpg';
// import BannerMobileImage from '../assets/images/social-media-banner-mobile.png';

// function SocialMediaBanner() {
//     return (
//         <div className="main_home_banner page_banner position-relative">
//             <picture>
//                 <source media="(max-width: 645px)" srcSet={BannerMobileImage} />
//                 <img src={BannerImage} alt="Logo" />
//             </picture>
//             <div className="main_home_banner_content position-absolute w-100 h-100">
//                 <div className="plr-100 h-100 d-flex align-items-center justify-content-center position-relative">
//                     <div className="bannerbox">
//                         <div className="home_banner_bottom text-light position-relative">
//                         <h1 className="text-white m-0 text-center fw-400">social media: <span className="fw-100">the art of the window display</span></h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

        
//     );
// }

// export default SocialMediaBanner;

const SingleProjectBanner = ({ BannerImage, BannerMobileImage, bannerHeading, bannerSubHeading }) => {
    return (
        <div className="main_home_banner page_banner position-relative">
            <picture>
                <source media="(max-width: 645px)" srcSet={BannerMobileImage} />
                <img src={BannerImage} alt="Logo" />
            </picture>
            <div className="main_home_banner_content position-absolute w-100 h-100">
                <div className="plr-100 h-100 d-flex align-items-center justify-content-center position-relative">
                    <div className="bannerbox">
                        <div className="home_banner_bottom text-light position-relative">
                            <h1 className="text-white m-0 text-center fw-400">
                                {bannerHeading} <span className="fw-100">{bannerSubHeading}</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProjectBanner;

