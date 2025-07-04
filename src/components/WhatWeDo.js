import { useEffect, useState } from "react";

function WhatWeDo({ project }) {
  const [whatWeDo, setWhatWeDo] = useState([]);

  useEffect(() => {
    if (project?.whatWeDo) {
      setWhatWeDo(project.whatWeDo);
    }
  }, [project]);

  if (project) {
    return (
      <div className="what_we_do position-relative">
        <div className="plr-100 text-center fw-200">
          <h6 className="text-uppercase m-0 text-base">What We Did</h6>
          <div className="dotdivider text-center">
            <span></span>
          </div>
          <ul className="whatwedo-list">
            {whatWeDo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default WhatWeDo;
