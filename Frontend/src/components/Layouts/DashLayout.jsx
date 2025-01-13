import React from "react";
import SideBar from "./SideBar";
import Recent from "./Recent";
import image from "../../assets/picture.jpeg"
import { Link } from "react-router-dom";

const DashLayout = ({ children }) => {
  return (
    <div className="lg:flex items-cent bg-indigo-500 p-4 ">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-col w-full p-3 ">
        {/* Navbar */}
        <div className="flex items-center justify-between p-4">
          <h1 className="text-3xl font-semibold text-white">
            Welcome Cheryl,
          </h1>
          <div className="w-12 h-12">
            <Link to='/dashboard'>
            <img
              src={image}
              alt="Profile"
              className="w-full h-full rounded-full"
            />
            </Link>
          </div>
        </div>

        {/* Balance and Chart Section */}
        <div className="">
          <div>{children}</div>
          
        </div>

        {/* Recent Transactions Section */}
        <Recent />
      </div>
    </div>
  );
};

export default DashLayout;
