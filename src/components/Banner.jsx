import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className=" bg-white-400 mx-auto">
      <div className="text-black text-center ">
        <div className="bg-green-400">
          <img src="./src/assets/Bannerimg.jpg" alt="bannerimg"></img>

          <Link
            to="/"
            className="font-medium hover:text-yellow-500 inline-flex text-2xl"
          >
            Learn More!
            <FaArrowRight className="mt-1 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
