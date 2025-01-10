import React, { useState } from "react";

const Modal_6 = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-tl from-indigo-400 to-indigo-950 p-8 rounded-lg px-5">
            <div className="bg-indigo-800 rounded-lg shadow-lg p-8 w-35 relative border-2 border-white">
              <div className="space-y-4">
                <div className="flex gap-10">
                  <label className="block text-sm font-medium text-white mb-1">
                    Category:
                  </label>
                
                   <select
                    className="w-full px-2 border-b-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-100 bg-indigo-500 text-white"
                  >
                    <option value="Bank Transfer" className="text-black">
                      Food and Groceries
                    </option>
                    <option value="Cash" className="text-black">
                    Transportation
                    </option>
                    <option value="Credit Card" className="text-black">
                      Utilities
                    </option>
                  </select>
                </div>

                <div className="flex gap-10">
                  <label className="block text-sm font-medium text-white mb-1">
                    Method:
                  </label>
                  <select
                    className="w-full px-2 border-b-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-100 bg-indigo-500 text-white"
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

                <div className="flex gap-10">
                  <label className="block text-sm font-medium text-white mb-1">
                    Amount:
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      className="w-full pl-10 px-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-5 mr-2">
                <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-900">
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

export default Modal_6;
