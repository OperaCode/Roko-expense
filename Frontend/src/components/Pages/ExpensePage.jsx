import React from "react";
import SideBar from "../Layouts/SideBar";

const ExpensePage = () => {
  const handleEditProfile = () => {
    alert("Edit profile clicked!");
  };

  // Categories from the expenses table
  const expenseCategories = ["Food and Groceries", "Transportation", "Utilities"];

  // Recent transactions array
  const transactions = [
    {
      title: "Grocery Shopping",
      category: "Food and Groceries",
      method: "Credit Card",
      date: "2024-12-20",
      amount: -150,
    },
    {
      title: "Train Ticket",
      category: "Transportation",
      method: "Bank Transfer",
      date: "2024-12-19",
      amount: -50,
    },
    {
      title: "Electric Bill",
      category: "Utilities",
      method: "Cash",
      date: "2024-12-18",
      amount: -75,
    },
    {
      title: "Monthly Salary",
      category: "Food and Groceries", // Can reuse categories
      method: "Bank Transfer",
      date: "2024-12-17",
      amount: 2000,
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-tl from-indigo-400 to-indigo-950 p-6 text-white">
        {/* Search Bar */}
        <div className="mb-6 flex justify-between items-center">
          <form className="flex items-center bg-white p-2 rounded-lg shadow-md w-full max-w-md">
            <button
              type="submit"
              className="p-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 focus:outline-none"
            >
              <ion-icon name="search-outline"></ion-icon>
            </button>
            <input
              type="text"
              placeholder="Search..."
              name="search"
              className="flex-1 px-4 py-2 ml-2 border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 rounded"
            />
          </form>

          {/* Profile Section */}
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-indigo-500"
            />
          </div>
        </div>

        {/* Expenses Table */}
        <div className="overflow-x-auto">
          <table className="min-w-60 bg-white rounded-lg shadow-md">
            <thead className="text-gray-500">
              <tr>
                <th className="px-6 py-4 text-left">Expenses</th>
                <th className="px-6 py-4 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {expenseCategories.map((category, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-indigo-100 transition-colors"
                >
                  <td className="px-6 py-4 text-black">{category}</td>
                  <td className="px-6 py-4 text-black">$103,400</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <button className="flex items-center space-x-2 rounded p-4 hover:bg-indigo-800 transition-colors">
              <ion-icon name="add-circle-outline"></ion-icon>
              <span>Add Expenses</span>
            </button>
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div className="mt-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Recent Transactions</h2>
            <button className="flex items-center space-x-2 rounded p-4 hover:bg-indigo-800 transition-colors">
              See All
            </button>
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead className="text-gray-500">
                <tr>
                  <th className="px-6 py-4 text-left">Title</th>
                  <th className="px-6 py-4 text-left">Category</th>
                  <th className="px-6 py-4 text-left">Transaction Method</th>
                  <th className="px-6 py-4 text-left">Date</th>
                  <th className="px-6 py-4 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-indigo-100 transition-colors"
                  >
                    <td className="px-6 py-4 text-black">{transaction.title}</td>
                    <td className="px-6 py-4 text-black">{transaction.category}</td>
                    <td className="px-6 py-4 text-black">{transaction.method}</td>
                    <td className="px-6 py-4 text-black">{transaction.date}</td>
                    <td
                      className={`px-6 py-4 font-bold ${
                        transaction.amount > 0 ? "text-blue-500" : "text-red-500"
                      }`}
                    >
                      {transaction.amount > 0
                        ? `+${transaction.amount.toLocaleString()}`
                        : `${transaction.amount.toLocaleString()}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensePage;
