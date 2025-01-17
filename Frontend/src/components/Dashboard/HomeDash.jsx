import React from "react";
import Graph from "../Layouts/Graph";
import { IoAddCircle } from "react-icons/io5";

const HomeDash = () => {
  return (
    <section className="md:flex justify-between gap-5 items-center  w-full">
      {/* Total Incomes and Funding */}

      <div className=" flex-1 space-y-3 ">
      <h1 className="text-white font-semibold text-3xl md:text-2xl p-1">Current Balance:</h1>
        <div className="p-4 bg-white rounded-lg shadow-md w-1/2 ">
        
          <p className="text-gray-600 text-sm  md:text-xs">
            Total Expenses
          </p>
          <h2 className="text-2xl font-bold text-gray-700">$9,450.00</h2>
        </div>


        <h1 className="text-white font-semibold text-3xl md:text-2xl p-1">Expenses</h1>
        <div className=" bg-white rounded-lg shadow-md text-center px-4  ">
          <div  className="">
            <div className="flex justify-between items-center p-3 ">
              <p className="text-lg md:text-sm font-semibold">Foods and Groceries</p>
              <div className="bg-gray-200 p-2 rounded">
                <p className=" font-semibold text-gray-700 md:text-sm">Total</p>
                <p className=" font-semibold text-gray-700 md:text-sm">$9,560.00</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 ">
              <p className="text-lg font-semibold md:text-sm">Foods and Groceries</p>
              <div className="bg-gray-200 p-2 rounded">
                <p className=" font-semibold text-gray-700 md:text-sm">Total</p>
                <p className=" font-semibold text-gray-700 md:text-sm">$9,560.00</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-3">
              <p className="text-lg font-semibold md:text-sm">Foods and Groceries</p>
              <div className="bg-gray-200 p-2 rounded">
                <p className=" font-semibold text-gray-700 md:text-sm">Total</p>
                <p className=" font-semibold text-gray-700 md:text-sm">$9,560.00</p>
              </div>
            </div>
            {/* button */}
            <div className=" w-2/4 flex m-auto pb-3 justify-center" >
              <button className="bg-blue-900 items-center rounded justify-center w-full text-white p-3 flex"><IoAddCircle  className="mr-1"/>Add Expense</button>
            </div>
          </div>
        </div>
      </div>
      {/* Expenses by Category Chart */}
      <div className="flex-1 py-4  ">
        <Graph />
      </div>
    </section>
  );
};

export default HomeDash;
