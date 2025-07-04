import axios from "axios";
import React, { useEffect, useState } from "react";
import { GET_EVERY_PROJECT_DATA_API_ADDRESS } from "../../data/variables/variables-1";

const useProjectSectionCustomHook = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    axios
      .get(GET_EVERY_PROJECT_DATA_API_ADDRESS)
      .then((response) => {
        const { data } = response;

        setProjectsData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { projectsData };
};

export default useProjectSectionCustomHook;
