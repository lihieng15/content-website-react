import React from "react";

import { Link } from "react-router-dom";
const CardMT = () => {
  return (
    <div className="flex justify-evenly">
      <div className="w-64 h-96">
        <div className="p-5 mt-5  shadow-lg rounded-xl cursor-pointer ">
          <div className="flex justify-center items-center">
            <img
              className="w-auto h-48 rounded-lg"
              src="./src/assets/Cutelogo.jpg"
              alt="Logo"
            />
          </div>
          <div>
            <h2 className="mt-4 mb-2 font-bold hover:text-green-400 flex justify-center items-center">
              Chinese Course
            </h2>
            <div className="flex justify-center items-center mt-4 mb-4">
              <button className="bg-green-500 text-white text-xl font-serif p-2.5  rounded-2xl text-center text-pretty hover:bg-yellow-400 hover:text-green-500">
                <Link className="font-medium flex justify-center items-center">
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-64 h-96">
        <div className="p-5 mt-5  shadow-lg rounded-xl cursor-pointer ">
          <div className="flex justify-center items-center">
            <img
              className="w-auto h-48 rounded-lg"
              src="./src/assets/Cutelogo.jpg"
              alt="Logo"
            />
          </div>
          <div>
            <h2 className="mt-4 mb-2 font-bold hover:text-green-400 flex justify-center items-center">
              Chinese Course
            </h2>
            <div className="flex justify-center items-center mt-4 mb-4">
              <button className="bg-green-500 text-white text-xl font-serif p-2.5  rounded-2xl text-center text-pretty hover:bg-yellow-400 hover:text-green-500">
                <Link className="font-medium flex justify-center items-center">
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-64 h-96">
        <div className="p-5 mt-5  shadow-lg rounded-xl cursor-pointer ">
          <div className="flex justify-center items-center">
            <img
              className="w-auto h-48 rounded-lg"
              src="./src/assets/Cutelogo.jpg"
              alt="Logo"
            />
          </div>
          <div>
            <h2 className="mt-4 mb-2 font-bold hover:text-green-400 flex justify-center items-center">
              Chinese Course
            </h2>
            <div className="flex justify-center items-center mt-4 mb-4">
              <button className="bg-green-500 text-white text-xl font-serif p-2.5  rounded-2xl text-center text-pretty hover:bg-yellow-400 hover:text-green-500">
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

export default CardMT;
