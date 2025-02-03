import React from "react";
import { IoMdMenu } from "react-icons/io";

import { Link, useLocation } from "react-router-dom";
import anotherlogo from "../../assets/anotherlogo2.png"

const navTitle = [
  {url: '/', title: 'Home'},
  {url: '/about', title: 'About Us'},
  {url: '/how-it-works', title: 'How It Works'},
  {url: '/blog', title: 'Blog'}
]

const Header = () => {
  const location = useLocation();
  return (
    <>
      <div className="p-4 flex justify-end lg:fixed w-full font-bodyFont">
        <header className=" flex flex-row lg:w-full bg-indigo-50 items-center justify-between py-1 px-10 rounded-3xl text-1xl border">
          <div className=" lg:block mr-4  ">
            <Link to='/'><img src={anotherlogo} className="w-40" /></Link>
          </div>

          <ul className="hidden lg:flex space-x-16">
            {navTitle.map(({ url, title }, index) => (
              <li className="hover:text-indigo-600 hover:transition-all" key={index}>
                <Link to={url} className={url === location.pathname ? 'text-indigo-700 font-semibold' : ''}>
        {title}
      </Link>
    </li>
  ))}
</ul>

          <div className="flex flex-row gap-4 text-sm items-center ">
            <Link to='/login'><button className="px-5 py-2 border-black hover:bg-indigo-200 font-medium border-2 rounded-md">
              Log In
            </button></Link>
            <Link to='/register'><button className="bg-indigo-700 text-white px-5 font-medium py-3 rounded-md hidden md:block hover:bg-indigo-900">
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
