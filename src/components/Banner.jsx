import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className=" bg-white-400 mx-auto">
      <div className="text-black text-center ">
        <div className="bg-green-400">
          <img
            src="./src/assets/Bannerimg.jpg"
            alt="bannerimg"
            className=" bg-coverh-40 h-[800px] w-full max-w-full"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
