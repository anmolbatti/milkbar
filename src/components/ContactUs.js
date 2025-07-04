import React from "react";
import { BACKEND_SERVER_ADDRESS } from "../data/variables/variables-1";
import { Link } from "react-router-dom";

function ContactUs({ project }) {
  const {
    contactUsImage,
    contactUsVideo
  } = project;
  if (project) {
    return (
      <div className="contact_us bg-black text-white">
        {contactUsVideo ? (
          <video
            // ref={videoRef}
            className="w-full h-full object-fit-cover "
            autoPlay
            loop
            muted
            >
            <source src={`${BACKEND_SERVER_ADDRESS}${contactUsVideo}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
                src={`${BACKEND_SERVER_ADDRESS}${contactUsImage}`}
                alt=""
                className="w-full h-[50rem] object-cover object-center"
              />
        )}
        <div className="absolute top-0 bottom-0 h-full w-full d-flex contact_us_block">
          <div className="mobile_display_head text-center">
            <h6 className="contact-header m-0">start your own <span>project</span></h6>
            <div className="text-center d-flex justify-content-center contact_link">
                <Link to="/contact" className="text-white font-12 text-uppercase font-messina letter-spacing-5 underline_link">CONTACT US</Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
export default ContactUs;
