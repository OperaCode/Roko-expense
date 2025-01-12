import React, { Children } from "react";
import SideBar from "./SideBar";
import Recent from "./Recent";

const DashLayout = ({ Children }) => {
  return (
    <div className="lg:flex bg-indigo-500 px-2">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-semibold text-white">Welcome Rodiat,</h1>
          <div className="w-12 h-12">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>

        {/* Balance and Chart Section */}
        <div className="grid grid-cols-1 md:flex justify-between gap-6 mb-6">
          {/* Balance */}
          <div className="p-4 bg-white flex-1 rounded-lg shadow-md flex items-center justify-center">
            {Children}
          </div>
          {/* Expenses by Category Chart */}
          <div className="p-4 bg-white flex-1 rounded-lg shadow-md flex items-center justify-center">
            {Children}
          </div>
        </div>

        {/* Recent Transactions Section */}
        <Recent />
      </div>
    </div>
  );
};

export default DashLayout;
