import React, { useEffect, useState } from "react";
import VideoElement from "./VideoElement";
import ImageElement from "./ImageElement";

const FeaturedImageOrVideo = (props) => {
  const { url } = props;
  const [mediaStatus, setMediaStatus] = useState("");
  const checkingMediaHandler = () => {
    if (url) {
      const extension = url.split(".").pop();
      const videoExtensions = [
        "mp4",
        "3gp",
        "avi",
        "mkv",
        "webm",
        "mov",
        "flv",
        "wmv",
        "mpeg",
        "mpg",
        "m4v",
      ];
      const imageExtensions = [
        "jpg",
        "jfif",
        "avif",
        "jpeg",
        "svg",
        "png",
        "ico",
        "gif",
        "bmp",
        "webp",
        "tiff",
        "heic",
      ];

      if (videoExtensions.includes(extension)) {
        setMediaStatus("VIDEO");
      } else if (imageExtensions.includes(extension)) {
        setMediaStatus("IMAGE");
      }
    }
  };
  useEffect(() => {
    checkingMediaHandler();
  }, []);

  return (
    <>
      {mediaStatus === "VIDEO" && <VideoElement url={url} />}
      {mediaStatus === "IMAGE" && <ImageElement url={url} />}
    </>
  );
};

export default FeaturedImageOrVideo;
