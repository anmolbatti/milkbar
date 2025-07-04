import React, { useEffect, useRef } from "react";
import { BACKEND_SERVER_ADDRESS } from "../../data/variables/variables-1";

const VideoElement = (props) => {
  const { url } = props;

  const videoRef = useRef(null);

  const handleVideoSize = (e) => {
    const myVideoElement = e.currentTarget;
    if (myVideoElement) {
      const videoWidth = myVideoElement.videoWidth;
      const videoHeight = myVideoElement.videoHeight;
      if (videoHeight > videoWidth) {
        myVideoElement.style.width = "30%";
        myVideoElement.style.borderRadius = "10%";
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
      <video ref={videoRef} className="w-full" autoPlay loop muted>
        <source src={`${BACKEND_SERVER_ADDRESS}${url}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default VideoElement;
