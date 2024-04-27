import React from "react";

import { Link } from "react-router-dom";

const CardResource = () => {
  return (
    <div className="mr-5 ml-32 grid md:grid-row-3 sm:grid-row-2 grid-row-1 gap-8">
      <div>
        <div className="p-5 shadow-lg rounded-xl cursor-pointer flex justify-center items-center">
          <img
            className="w-auto h-48 rounded-xl"
            src="./src/assets/Cutelogo.jpg"
            alt="Logo"
          />
          <div>
            <h2 className="m-4 font-bold hover:text-green-400 flex justify-evenly items-center">
              Chinese content creator camp
            </h2>
            <div className=" flex justify-center m-4">
              <button className="bg-green-500 text-white text-xl font-serif p-2.5 rounded-2xl text-center text-pretty hover:bg-yellow-400 hover:text-green-500">
                <Link className="font-medium flex justify-center items-center">
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardResource;
