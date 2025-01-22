import React, { useState } from "react";

const EditModal = ({ onClose }) => {
  // Handle clicking outside the modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleBackdropClick}
        >
          <div 
            className="bg-blue-300 rounded-lg shadow-lg p-10 w-70 relative"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
          >
            {/* Add close button at top-right */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl font-bold"
            >
              &times;
            </button>
            <br />
            <div className="space-y-4">
              {/* Title Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full px-2 border-b-2 border-indigo-400 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Method
                </label>
                <input
                  type="text"
                  className="w-full px-2  border-b-2 border-indigo-400 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter method"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    className="w-full pl-10 px-2 border border-indigo-400 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-5 mr-2">
              <button className="px-4 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-800">
                Edit
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default EditModal;