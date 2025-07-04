import { create } from "zustand";

const initialValue = {
  title: "",
  description: "",
  whatWeDo: [],
  brandDirection: "",
  designIntro: "",
  designTitle: "",
  designDescription: "",
  changedBannerImageFieldName: "",
  changedFeatureImageFieldName: "",
  changedProjectLogoFieldName: "",
  srcOfRemovedGallaryImages: [],
  fieldNameOfAddedGalleryImages: [],
  srcOfRemovedMobileImages: [],
  fieldNameOfAddedMobileImages: [],
  srcOfRemovedDesktopImages: [],
  fieldNameOfAddedDesktopImages: [],
  srcOfRemovedImages: [],
  fieldNameOfAddedImages: [],
};
const useUpdateValue = create((set) => ({
  ...initialValue,
  setUpdatedValue: (newData) => {
    set((state) => {
      return { ...state, ...newData };
    });
  },
  resetState: () => {
    set((state) => {
      return {
        ...initialValue,
      };
    });
  },
}));

export default useUpdateValue;
