import React, { useState } from "react";
import Graph from "../Layouts/Graph";
import { IoAddCircle } from "react-icons/io5";
import AddExpenseModal from "../Modals/addExpenseModal";


const HomeDash = () => {

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <section className="md:flex justify-between gap-5 items-center w-full">
      {/* Total Incomes and Funding */}
      <div className="flex-1 space-y-">
        <h1 className="text-white font-semibold text-3xl md:text-2xl p-2">
          Current Balance:
        </h1>
        <div className="p-2 bg-white rounded-lg shadow-md w-1/2">
          <p className="text-gray-600 text-sm md:text-xs">Total Expenses</p>
          <h2 className="text-2xl font-bold text-gray-700">$9,450.00</h2>
        </div>

        <h1 className="text-white font-semibold text-3xl md:text-2xl p-3">
          Expenses
        </h1>
        <div className="bg-white rounded-lg shadow-md text-center p-4">
          <div>
            {/* Example Expense Items */}
            <div className="flex justify-between items-center p-2">
              <p className="text-lg md:text-sm font-semibold">
                Foods and Groceries
              </p>
              <div className="bg-gray-200 p-2 rounded">
                <p className="font-semibold text-gray-700 md:text-sm">Total</p>
                <p className="font-semibold text-gray-700 md:text-sm">
                  $9,560.00
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center p-2">
              <p className="text-lg font-semibold md:text-sm">
                Foods and Groceries
              </p>
              <div className="bg-gray-200 p-2 rounded">
                <p className="font-semibold text-gray-700 md:text-sm">Total</p>
                <p className="font-semibold text-gray-700 md:text-sm">
                  $9,560.00
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center p-2">
              <p className="text-lg font-semibold md:text-sm">
                Foods and Groceries
              </p>
              <div className="bg-gray-200 p-2 rounded">
                <p className="font-semibold text-gray-700 md:text-sm">Total</p>
                <p className="font-semibold text-gray-700 md:text-sm">
                  $9,560.00
                </p>
              </div>
            </div>
            {/* Add Expense Button */}
            <div className="w-2/4 flex m-auto p-3 justify-center">
              <button
                onClick={toggleModal} // Trigger the modal
                className="bg-blue-900 items-center rounded justify-center w-full text-white p-2 flex"
              >
                <IoAddCircle className="mr-1" />
                Add Expense
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expenses by Category Chart */}
      <div className="flex-1 py-4">
        <Graph />
      </div>

      {/* AddExpenseModal */}
      {isModalOpen && <AddExpenseModal toggleModal={toggleModal} />} {/* Render modal conditionally */}
    </section>
  );
};

export default HomeDash;
