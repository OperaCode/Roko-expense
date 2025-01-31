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
  const [profilePhoto, setProfilePhoto] = useState(image)
  // const [transactions, setTransactions] = useState([]);
 

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const UserId = localStorage.getItem("userId"); // Assuming you store userId in local storage
        const response = await axios.get(`http://localhost:3000/user/${UserId}`, { withCredentials: true });
        const data = response.data;

        setUserName(data.firstName);
        setProfilePhoto(data.profilePhoto || image);
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };

    const fetchTransactions = async () => {
      try {
        const UserId = localStorage.getItem("userId");
        const response = await axios.get(`http://localhost:3000/transactions/${UserId}`, { withCredentials: true });
        setTransactions(response.data); // Assuming response.data is an array of transactions
      } catch (error) {
        console.log("Error fetching transactions:", error);
      }
    };

    fetchUser();
    fetchTransactions();
  }, []);
 
  
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
