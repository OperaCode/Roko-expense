import React from "react";
import "./HomeDash.css";
import DashLayout from "../Layouts/DashLayout";

const HomeDash = () => {
  return (
    <>
      <section>
        {/* Total Incomes and Funding */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <div>
            <p className="text-gray-600">Total Incomes and Funding</p>
            <h2 className="text-3xl font-bold text-gray-800">$9,450.00</h2>
          </div>

          {/* <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-gray-600">Total Expenses</p>
            <h2 className="text-3xl font-bold text-gray-800">$3,945.55</h2>
          </div> */}

          {/* Expenses by Category Chart */}
          <div className="w-32 h-32">
            {/* <img
                src="https://via.placeholder.com/100"
                alt="Chart"
                className="w-full h-full"
              /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeDash;
