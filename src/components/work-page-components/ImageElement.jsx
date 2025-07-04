import { useEffect, useRef, useState } from "react";
import { BACKEND_SERVER_ADDRESS } from "../../data/variables/variables-1";
import axios from "axios";

const ImageElement = (props) => {
  const [image, setImage] = useState(null);
  const imageRef = useRef(null);

  const { url } = props;

  const fetchImage = async () => {
    try {
      const extension = url.split(".").pop();
      if (extension === "jfif") {
        const response = await axios.get(`${BACKEND_SERVER_ADDRESS}${url}`, {
          responseType: "blob", // Ensure response is blob format
        });
        const imageBlob = new Blob([response.data], { type: "image/jpeg" });
        const imageUrl = URL.createObjectURL(imageBlob);
        setImage(imageUrl);
      } else {
        const imageAddress = `${BACKEND_SERVER_ADDRESS}${url}`;
        setImage(imageAddress);
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };
  const checkImageSize = () => {
    const myImage = imageRef.current;
    if (myImage) {
      const width = myImage.naturalWidth;
      const height = myImage.naturalHeight;

      // console.log(width, height);
      // const isMobile = height * 0.3 + height < width;

      if (height > width) {
        myImage.style.width = "50%";
      }
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);
  useEffect(() => {
    const myImage = imageRef.current;
    myImage.addEventListener("load", checkImageSize);
    return () => {
      myImage.removeEventListener("load", checkImageSize);
    };
  }, [image]);
  return (
    <>
      <img src={image} ref={imageRef} />
    </>
  );
};

export default ImageElement;
