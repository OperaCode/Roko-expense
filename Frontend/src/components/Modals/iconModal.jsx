import React, { useState } from "react";
import DeleteModal from "./deleteModal";
import EditModal from "./editModal";
import { Link } from "react-router-dom";

const IconModal = ({ onClose, onDelete, onEdit }) => {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-blue-300 rounded-lg shadow-lg p-10 w-60 relative">
            <button
              onClick={onClose}
              className="absolute top-2 left-2 text-gray-500 hover:text-gray-700 text-3xl font-bold"
            >
              &times;
            </button>
            <br />
            <div className="flex flex-col gap-4">
              <Link to='/invoice'>
              <button className="px-4 py-2 w-full bg-indigo-900 text-white rounded hover:bg-indigo-800">
                View
              </button>
              </Link>
              <button 
                className="px-4 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-800" 
                onClick={onEdit}
              >
                Edit
              </button>
              <button 
                className="px-4 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-800" 
                onClick={onDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default IconModal;