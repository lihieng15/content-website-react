import React from "react";
import CardMT from "./CardMT";
const ManagementTeam = () => {
  return (
    <div>
      <div
        className="mr-32 ml-32
       grid"
      >
        <div className="flex justify-center items-center md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
          <CardMT />
          <CardMT />
          <CardMT />
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam;
