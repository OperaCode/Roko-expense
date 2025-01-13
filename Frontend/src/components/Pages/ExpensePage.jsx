import React from "react";
import SideBar from "../Layouts/SideBar";

const ExpensePage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-tl from-indigo-400 to-indigo-950 p-6 text-white">
        {/* Search Bar */}
        <div className="mb-6">
          <form className="flex items-center bg-white p-2 rounded-lg shadow-md w-full max-w-md mx-auto">
            {/* Search Button */}
            <button
              type="submit"
              className="p-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 focus:outline-none"
            >
              <ion-icon name="search-outline"></ion-icon>
            </button>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search..."
              name="search"
              className="flex-1 px-4 py-2 ml-2 border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 rounded"
            />
          </form>
        </div>

        {/* Page Content */}
        <div className="flex gap-60 p-4 ml-12 text-center">
          <h1 className="text-2xl font-bold">Expenses</h1>
          <h9>Heres whats is going on with your payment</h9>
        </div>
        {/* <h1 className="text-2xl font-bold text-center">Expense Page</h1> */}

        {/* <div>
          <p>Total</p>
          <p>Spending Limits/PM</p>
          <p>Succesful payment</p>

        </div>

        <div>
          <h1 className="flex gap-60 p-4 ml-12">Food and Groceries</h1>
        </div> */}

        <div>
          <table>
            <thead>
              <tr>
                <th>Total</th>
                <th>Spending Limits</th>
                <th>Succesful Payment</th>
                <th>Pending Payment</th>
              </tr>
            </thead>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ExpensePage;
