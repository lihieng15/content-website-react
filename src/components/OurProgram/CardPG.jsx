import React from "react";
import { Link } from "react-router-dom";

const CardPG = () => {
  return (
    <div>
      <div className="w-96 h-96 mb-24">
        <div className="pb-4 mt-5  shadow-lg rounded-sm cursor-pointer ">
          <div className="flex justify-center items-center">
            <img
              className="w-auto h-auto rounded-sm "
              src="./src/assets/Cutelogo.jpg"
              alt="Logo"
            />
          </div>
          <div>
            <h2 className="mt-4 mb-2 font-bold hover:text-green-400 flex justify-center items-center">
              Chinese program
            </h2>
            <div className="flex justify-center items-center mt-4 mb-4">
              <button className="bg-green-500 text-white text-xl font-serif px-4 py-1.5 rounded-sm  text-center text-pretty hover:bg-yellow-400 hover:text-green-500">
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

export default CardPG;
