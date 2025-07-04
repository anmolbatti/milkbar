// import React, { useEffect, useState } from "react";
// import FeaturedImage from "../featured/FeaturedImage";

// const MediaConverter = (props) => {
//   const { mediaSrc, isFromBackend } = props;
//   const [mediaStatus, setMediaStatus] = useState("");
//   const checkingMediaHandler = () => {
//     if (featuredImage) {
//       const extension = featuredImage.split(".").pop();
//       const videoExtensions = [
//         "mp4",
//         "3gp",
//         "avi",
//         "mkv",
//         "webm",
//         "mov",
//         "flv",
//         "wmv",
//         "mpeg",
//         "mpg",
//         "m4v",
//       ];
//       const imageExtensions = [
//         "jpg",
//         "jfif",
//         "avif",
//         "jpeg",
//         "svg",
//         "png",
//         "ico",
//         "gif",
//         "bmp",
//         "webp",
//         "tiff",
//         "heic",
//       ];

//       if (videoExtensions.includes(extension)) {
//         setMediaStatus("VIDEO");
//       } else if (imageExtensions.includes(extension)) {
//         setMediaStatus("IMAGE");
//       }
//     }
//   };
//   useEffect(() => {
//     checkingMediaHandler();
//   }, [featuredImage]);

//   return (
//     <>
//       {mediaStatus === "IMAGE" && <FeaturedImage url={video} />}
//       {mediaStatus === "VIDEO" && <FeaturedVideo url={featuredImage} />}
//     </>
//   );
// };

// export default FeaturedMedia;
