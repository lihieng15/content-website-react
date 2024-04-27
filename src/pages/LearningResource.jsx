import React from "react";
import Resource from "../components/LearningResource/Resource";
import Video from "../components/LearningResource/Video";

const LearningResource = () => {
  return (
    <div>
      <div className=" space-x-5 justify-evenly flex flex-col lg:flex-row gap-12 ">
        <div>
          <Resource />
        </div>
        <div>
          <Video />
        </div>
      </div>
    </div>
  );
};

export default LearningResource;
