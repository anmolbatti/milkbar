import React from "react";
import { BACKEND_SERVER_ADDRESS } from "../data/variables/variables-1";
import BrandLogo from "../assets/images/meso.svg";

function brandDirection({ project, brandSection }) {
  const { projectLogo } = project;
  return (
    <>
      <div className="brand_direction position-relative">
        <div className="text-center fw-200">
          <p className="font-messina">{project?.brandDirection}</p>
        </div>
      </div>
    </>
  );
}
export default brandDirection;
