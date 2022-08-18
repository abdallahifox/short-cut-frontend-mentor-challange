import React, { useState } from "react";
import { navLinks } from "../../contains";

//TODO: Import LOGO and Mobile Menu

import Logo from "../UI__Helpers/logo";
import MenuMobile from "../UI__Helpers/menuMobile";

function navbar() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <nav className="flex items-center h-full w-full  py-3">
      <div className="flex items-center justify-between w-full px-2">
        {/* Logo */}

        <div className="logo ">
          <Logo />
        </div>
        {/* NavLinks Mobile View */}

        <div
          className="mobile-menu sm:hidden"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <MenuMobile />
        </div>
        {isOpen && (
          <div className="sm:hidden flex items-center flex-col bg-red-400 absolute top-[20%] left-[3%]  w-[90%] rounded-[10px] bg-dark scale-up">
            <ul className="my-4 text-center ">
              {navLinks.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => setIsOpen((prevState) => !prevState)}
                    className="text-white text-xs my-4 cursor-pointer hover:text-blue-300"
                  >
                    <a href={`#${item.title}`}> {item.title}</a>
                  </li>
                );
              })}
            </ul>
            <div className="after:content-[''] w-[90%]">
              <div className="border-[.5px] opacity-30 "></div>
            </div>

            <div className="flex item-center flex-col my-5 w-full">
              <button className="text-xs text-white hover:text-blue-300">
                Login
              </button>
              <button className="bg-button  rounded-full mx-4  text-xs my-4 py-2 hover:opacity-80">
                Sign up
              </button>
            </div>
          </div>
        )}

        {/* NavLinks Desktop View */}

        <div className="hidden sm:flex items-center  ml-4 flex-1 ">
          <ul className="flex items-center">
            {navLinks.map((item) => {
              return (
                <li
                  key={item.id}
                  className="text-white text-xs my-4 mx-4 cursor-pointer pharaghraph hover:darkcolor"
                >
                  <a href={`#${item.title}`}> {item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Login And Signup Buttons */}

        <div className="hidden sm:flex item-center my-4 space-x-3">
          <button className="text-xs text-white">Login</button>
          <button className="bg-button rounded-full text-xs py-2  px-3 hover:opacity-80">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
