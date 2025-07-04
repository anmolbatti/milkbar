import React, { useEffect, useRef } from "react";
import { BACKEND_SERVER_ADDRESS } from "../../data/variables/variables-1";

const FeaturedVideo = (props) => {
  const { url } = props;

  const videoRef = useRef(null);

  const handleVideoSize = (e) => {
    const myVideoElement = e.currentTarget;
    if (myVideoElement) {
      const videoWidth = myVideoElement.videoWidth;
      const videoHeight = myVideoElement.videoHeight;
      if (videoHeight > videoWidth) {
        myVideoElement.style.width = "100%";
        myVideoElement.style.borderRadius = "0%";
      }
    }
  };
  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener("loadedmetadata", handleVideoSize);
    return () => {
      video.removeEventListener("loadedmetadata", handleVideoSize);
    };
  }, []);
  return (
    <>
     <video autoPlay muted loop playsInline controls={false}  ref={videoRef} className="w-full h-full object-fit-cover "  >
        <source src={`${BACKEND_SERVER_ADDRESS}${url}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default FeaturedVideo;
