import React from "react";
import logo from "../../assets/Roko-logo.png";
import { IoMdMenu } from "react-icons/io";

const SideBar = () => {
  return (
    <aside className=" bg-indigo-800 lg:w-1/4 px-6 border-2 rounded-2xl">
      <div className="bg-indigo-800 lg:p-5  lg:h-screen rounded ">
        <div className="flex justify-between items-center lg:flex-col">
          <div className="lg:mb-8">
            <img src={logo} className="hover:cursor-pointer" />
          </div>

          <div className="hidden my-4 md:block font-serif w-full lg:">
            <ul className="text-white flex justify-end gap-11 lg:flex-col">
              <li className="hover:cursor-pointer lg:text-2xl">Dashboard</li>
              <li className="hover:cursor-pointer lg:text-2xl">Expenses</li>
              <li className="hover:cursor-pointer lg:text-2xl">History</li>
              <li className="hover:cursor-pointer lg:text-2xl">Profile Settings</li>
            </ul>
          </div>

          <div className="">
            <IoMdMenu className="text-white size-10 md:hidden hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
