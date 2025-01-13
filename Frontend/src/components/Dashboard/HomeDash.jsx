import React from "react";
import Graph from "../Layouts/Graph";


const HomeDash = () => {
  return (
    <section className="md:flex justify-between gap-5 items-center  w-full ">
      {/* Total Incomes and Funding */}

      <div className=" flex-1 space-y-3 flex-col items-center">
        <div className="p-2 bg-white rounded-lg shadow-md text-center ">
          <p className="text-gray-600 text-sm md:text-lg">Total Incomes and Funding</p>
          <h2 className="md:text-2xl font-bold text-gray-800">$9,450.00</h2>
        </div>

        <div className="p-2 bg-white rounded-lg shadow-md text-center ">
          <p className="text-gray-600 text-sm">Total Expenses</p>
          <h2 className="md:text-2xl font-bold text-gray-800">$3,945.55</h2>
        </div>
      </div>
      {/* Expenses by Category Chart */}
      <div className="flex-1 py-4  ">
        <Graph  />
      </div>
    </section>
  );
};

export default HomeDash;
