import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";
import axios from "axios";

const Recent = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const UserId = localStorage.getItem("userId"); 
        const response = await axios.get(`http://localhost:3000/transactions/${UserId}`, { withCredentials: true });
        setTransactions(response.data || []); 
      } catch (error) {
        console.log("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="w-full p-6 bg-white rounded-lg mt-4 shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center md:text-lg">
        <div>
          <h2 className="text-s md:text-lg font-semibold text-gray-800">
            Recent Transactions
          </h2>
          {/* <p className="text-xs p-2 md:text-gray-500">Check your transaction history</p> */}
        </div>
        <Link to="/history">
          <button className="text-sm p-3 md:px-4 py-2 bg-indigo-700 text-white rounded hover:bg-blue-900">
            See all
          </button>
          <button className="text-sm p-3 md:px-4 py-2 bg-indigo-700 text-white rounded hover:bg-blue-900">
            See all
          </button>
        </Link>
      </div>

      {/* Transactions Table */}
      <div className="border rounded-lg">
        <table className="w-full text-xs md:text-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-center text-base text-gray-700">Title</th>
              <th className="text-center text-base text-gray-700">Category</th>
              <th className="text-center text-base text-gray-700 hidden md:block">Transaction Method</th>
              <th className="text-center text-base text-gray-700">Date</th>
              <th className="text-center text-base text-gray-700">Amount</th>
              <th className="text-center text-base text-gray-700 md:hidden">Action</th>
            </tr>
          </thead>

          <tbody>
            {transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}>
                  <td className="text-center text-base p-2 text-gray-800">{transaction.title}</td>
                  <td className="text-center text-base p-2 text-gray-800">{transaction.category}</td>
                  <td className="text-center text-base p-2 hidden md:block text-gray-600">{transaction.method}</td>
                  <td className="text-center text-base p-2 text-gray-600">
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td className="text-center text-base p-2 text-green-500">${transaction.amount.toFixed(2)}</td>
                  <td className="p-2 md:px-6 text-base md:hidden text-indigo-900">
                    <CiMenuKebab className="m-auto" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 p-4">No recent transactions found.</td>
              </tr>
            )}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Recent;
