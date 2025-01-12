import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const transactions = [
  {
    description: "Orlando",
    type: "Bank account",
    date: new Date().toLocaleDateString(),
    amount: "$400",
  },
  {
    description: "Orlando",
    type: "Bank account",
    date: new Date().toLocaleDateString(),
    amount: "$400",
  },
  {
    description: "Orlando",
    type: "Bank account",
    date: new Date().toLocaleDateString(),
    amount: "$400",
  },
];

const Recent = () => {
  return (
    <div className="w-full p-3 md:p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-s md:text-2xl font-semibold text-gray-800">
            Recent Transactions
          </h2>
          <p className=" text-xs md:text-gray-500">Check your transaction history</p>
        </div>
        <button className="text-sm p-3 md:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          See all
        </button>
      </div>

      {/* Transactions Table */}
      <div className="overflow-hidden border rounded-lg">
        <table className="w-full table-auto border-collapse text-xs md:text-lg">
          <thead>
            <tr className="bg-gray-100 ">
              <th className="text-center p-2 md:px-6 py-4 text-gray-700">Description</th>
              <th className="text-center p-2 md:px-6 py-4 hidden md:block text-gray-700">Type</th>
              <th className="text-center p-2 md:px-6 py-4 text-gray-700">Date</th>
              <th className="text-center p-2 md:px-6 py-4 text-gray-700">Amount</th>
              <th className="text-center p-2 md:px-6 py-4  md:hidden text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100`}
              >
                <td className="text-center p-2 md:px-6 py-4  text-gray-800">{transaction.description}</td>
                <td className="text-center p-2 md:px-6 py-4 hidden md:block text-gray-600">{transaction.type}</td>
                <td className="text-center p-2 md:px-6 py-4  text-gray-600">{transaction.date}</td>
                <td className="text-center p-2 md:px-6 py-4  text-green-500">
                  {transaction.amount}
                </td>
                <td className="p-2 md:px-6 py-4 md:hidden text-indigo-900">
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
