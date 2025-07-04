import React from "react";
import VerticleImage1 from '../assets/images/anthen-verticle-image1.jpg';
import VerticleImage2 from '../assets/images/anthen-verticle-image2.jpg';
import config from '../config';
function projectVerticle({bookings}){
    // if (!Array.isArray(bookings)  ) { 
    //     return (<div></div>);
    // }
    if(bookings.length > 0){
        return(
            <div className="bg-white pb-120">
                <div className="project_verticle_images d-grid"> 
                {bookings.length > 0 ? (
                                        bookings.map((booking, index) => ( // Map through the projects
                                                <div className="project_verticle_image position-relative">
                                                {booking.images && booking.images.length > 0 ? (
                                                    booking.images.map((image, index) => (
                                                        <div className="detail_img_item" key={index}>
                                                            <img src={`${config.BASE_URL}${image}`} alt={`Boking ${index}`} className="object-fit-cover" />
                                                            {/* <img src={`http://localhost:5000${image}`} alt={`Boking ${index}`} /> */}
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p>No images available.</p>
                                                )}  
                                                
                                                <div className="verticle_overlap_text position-absolute">
                                                <p className="font-messina">{booking.title}</p>
                                                </div>
                                                </div>
                                           
                                        ))
                                    ) : (
                                        <p></p>
                                    )}
                </div>
            </div>    
          );
    }else{
        return(
            <></>
            // <div className="bg-white pb-120">
            //     <div className="project_verticle_images d-grid">  
            //         <div className="project_verticle_image position-relative">  
            //             <img src={VerticleImage1} alt="Logo" className="object-fit-cover" />
            //             <div className="verticle_overlap_text position-absolute">
            //                 <p className="font-messina">A flawless mobile booking system</p>
            //             </div>
            //         </div>
            //         <div className="project_verticle_image position-relative">  
            //             <img src={VerticleImage2} alt="Logo" className="object-fit-cover" />
            //             <div className="verticle_overlap_text position-absolute">
            //                 <p className="font-messina">A flawless mobile booking system</p>
            //             </div>
            //         </div>         
            //     </div>
            // </div>    
          );
    }
   
}
export default projectVerticle; 