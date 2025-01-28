import React from "react";
import SideBar from "./SideBar";
import image from "../../assets/picture.jpeg"
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";


const formatName = (fullname) => {
  const firstName = fullname.split(" ")[0];
  return firstName;
};


const DashLayout = ({ children }) => {
  const { user } = useContext(UserContext);
  console.log(user)

  const displayName = user && user.fullname ? formatName(user.fullname) : 'User';
  
  return (
    <div className="lg:flex items-cent bg-indigo-600 p-1 ">
      <SideBar />

      {/* Main Content */}
      <div className="flex-col w-full p-3 ">
        {/* Navbar */}
        <div className="flex items-center justify-end gap-4 p-2">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Welcome  {displayName}!,
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
      </div>
    </div>
  );
};

export default DashLayout;
