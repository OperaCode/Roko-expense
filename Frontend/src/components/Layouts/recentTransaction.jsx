import React from "react";
import PropTypes from "prop-types";

const RecentTransactions = ({ transactions = [] }) => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Recent Transactions</h2>
        <button className="flex items-center space-x-2 rounded p-4 hover:bg-indigo-800 transition-colors">
          See All
        </button>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="text-gray-500">
            <tr>
              <th className="px-6 py-4 text-left">Title</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Transaction Method</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-indigo-100 transition-colors"
                >
                  <td className="px-6 py-4 text-black">{transaction.title}</td>
                  <td className="px-6 py-4 text-black">{transaction.category}</td>
                  <td className="px-6 py-4 text-black">{transaction.method}</td>
                  <td className="px-6 py-4 text-black">{transaction.date}</td>
                  <td
                    className={`px-6 py-4 font-bold ${
                      transaction.amount > 0 ? "text-blue-500" : "text-red-500"
                    }`}
                  >
                    {transaction.amount > 0
                      ? `+${transaction.amount.toLocaleString()}`
                      : `${transaction.amount.toLocaleString()}`}
                  </td>
                </tr>
              ))
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

// PropTypes validation
RecentTransactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ),
};

export default RecentTransactions;
