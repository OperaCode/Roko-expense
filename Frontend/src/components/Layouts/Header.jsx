import React from "react";
import { IoMdMenu } from "react-icons/io";
import logo from '../../assets/Roko-logo.png';
import { Link, useLocation } from "react-router-dom";

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
        <header className=" flex flex-row lg:w-full bg-blue-50 items-center justify-between py-4 px-6 rounded-3xl text-1xl">
          <div className="hidden lg:block w-40">
            <Link to='/'><img src={logo}  /></Link>
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
