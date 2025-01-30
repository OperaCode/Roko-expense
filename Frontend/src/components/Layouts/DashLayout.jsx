import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import image from "../../assets/profileAvatar.jpeg"
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import axios from "axios";



const DashLayout = ({ children }) => {
  const { user } = useContext(UserContext);
  const [username, setUserName] = useState("Guest")
  const [profilePhoto, setProfilePhoto] = useState()
 

 useEffect(()=>{

  const fetchUser =async()=>{
   
    try {
      const UserId = localStorage.getItem("userId"); // Assuming you store userId in local storage
      const response = await axios.get(`http://localhost:3000/user/${UserId}`,{withCredentials:true});
      // console.log(response);
      const data = response.data
      setUserName(data.firstName); // Assuming username is in the response data
      console.log(data);

      if(data.profilePhoto){
        setProfilePhoto(data.profilePhoto);
      }else{
        setProfilePhoto(image);
      }

      

    } catch (error) {
      console.log(error)
    }
  }
  fetchUser();
 },[]);
 
  
  return (
    <div className="lg:flex items-cent bg-indigo-600 p-1 ">
      <SideBar />

      {/* Main Content */}
      <div className="flex-col w-full p-3 ">
        {/* Navbar */}
        <div className="flex items-center justify-end gap-4 p-2">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
          Welcome, {username}!
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
