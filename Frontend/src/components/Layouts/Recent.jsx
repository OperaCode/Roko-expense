import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const transactions = [
  {
    description: "Orlando",
    type: "Bank account",
    date: new Date().toLocaleDateString(),
    amount: "$4,850.00",
  },
  {
    description: "PayPal",
    type: "Credit Card",
    date: new Date().toLocaleDateString(),
    amount: "$3,600.00",
  },
  {
    description: "Netflix",
    type: "Credit Card",
    date: new Date().toLocaleDateString(),
    amount: "$400.00",
  },
];

const Recent = () => {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center  md:text-lg">
        <div>
          <h2 className="text-s md:text-lg font-semibold text-gray-800">
            Recent Transactions
          </h2>
          <p className=" text-xs p-2 md:text-gray-500">Check your transaction history</p>
        </div>
        <button className="text-sm p-3 md:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          See all
        </button>
      </div>

      {/* Transactions Table */}
      <div className="border rounded-lg p-6 ">
        <table className="w-full text-xs md:text-lg">
          <thead>
            <tr className="bg-gray-100 ">
              <th className="text-center text-base text-gray-700">Description</th>
              <th className="text-center text-base hidden md:block text-gray-700">Type</th>
              <th className="text-center text-base text-gray-700">Date</th>
              <th className="text-center text-base text-gray-700">Amount</th>
              <th className="text-center  text-base md:hidden text-gray-700">Action</th>
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
                <td className="text-center text-base p-2 text-gray-800">{transaction.description}</td>
                <td className="text-center text-base p-2 hidden md:block text-gray-600">{transaction.type}</td>
                <td className="text-center text-base p-2 text-gray-600">{transaction.date}</td>
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
  );
};

export default Recent;
