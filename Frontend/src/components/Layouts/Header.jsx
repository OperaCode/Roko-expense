import React from "react";
import { IoMdMenu } from "react-icons/io";
import Login from "../Login/Login.jsx";



const Header = () => {
  return (
    <>
      <div className="p-4 fixed  w-full">
        <header className=" flex flex-row bg-blue-50 items-center justify-between p-6 rounded-3xl text-1xl">
          <div className="font-bold text-2xl">{}</div>

          <div>
            <ul className="hidden lg:flex space-x-10">
              <li>How it Works</li>
              <li>About Us</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="flex flex-row gap-4 text-sm items-center ">
            <button className="px-5 py-2 border-black font-medium border-2 rounded-md">
              Log In
            </button>
            <button className="bg-indigo-900 text-white px-5 font-medium py-3 rounded-md hidden md:block">
              Sign Up
            </button>
            <IoMdMenu className="lg:hidden text-4xl " />
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
