import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const transactions = [
  {
    title: "Orlando",
    category: "Food and Groceries",
    method: "Bank Transfer",
    date: Date.now(),
    amount: "$4,850.00",
  },
  {
    title: "Orlando",
    category: "Food and Groceries",
    method: "Bank Transfer",
    date: Date.now(),
    amount: "$4,850.00",
  },
  {
    title: "Orlando",
    category: "Food and Groceries",
    method: "Bank Transfer",
    date: Date.now(),
    amount: "$4,850.00",
  },
  {
    title: "PayPal",
    category: "TRavel and Expenses",
    method: "Credit Card",
    date: Date.now(),
    amount: "$3,600.00",
  },
  {
    title: "Netflix",
    category: "Utility",
    method: "Bank Transfer",
    date: Date.now(),
    amount: "$400.00",
  },
  {
    title: "Netflix",
    category: "Utility",
    method: "Bank Transfer",
    date: Date.now(),
    amount: "$400.00",
  },
  {
    title: "Netflix",
    category: "Utility",
    method: "Bank Transfer",
    date: Date.now(),
    amount: "$400.00",
  },
  {
    title: "Netflix",
    category: "Utility",
    method: "Bank Transfer",
    date: Date.now(),
    amount: "$400.00",
  },
  {
    title: "Netflix",
    category: "Utility",
    method: "Bank Transfer",
    date: Date.now(),
    amount: "$400.00",
  },
];

const History = () => {
  const [transaction, setTransaction] = useState(transactions)
  return (
      <section className="flex p-6 w-full">
        <div className="w-full rounded-lg mt-4 shadow-md">
          <div className=" bg-white h-screen p-4">
            <div className=" flex justify-center items-center">
              <input type="text" className="bg-indigo-100 p-4 w-full rounded-md"placeholder="Search by Keyword"/>
            </div>
            {/* Buttons */}
            <div className="flex justify-between items-center py-4 md:text-lg text-white">
              <div className="p-4">
                <button className="md:text-md text-sm flex items-center p-3 gap-1 md:px-4 bg-indigo-700 rounded hover:bg-indigo-900">
                  <FaCaretDown size={20}/>
                  Sort by Category
                </button>
              </div>

              <div className="p-4">
                <button className="md:text-md text-sm flex items-center p-3 gap-1 md:px-4 bg-indigo-700 rounded hover:bg-indigo-900">
                  {/* bg-indigo-700 text-white w-1/3 p-3 rounded hover:bg-indigo-900" */}
                  <FaCaretDown size={20}/>
                  Download
                </button>
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
                    <th className="text-center  text-base text-gray-700 md:hidden">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transaction.map((transaction, index) => (
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
                      <td className="p-2 md:px-6 text-base md:hidden text-indigo-900">
                        <CiMenuKebab className="m-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
  );
};

export default History;
