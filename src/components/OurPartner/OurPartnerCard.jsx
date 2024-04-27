import React from "react";
import { Link } from "react-router-dom";

const OurPartnerCard = () => {
  return (
    <div className=" bg-white-400 mx-auto ">
      <div className="bg-green-300">
        <div className=" flex items-center justify-center">
          <img
            className="w-full h-48 ml-96 mr-96"
            src="./src/assets/partner.png"
            alt="bannerimg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default OurPartnerCard;
