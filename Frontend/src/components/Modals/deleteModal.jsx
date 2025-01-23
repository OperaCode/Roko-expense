import React, { useState } from "react";

const DeleteModal = ({onClose}) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-blue-300 rounded-lg shadow-lg p-10 w-60 relative">
            <h2 className="font-bold p-2">Are you sure you want to delete this expense?</h2>
            <div className="flex justify-end gap-4 mt-6">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                Delete
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

export default DeleteModal;