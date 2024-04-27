import React from "react";
import { Link } from "react-router-dom";
const CardsNews = () => {
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="mr-32 ml-32 grid rounded-lg md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <div className="p-5 shadow-2xl rounded-2xl cursor-pointer ">
            <img src="./src/assets/Cutelogo.jpg" alt="Logo" />
            <h2 className=" font-khmer mt-4 mb-2 font-bold  hover:text-green-400 flex justify-center items-center">
              <p>មជ្ឈមណ្ឌលអប់រំក្រុងព្រះសីហនុ នឹងបើកវគ្គវិញ្ញាបនបត្រ</p>
            </h2>
          </div>
          <div className=" flex justify-center items-center mt-10">
            <button className="bg-green-500 text-white text-xl font-serif p-2.5 rounded-2xl text-center text-pretty hover:bg-yellow-400 hover:text-green-500">
              <Link className="font-medium flex justify-center items-center">
                Read More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsNews;
