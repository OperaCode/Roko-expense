import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import SideBar from "../Layouts/SideBar";
import { FaCaretDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import image from "../../assets/picture.jpeg";

const transactions = [
  {
    title: "Orlando",
    category: "Food and Groceries",
    method: "Bank Transfer",
    date: new Date().toLocaleDateString(),
    amount: "$4,850.00",
  },
  {
    title: "Orlando",
    category: "Food and Groceries",
    method: "Bank Transfer",
    date: new Date().toLocaleDateString(),
    amount: "$4,850.00",
  },
  {
    title: "Orlando",
    category: "Food and Groceries",
    method: "Bank Transfer",
    date: new Date().toLocaleDateString(),
    amount: "$4,850.00",
  },
  {
    title: "PayPal",
    category: "TRavel and Expenses",
    method: "Credit Card",
    date: new Date().toLocaleDateString(),
    amount: "$3,600.00",
  },
  {
    title: "Netflix",
    category: "Utility",
    method: "Bank Transfer",
    date: new Date().toLocaleDateString(),
    amount: "$400.00",
  },
  {
    title: "Netflix",
    category: "Utility",
    method: "Bank Transfer",
    date: new Date().toLocaleDateString(),
    amount: "$400.00",
  },
  {
    title: "Netflix",
    category: "Utility",
    method: "Bank Transfer",
    date: new Date().toLocaleDateString(),
    amount: "$400.00",
  },
  {
    title: "Netflix",
    category: "Utility",
    method: "Bank Transfer",
    date: new Date().toLocaleDateString(),
    amount: "$400.00",
  },
  {
    title: "Netflix",
    category: "Utility",
    method: "Bank Transfer",
    date: new Date().toLocaleDateString(),
    amount: "$400.00",
  },
];
const History = () => {
  return (
    <div className="lg:flex items-cent bg-indigo-600 p-1">
      <SideBar />
      <div className="flex p-6 w-full">
        <div className="w-full rounded-lg mt-4 shadow-md">
          {/* Header */}
          <div className="flex items-center justify-end gap-4 p-2">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Welcome Cheryl,
            </h1>
            <div className="w-12 h-12">
              <Link to="/dashboard">
                <img
                  src={image}
                  alt="Profile"
                  className="w-full h-full rounded-full"
                />
              </Link>
            </div>
          </div>

          <div className=" bg-white h-screen p-4">
            <div className=" flex text-white justify-center items-center">
              <input
                type="text"
                className="w-2/4 p-3 h-10 rounded text-white bg-indigo-200"
                placeholder="Search by Keyword"
              />
            </div>
            {/* Buttons */}
            <div className="flex justify-between items-center p-6 md:text-lg">
              <div className="p-4">
                <Link to="/sort_modal">
                  <button className="text-sm flex items-center p-3 w-full gap-2 md:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    <FaCaretDown />
                    Sort by Category
                  </button>
                </Link>
              </div>

              <div className="p-4">
                <Link to="/download_modal">
                  <button className="text-sm flex items-center p-3 w-full gap-2 md:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    <FaCaretDown />
                    Download
                  </button>
                </Link>
              </div>
            </div>

            {/* Transactions Table */}
            <div className="border rounded-lg">
              <table className="w-full text-xs md:text-lg">
                <thead>
                  <tr className="bg-gray-100 ">
                    <th className="text-center text-base text-gray-700">
                      Title
                    </th>
                    <th className="text-center text-base  text-gray-700 ">
                      Category
                    </th>
                    <th className="text-center text-base text-gray-700 hidden md:block">
                      Transaction Method
                    </th>
                    <th className="text-center text-base  text-gray-700">
                      Date
                    </th>
                    <th className="text-center text-base text-gray-700">
                      Amount
                    </th>
                    <th className="text-center  text-base text-gray-700 ">
                      {/* Clickable button */}
                      <button
                        onClick={() => handleAction(transaction.title)}
                        className="text-white bg-blue-500 p-2 rounded-lg hover:bg-blue-600"
                      >
                        Action
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-gray-100 `}
                    >
                      <td className="text-center text-base p-2 text-gray-800">
                        {transaction.title}
                      </td>
                      <td className="text-center text-base p-2 text-gray-800 ">
                        {transaction.category}
                      </td>
                      <td className="text-center text-base p-2 hidden md:block text-gray-600">
                        {transaction.method}
                      </td>
                      <td className="text-center text-base p-2  text-gray-600">
                        {transaction.date}
                      </td>
                      <td className="text-center text-base p-2  text-green-500">
                        {transaction.amount}
                      </td>
                      <td className="p-2 md:px-6 text-base  text-indigo-900">
                       <Link to="/icon_modal">
                       <CiMenuKebab className="m-auto" />
                       </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
