import React, { useState } from 'react';

const AddExpenseModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Button to Open Modal */}
      {/* <button
        onClick={toggleModal}
        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700"
      >
        Add Expense
      </button> */}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-tl from-indigo-400 to-indigo-950 p-8 rounded-lg">
            <div className="bg-indigo-800 rounded-lg shadow-lg p-8 w-96 relative border-2 border-white">
              {/* Modal Form */}
              <div className="space-y-4">
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
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddExpenseModal;
