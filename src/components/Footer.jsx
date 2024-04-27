import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-light-green-600 to-yellow-500">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="grid mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-3">
            <div className="">
              <div className=" rounded-lg w-auto hb-16  ">
                <img
                  className=" align-middle w-fit h-18 mb-10"
                  src="./src/assets/LogoSchool.png"
                  alt="Logo"
                />
                <p className="text-gray-700 text-md">
                  <span className=" text-black text-lg">
                    SouthWest International School
                  </span>
                  <span> </span>awakens the enormous potential in every child to
                  have a positive impact on their world.
                </p>
              </div>
            </div>
            {/* category 2*/}

            {/* category 3*/}
            <div className="ml-24">
              <p className="text-xl font-medium tracking-wide text-gray-700">
                Cherry
              </p>
              <ul className=" mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition-colors duration-300 hover:text-yellow-300"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition-colors duration-300 hover:text-yellow-300"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition-colors duration-300 hover:text-yellow-300"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition-colors duration-300 hover:text-yellow-300"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition-colors duration-300 hover:text-yellow-300"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            {/* category 4*/}
            <div className="ml-10">
              <p className="text-xl font-medium tracking-wide text-gray-700">
                Business
              </p>
              <ul className=" mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition-colors duration-300 hover:text-yellow-300"
                  >
                    Information
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition-colors duration-300 hover:text-yellow-300"
                  >
                    Persional
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition-colors duration-300 hover:text-yellow-300"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition-colors duration-300 hover:text-yellow-300"
                  >
                    Forum
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-700 transition-colors duration-300 hover:text-yellow-300"
                  >
                    Management
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Subcription*/}

          <div className=" md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
            <p className="text-xl font-medium tracking-wide text-gray-700">
              Subcribe for updates
            </p>
            <form className="mt-4 flex flex-col md:flex-row">
              <input
                type="email"
                name="email"
                id="email"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:m-0 focus:border-purple-400 focus:outline-none "
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-700 bg-blue-500 transition duration-200 rounded shadown-md hover:bg-yellow-500 focus:outline-none border"
              >
                Subcribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              cum incidunt, harum quos saepe odit ullam libero consequuntur,
              reiciendis explicabo nesciunt doloribus. Autem quaerat nostrum
              repudiandae a similique voluptates, nisi aliquid, dolorum animi
              eius, ipsa rem! Cupiditate necessitatibus quam nobis? Laudantium
              quam illum repellat et id quas voluptatum quasi explicabo.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p></p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href=""
              className="text-gray-500 transition-all duration-300 hover:text-teal-400"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href=""
              className="text-gray-500 transition-all duration-300 hover:text-blue-600"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href=""
              className="text-gray-500 transition-all duration-300 hover:text-pink-400"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
