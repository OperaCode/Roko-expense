import React, { useState } from "react";

const Modal_7 = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-indigo-800 rounded-lg shadow-lg p-12 w-60 relative">
            <button
              onClick={closeModal}
              className="absolute top-3 left-3 text-indigo-800 bg-white hover:text-indigo-900 text-2xl p-1 font-bold"
            >
              &times;
            </button>
            <br />

            <div>
              <button className="font-bold p-2 text-white hover:text-indigo-400">
                Expenses
              </button>
              <br />
              <button className="font-bold p-2 text-white hover:text-indigo-400">
                History
              </button>
              <br />
              <button className="font-bold p-2 text-white hover:text-indigo-400">
                Profile Setting
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal_7;
