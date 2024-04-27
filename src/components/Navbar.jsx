import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
//reacticons
import {
  FaBars,
  FaDribbble,
  FaFacebook,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import Logo from "./Logo";
const Navbar = () => {
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/admissions", link: "Admissions" },
    { path: "/programs", link: "Programs" },
    { path: "/news", link: "News" },
    { path: "/resource", link: "Resource" },
  ];

  return (
    <header className="bg-gradient-to-r from-light-green-600 to-yellow-500 text-white fixed top-35 left-0 right-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto  flex justify-center items-center">
        <div>
          <Logo />
        </div>
        <div>
          {/*navitems for lg device */}
          <ul className="md:flex gap-12 text-lg hidden">
            {navItems.map(({ path, link }) => (
              <li className="text-green-500" key={path}>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                  to={path}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <button className="bg bg-yellow-500 text-black ml-10 mr-5 px-6 py-2 rounded hover:bg-white  hover:text-green-500 duration-200 ease-in ">
          Login
        </button>

        {/* <Button>Button</Button>;menu icons
        {/*<div className="text-white lg:flex gap-4 items-center hidden">
          <a href="/" className=" hover:text-yellow-400">
            <FaFacebook />
          </a>
          <a href="/" className=" hover:text-yellow-400">
            <FaDribbble />
          </a>
          <a href="/" className=" hover:text-yellow-400">
            <FaTwitter />
          </a>
          <button
            onClick={openModal}
            className="bg bg-yellow-500 px-6 py-2 rounded hover:bg-white  hover:text-green-500 duration-200 ease-in "
          >
            Login
          </button>
        </div> */}
        {/* our modal component*/}
        {/* <Modal isOpen={isModalOpen} onClose={closeModal} /> */}
        {/* mobile menu btn, display on mobile screen */}
        {/* <div className="md:hidden">
          <button onClick={toggleMenuOpen} className="cursor-pointer">
            {isMenuOpen ? <FaXmark /> : <FaBars className="w-5 h-5" />}
          </button>
        </div> */}
      </nav>
      {/* menu items only for mobile*/}
      {/* <div>
        <ul
        // className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
        //   isMenuOpen
        //     ? "fixed top-0 left-0 w-full transition-all ease-out  duration-150"
        //     : "hidden"
        // } `}
        >
          {navItems.map(({ path, link }) => (
            <li className="text-black" key={path}>
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>
      </div> */}
    </header>
  );
};

export default Navbar;
