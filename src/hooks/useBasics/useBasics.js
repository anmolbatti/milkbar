import { create } from "zustand";

const initialState = {
  screenSize: "SMALL_SCREEN",
  modalStatus: "CLOSED",
  idOfItemSelectedToBeDeleted: "",
};
const useBasic = create((set) => ({
  ...initialState,
  setScreenSize: (screenWidth) => {
    let myScreenSize;
    if (screenWidth < 768) {
      myScreenSize = "SMALL_SCREEN";
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      myScreenSize = "MEDIUM_SCREEN";
    } else if (screenWidth >= 1024) {
      myScreenSize = "LARGE_SCREEN";
    }
    set((state) => ({
      ...state,
      screenSize: myScreenSize,
    }));
  },
  openModal: () => {
    set((state) => ({
      ...state,
      modalStatus: "OPENED",
    }));
  },
  closeModal: () => {
    set((state) => ({
      ...state,
      modalStatus: "CLOSED",
    }));
  },
  setIdOfItemSelectedToBeDeleted: (id) => {
    set((state) => ({
      ...state,
      idOfItemSelectedToBeDeleted: id,
    }));
  },
}));

export default useBasic;
