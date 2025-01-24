import React, { useState } from "react";

const SortModal = ({onClose}) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-blue-300 rounded-lg shadow-lg p-10 w-60 relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 left-2 text-gray-500 hover:text-gray-700 text-3xl font-bold"
            >
              &times;
            </button>
            <br />

            <div className="grid grid-cols-2 gap-4">
              <button className="px-4 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-800">
                Title
              </button>
              <button className="px-1 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-800">
                Method
              </button>
              <button className="px-4 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-800">
                Date
              </button>
              <button className="px-1 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-800">
                Amount
              </button>
              <button className="px-1 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-800">
                Income
              </button>
              <button className="px-1 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-800">
                Expenses
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SortModal;