import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const SideBar = () => {
  return (
    <div className=" mt-10 shadow-xl rounded-xl border-l-8">
      {" "}
      <div className=" m-10 mt-5 border-t-2">
        <h3 className="  text-2xl font-semibold px-4">Latest News</h3>
        <div>
          <div className="my-5 border-b-2 border-spacing-2 px-4">
            <h4 className="font-medium mb-2">How are you</h4>
            <Link
              to="/"
              className="text-base pb-2 hover:text-green-400 inline-flex items-center py-1"
            >
              Read Now <FaArrowRight className="mt-1 ml-2" />
            </Link>
          </div>
        </div>
      </div>
      {/* popularblog*/}
      <div className=" m-10 mt-5">
        <h3 className="text-2xl font-semibold px-4 mt-10">Popular News</h3>
        <div>
          <div className="my-5 border-b-2 border-spacing-2 px-4">
            <h4 className="font-medium mb-2">I'm fine thanks </h4>
            <Link
              to="/"
              className="text-base pb-2 hover:text-green-400 inline-flex items-center py-1"
            >
              Read Now <FaArrowRight className="mt-1 ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <div className=" m-10 mt-5">
        <h3 className="text-2xl font-semibold px-4">All News</h3>
        <div>
          <div className="my-5 border-b-2 border-spacing-2 px-4">
            <h4 className="font-medium mb-2">And you </h4>
            <Link
              to="/"
              className="text-base pb-2 hover:text-green-400 inline-flex items-center py-1"
            >
              Read Now <FaArrowRight className="mt-1 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
