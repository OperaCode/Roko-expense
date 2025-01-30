import React, {  useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Recent = ({ transaction }) => {
  const [transactions, setTransactions] = useState(transaction);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading)
    return (
      <ClipLoader color="1a80e5" cssOverride={override} isLoading={isLoading} />
    );

  return (
    <div className="w-full p-6 bg-white rounded-lg mt-4 shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center  md:text-lg">
        <div>
          <h2 className="text-s md:text-lg font-semibold text-gray-800">
            Recent Transactions
          </h2>
          <p className=" text-xs p-2 md:text-gray-500">
            Check your transaction history
          </p>
        </div>
        <Link to="/history">
          <button className="text-sm p-3 md:px-4 py-2 bg-indigo-700 text-white rounded hover:bg-blue-900">
            See all
          </button>
        </Link>
      </div>

      {/* Transactions Table */}
      <div className="border rounded-lg">
        <table className="w-full text-xs md:text-lg">
          <thead>
            <tr className="bg-gray-100 ">
              <th className="text-center text-base text-gray-700">Title</th>
              <th className="text-center text-base  text-gray-700 ">Category</th>
              <th className="text-center text-base text-gray-700 hidden md:block">Transaction Method</th>
              <th className="text-center text-base  text-gray-700">Date</th>
              <th className="text-center text-base text-gray-700">Amount</th>
              <th className="text-center  text-base text-gray-700 md:hidden">Action</th>
            </tr>
          </thead>

          <tbody>
            {transactions.length > 0 ? (
              transactions
                .slice(0, 3)
                .map((transaction, index) => {
                  const transactionDate = new Date(transaction.date);
                  transactionDate.setUTCDate(transactionDate.getUTCDate() + 1);
                  const formattedDate = transactionDate.toLocaleDateString();

                  return (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-gray-100 `}
                    >
                      <td className="text-center text-base p-2 text-gray-800">
                        {transaction.title}
                      </td>
                      <td className="text-center text-base p-2 text-gray-800 ">
                        {transaction.category}
                      </td>
                      <td className="text-center text-base p-2 hidden md:block text-gray-600">
                        {transaction.method}
                      </td>
                      <td className="text-center text-base p-2  text-gray-600">
                        {formattedDate}
                      </td>
                      <td className="text-center text-base p-2  text-green-500">
                        ${transaction.amount}
                      </td>
                      <td className="p-2 md:px-6 text-base md:hidden text-indigo-900">
                        <CiMenuKebab className="m-auto" />
                      </td>
                    </tr>
                  );
                })
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-4 text-center text-gray-500 font-medium"
                >
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Recent;
