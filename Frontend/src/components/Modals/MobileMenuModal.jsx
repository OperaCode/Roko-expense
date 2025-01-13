import React, { useState } from "react";


const MobileMenuModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          {/* Modal Content */}
          <div className="w-72 bg-blue-900 text-white rounded-lg shadow-lg p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-lg"
              onClick={closeModal}
            >
            
            </button>
            {/* Menu Items */}
            <ul className="space-y-4 text-lg">
              <li className="hover:underline cursor-pointer">Expenses</li>
              <li className="hover:underline cursor-pointer">History</li>
              <li className="hover:underline cursor-pointer">Profile Setting</li>
            </ul>
            {/* Dropdown Icon */}
            <div className="mt-6 text-center">
              <span className="text-xl">⌄</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenuModal;
