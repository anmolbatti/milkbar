import React, { useEffect } from "react";

import useBasic from "../useBasics/useBasics";

const useStartup = () => {
  const setScreenSize = useBasic((state) => state.setScreenSize);
  const setScreenSizeHandler = () => {
    const screenWidth = window.innerWidth;
    setScreenSize(screenWidth);
  };
  useEffect(() => {
    setScreenSizeHandler();
    window.addEventListener("resize", setScreenSizeHandler);
    return () => {
      window.removeEventListener("resize", setScreenSizeHandler);
    };
  }, []);
  return null;
};

export default useStartup;
