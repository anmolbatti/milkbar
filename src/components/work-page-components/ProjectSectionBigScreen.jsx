import React from "react";
import CardOfProjectType1 from "./CardOfProjectType1";
import CardOfProjectType2 from "./CardOfProjectType2";

const ProjectSectionBigScreen = (props) => {
  const { projectsData } = props;

  return (
    <>
      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-10 md:gap-20 lg:gap-32">
          {projectsData.map((prop, index) => {
            const shouldTextBeInsideBox =
              index === 0 ||
              index === 3 ||
              index === 4 ||
              index === 7 ||
              index === 8 ||
              index === 11;
            let codeToReturn;
            if (shouldTextBeInsideBox) {
              codeToReturn = (
                <CardOfProjectType1 key={Math.random()} data={prop} />
              );
            } else {
              codeToReturn = (
                <CardOfProjectType2 key={Math.random()} data={prop} />
              );
            }
            return codeToReturn;
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectSectionBigScreen;
