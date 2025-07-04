import { useEffect, useState } from "react";

function WhatWeDo({ project, content }) {
  const [whatwedo, setWhatwedo] = useState([]);

  useEffect(() => {
    const { whatWeDo } = project;

    setWhatwedo(whatWeDo);
  }, [project]);

  if (project) {
    return (
      <div className="what_we_do position-relative">
        <div className="plr-100 text-center fw-200">
          <h6 className="text-uppercase m-0">What We Doddddd</h6>
          <div className="dotdivider text-center">
            <span></span>
          </div>
          <ul className="whatwedo-list">
            {whatwedo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="what_we_do position-relative">
        <div className="plr-100 text-center fw-200">
          <h6 className="text-uppercase m-0">What We Do</h6>
          <div className="dotdivider text-center">
            <span></span>
          </div>
          {content ? (
            <ul className="whatwedo-list">
              {content.map((item, index) => (
                <li key={index}>{item.contentlist}</li>
              ))}
            </ul>
          ) : (
            <ul className="whatwedo-list">
              <li>branding & brand direction</li>
              <li>web and app design</li>
              <li>development</li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default WhatWeDo;
