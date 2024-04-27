import React from "react";
import { Link } from "react-router-dom";
const Video = () => {
  return (
    <div>
      <div>
        <div className="p-5 shadow-lg rounded-xl cursor-pointer">
          <img
            className="rounded-xl mt-5"
            src="./src/assets/Cutelogo.jpg"
            alt="Logo"
          />
        </div>
        <h2 className="mt-4 mb-2 font-bold hover:text-green-400 flex justify-center items-center">
          Chinese Course
        </h2>
        <div className=" flex justify-center items-center mt-4 mb-10">
          <button className="bg-green-500 text-white text-xl font-serif p-2.5 rounded-2xl text-center text-pretty hover:bg-yellow-400 hover:text-green-500">
            <Link className="font-medium flex justify-center items-center">
              Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
