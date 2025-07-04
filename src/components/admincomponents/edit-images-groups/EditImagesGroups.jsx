import React, { useEffect, useState } from "react";
import { BACKEND_SERVER_ADDRESS } from "../../../data/variables/variables-1";
import useUpdateValue from "../../../hooks/update-project/useUpdateValue";

const EditImagesGroups = (props) => {
  const updateValue = useUpdateValue((state) => state);
  const setUpdatedValue = useUpdateValue((state) => state.setUpdatedValue);
  const { project, title, name } = props;
  const [myImages, setMyImages] = useState([]);

  const handleRemoveImage = (image) => {
    const newImagesData = myImages.filter((data) => data !== image);
    setMyImages(newImagesData);
    if (name.toLowerCase().includes("gallery")) {
      const oldValues = updateValue.srcOfRemovedGallaryImages;
      const newValues = [...oldValues, image];
      setUpdatedValue({ srcOfRemovedGallaryImages: newValues });
    } else if (name.toLowerCase().includes("desktop")) {
      const oldValues = updateValue.srcOfRemovedDesktopImages;
      const newValues = [...oldValues, image];
      setUpdatedValue({ srcOfRemovedDesktopImages: newValues });
    } else if (name.toLowerCase().includes("mobile")) {
      const oldValues = updateValue.srcOfRemovedMobileImages;
      const newValues = [...oldValues, image];
      setUpdatedValue({ srcOfRemovedMobileImages: newValues });
    }
  };

  const handleAddImage = () => {
    const imagesBox = document.getElementsByClassName(
      `images-box-of-edit-images-${name}`
    )[0];
    const myName = name + Math.floor(Math.random() * 10000);
    const inputCode = `<div className="bg-[black] flex justify-center items-center px-5 w-[9rem]">
   <div>
     <input required type="file" name=${myName}  className="max-w-[8rem]" />
   </div>
 </div>`;
    imagesBox.insertAdjacentHTML("beforeend", inputCode);
    if (name.toLowerCase().includes("gallery")) {
      const fieldNameOfAddedGalleryImages =
        updateValue.fieldNameOfAddedGalleryImages;

      const newUpdatedValue = [...fieldNameOfAddedGalleryImages, myName];
      setUpdatedValue({ fieldNameOfAddedGalleryImages: newUpdatedValue });
    } else if (name.toLowerCase().includes("desktop")) {
      const fieldNameOfAddedDesktopImages =
        updateValue.fieldNameOfAddedDesktopImages;
      const newUpdatedValue = [...fieldNameOfAddedDesktopImages, myName];
      setUpdatedValue({ fieldNameOfAddedDesktopImages: newUpdatedValue });
    } else if (name.toLowerCase().includes("mobile")) {
      const fieldNameOfAddedMobileImages =
        updateValue.fieldNameOfAddedMobileImages;
      const newUpdatedValue = [...fieldNameOfAddedMobileImages, myName];
      setUpdatedValue({ fieldNameOfAddedMobileImages: newUpdatedValue });
    }
  };

  const initializeGalleryImage = () => {
    if (name) {
      const images_ = project[name];
      setMyImages(images_);
    }
  };

  useEffect(() => {
    initializeGalleryImage();
  }, [project, name]);
  return (
    <div>
      <div className="text-[white] font-bold">{title}</div>
      <div className="detail_item_inner gallery_inner mt-5 rounded-md">
        <div
          className={`flex  flex-wrap gap-5 images-box-of-edit-images-${name}`}
        >
          {myImages?.map((image, index) => (
            <div className=" w-[10%]" key={index}>
              <div className="detail_img_item">
                <img
                  src={`${BACKEND_SERVER_ADDRESS}${image}`}
                  alt={`Project ${index}`}
                  name={name + index}
                />
              </div>
              <button
                className="remove_btn"
                type="button"
                onClick={() => handleRemoveImage(image)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <button
          onClick={handleAddImage}
          type="button"
          className="bg-[black] text-sm w-[100%] py-3 rounded-md"
        >
          Add Image
        </button>
      </div>
    </div>
  );
};

export default EditImagesGroups;
