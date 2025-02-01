import React, { useEffect, useState } from "react";
import Graph from "../Layouts/Graph";
import { IoAddCircle } from "react-icons/io5";
import Recent from "../Layouts/Recent";
import AddExpenseModal from "../Modals/AddExpenseModal";
import { ClipLoader } from 'react-spinners';
import { toast } from "react-toastify";
import axios from "axios";

const override = {
  display: 'block',
  margin: '100px auto',
};

const BASE_URL = import.meta.env.VITE_BASE_URL;

const HomeDash = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  useEffect(() => {
    const fetchRecentTransaction = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/expense`, { withCredentials: true });
        setTransactions(response.data);
        toast.success(response?.data?.message);
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.message || "Failed to fetch transactions");
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecentTransaction();
  }, [BASE_URL]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions(prevTransactions => [newTransaction, ...prevTransactions]);
  };

  const totalExpenses = Array.isArray(transactions) 
  ? transactions.reduce((acc, transaction) => acc + (transaction.amount || 0), 0) 
  : 0;
  const totalFoodGroceries = Array.isArray(transactions)
  ? transactions.filter(transaction => transaction.category === "Food and groceries").reduce((acc, transaction) => acc + (transaction.amount || 0), 0)
  : 0;
  const totalUtilities = Array.isArray(transactions)
  ? transactions.filter(transaction => transaction.category === "Utilities").reduce((acc, transaction) => acc + (transaction.amount || 0), 0)
  : 0;

const totalTransportation = Array.isArray(transactions)
  ? transactions.filter(transaction => transaction.category === "Transportation").reduce((acc, transaction) => acc + (transaction.amount || 0), 0)
  : 0;
  if (isLoading) return <ClipLoader color='1a80e5' cssOverride={override} loading={isLoading} />;

  return (
    <section className="lg:flex lg:flex-col bg-indigo-600 p-1 lg:gap-4">
      <div className="md:flex justify-between gap-5 items-center font-bodyFont w-full">
        <div className="flex-1 space-y-3">
          <h1 className="text-white font-semibold text-3xl md:text-2xl p-1">Current Balance:</h1>
          <div className="p-4 bg-white rounded-lg shadow-md w-1/2">
            <p className="text-gray-600 text-sm md:text-xs">Total Expenses</p>
            <h2 className="text-2xl font-bold text-gray-700">${totalExpenses.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
          </div>
          <h1 className="text-white font-semibold text-3xl md:text-2xl p-3">Expenses</h1>
          <div className="bg-white rounded-lg shadow-md text-center p-4">
            <div className="flex justify-between items-center p-2">
              <p className="text-lg md:text-sm font-semibold">Foods and Groceries</p>
              <div className="bg-gray-200 p-2 rounded">
                <p className="font-semibold text-gray-700 md:text-sm">Total</p>
                <p className="font-semibold text-gray-700 md:text-sm">${totalFoodGroceries.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-2">
              <p className="text-lg md:text-sm font-semibold">Utilities</p>
              <div className="bg-gray-200 p-2 rounded">
                <p className="font-semibold text-gray-700 md:text-sm">Total</p>
                <p className="font-semibold text-gray-700 md:text-sm">${totalUtilities.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-2">
              <p className="text-lg font-semibold md:text-sm">Transportation</p>
              <div className="bg-gray-200 p-2 rounded">
                <p className="font-semibold text-gray-700 md:text-sm">Total</p>
                <p className="font-semibold text-gray-700 md:text-sm">${totalTransportation.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
            </div>
            <div className="w-2/4 flex m-auto p-3 justify-center">
              <button onClick={openModal} className="bg-indigo-700 items-center rounded justify-center w-full hover:bg-indigo-900 text-white p-3 flex">
                <IoAddCircle className="mr-1" /> Add Expense
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 p-3">
          <Graph />
          </div>
        {/* </div> */}
      </div>
      <Recent transaction={transactions} />
      {isModalOpen && <AddExpenseModal onAddTransaction={handleAddTransaction} onClose={closeModal} />} 
    </section>
  );
};

export default HomeDash;
