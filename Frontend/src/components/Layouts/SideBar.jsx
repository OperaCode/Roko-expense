import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import logo from "../../assets/Roko-logo.png";
import anotherlogo2 from "../../assets/anotherlogo2.png"

const SideBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle the modal
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <aside className="bg-indigo-800 lg:w-1/4 border-2 rounded-2xl font-headerFont">
      <div className="lg:p-5 lg:h-screen rounded px-3">
        <div className="flex justify-between items-center lg:flex-col">
          {/* Logo */}
          <div className=" flex items-center px-4 size-40">
            <Link to="/">
              <img src={anotherlogo2} alt="Logo" className="hover:cursor-pointer size-" />
            </Link>
          </div>

          {/* Menu Items */}
          <div className="hidden my-4 md:block font-headerFont w-full lg:">
            <ul className="text-white flex justify-end gap-11 lg:flex-col">
              <Link to="/dashboard">
                <li className="hover:cursor-pointer lg:text-2xl">Dashboard</li>
              </Link>

              <Link to='/history'>
                <li className="hover:cursor-pointer lg:text-2xl">Invoice</li>
              </Link>

              <Link to="/profile-setting">
                <li className="hover:cursor-pointer lg:text-2xl">
                  Profile Settings
                </li>
              </Link>
            </ul>
          </div>

          {/* Menu Icon for Small Screens */}
          <div className="">
            <IoMdMenu
              className="text-white size-10 md:hidden hover:cursor-pointer hover:text-gray-400 "
              onClick={toggleModal} // Toggle modal visibility on click
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className=" bg-blue-900 text-white rounded-lg shadow-lg p-6 border-4 relative">
            {/* Close Button */}
            <button
              className="top-4 left-4  text-white text-lg  "
              onClick={toggleModal} // Close the modal
            >
              <FaWindowClose className="w-10 h-10 hover:text-gray-400 " />
            </button>
            {/* Modal Menu Items */}
            <ul className="space-y-8 text-2xl p-4">
              <Link to="/dashboard">
                <li className="hover:text-gray-400 cursor-pointer">Dashboard</li>
              </Link>

              <Link to="/history">
                <li className="hover:text-gray-400 cursor-pointer">Invoice</li>
              </Link>

              <Link to="/profile-setting">
                <li className="hover:text-gray-400 cursor-pointer">Profile Settings</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </aside>
  );
};

export default SideBar;
