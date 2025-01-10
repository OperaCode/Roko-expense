import React from "react";
import { IoMdMenu } from "react-icons/io";
import logo from '../../assets/Roko-logo.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="p-4 flex justify-end lg:fixed w-full font-bodyFont">
        <header className=" flex flex-row lg:w-full bg-blue-50 items-center justify-between py-4 px-6 rounded-3xl text-1xl">
          <div className="hidden lg:block w-40">
            <Link to='/'><img src={logo}  /></Link>
          </div>

          <div>
            <ul className="hidden lg:flex space-x-16 ">
              <Link to='/about'><li>About Us</li></Link>
              <Link to='/how-it-works'><li>How it Works</li></Link>
              <Link to='/blog'><li>Blog</li></Link>
            </ul>
          </div>

          <div className="flex flex-row gap-4 text-sm items-center ">
            <Link to='/login'><button className="px-5 py-2 border-black font-medium border-2 rounded-md">
              Log In
            </button></Link>
            <Link to='/register'><button className="bg-indigo-900 text-white px-5 font-medium py-3 rounded-md hidden md:block">
              Sign Up
            </button></Link>
            <IoMdMenu className="lg:hidden text-4xl " />
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
