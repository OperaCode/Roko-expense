import React, { useState } from 'react';
import { Link } from "react-router-dom";

const AddExpenseModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="p-8 rounded-lg">
            <div className="bg-indigo-800 rounded-lg shadow-lg p-8 w-96 relative border-2 border-white">
              {/* Cancel Icon */}
              {/* <Link to="/dashboard">
                <button
                  onClick={closeModal}
                  className="absolute top-4 left-4 text-white text-xl hover:text-gray-300 focus:outline-none"
                >
                  ✕
                </button>
              </Link> */}

               {/* Back Button */}
            <button
              className="flex items-center space-x-2 text-indigo-100 hover:text-indigo-500 focus:outline-none"
              onClick={() => window.history.back()}
            >
              {/* <ion-icon name="arrow-back-outline" size="large"></ion-icon> */}
              <span>✕</span>
            </button>






              <br />

              {/* Modal Form */}
              <div className="space-y-4">
                {/* Title Input */}
                <div className="flex flex-col">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    Title:
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="w-full px-2 py-2 border-b-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-100 bg-indigo-500 text-white"
                    placeholder="Enter expense title"
                  />
                </div>

                {/* Category Input */}
                <div className="flex flex-col">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    Category:
                  </label>
                  <select
                    id="category"
                    className="w-full px-2 py-2 border-b-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-100 bg-indigo-500 text-white"
                  >
                    <option value="Food and Groceries" className="text-black">
                      Food and Groceries
                    </option>
                    <option value="Transportation" className="text-black">
                      Transportation
                    </option>
                    <option value="Utilities" className="text-black">
                      Utilities
                    </option>
                  </select>
                </div>

                {/* Method Input */}
                <div className="flex flex-col">
                  <label
                    htmlFor="method"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    Method:
                  </label>
                  <select
                    id="method"
                    className="w-full px-2 py-2 border-b-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-100 bg-indigo-500 text-white"
                  >
                    <option value="Bank Transfer" className="text-black">
                      Bank Transfer
                    </option>
                    <option value="Cash" className="text-black">
                      Cash
                    </option>
                    <option value="Credit Card" className="text-black">
                      Credit Card
                    </option>
                  </select>
                </div>

                {/* Amount Input */}
                <div className="flex flex-col">
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    Amount:
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      $
                    </span>
                    <input
                      id="amount"
                      type="number"
                      className="w-full pl-10 px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 mt-5">
                <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700">
                  Save
                </button>
                <Link to="/dashboard">
                  <button
                    onClick={() => window.history.back()}
                    className="px-4 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-700"
                  >
                    Cancel
                  </button>
                </Link>


              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddExpenseModal;
