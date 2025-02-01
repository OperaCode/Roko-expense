import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DownloadModal from "../Modals/downloadModal";
import SortModal from "../Modals/SortModal";
import IconModal from "../Modals/iconModal";
import DeleteModal from "../Modals/deleteModal";
import EditModal from "../Modals/editModal";

const transactions = [
  {
    title: "Orlando",
    category: "Food and Groceries",
    method: "Bank Transfer",
    date: new Date().toLocaleDateString(),
    amount: "$4,850.00",
  },
  {
    title: "Orlando",
    category: "Food and Groceries",
    method: "Bank Transfer",
    date: new Date().toLocaleDateString(),
    amount: "$4,850.00",
  },
  {
    title: "Orlando",
    category: "Food and Groceries",
    method: "Bank Transfer",
    date: new Date().toLocaleDateString(),
    amount: "$4,850.00",
  },
  {
    title: "PayPal",
    category: "TRavel and Expenses",
    method: "Credit Card",
    date: new Date().toLocaleDateString(),
    amount: "$3,600.00",
  },
  {
    title: "Netflix",
    category: "Utility",
    method: "Bank Transfer",
    date: new Date().toLocaleDateString(),
    amount: "$400.00",
  },
  {
    title: "Netflix",
    category: "Utility",
    method: "Bank Transfer",
    date: new Date().toLocaleDateString(),
    amount: "$400.00",
  },
  {
    title: "Netflix",
    category: "Utility",
    method: "Bank Transfer",
    date: new Date().toLocaleDateString(),
    amount: "$400.00",
  },
  {
    title: "Netflix",
    category: "Utility",
    method: "Bank Transfer",
    date: new Date().toLocaleDateString(),
    amount: "$400.00",
  },
  {
    title: "Netflix",
    category: "Utility",
    method: "Bank Transfer",
    date: new Date().toLocaleDateString(),
    amount: "$400.00",
  },
];

const History = () => {
  const [transaction, setTransaction] = useState(transactions)

  const [sortModalOpen, setSortModalOpen] = useState(false)
  const [downloadModalOpen, setDownloadModalOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)

  const openSortModal = () => {
    setSortModalOpen(true)
  }
  
  const closeSortModal = () => {
    setSortModalOpen(false)
  }

  const openDownloadModal = () => {
    setDownloadModalOpen(true)
  }
  
  const closeDownloadModal = () => {
    setDownloadModalOpen(false)
  }

  const openModal = () => {
    setModalOpen(true)
  }
  
  const closeModal = () => {
    setModalOpen(false)
  }

  const openDeleteModal = () => {
    setDeleteModalOpen(true)
  }
  
  const closeDeleteModal = () => {
    setDeleteModalOpen(false)
  }

  const openEditModal = () => {
    setEditModalOpen(true)
  }
  
  const closeEditModal = () => {
    setEditModalOpen(false)
  }

  return (
      <section className="flex p-6 w-full font-bodyFont">
        <div className="w-full rounded-lg mt-4 shadow-md">
          <div className=" bg-white h-screen p-4 rounded">
            <div className=" flex text-white justify-center items-center">
              <input
                type="text"
                className="w-full p-6 h-10 mx-2 rounded text-black bg-indigo-200"
                placeholder="Search by Keyword"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center py-4 md:text-lg text-white">
              <div className="p-4 flex justify-between w-full">
                  <button className="text-sm flex justify-center p-3 w-1/4 gap-2 md:px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-blue-600" onClick={openSortModal}>
                    <FaCaretDown />
                    Sort by Category
                  </button>
                  <button className="text-sm flex justify-center p-3 w-1/4 gap-2 md:px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-blue-600" onClick={openSortModal}>
                    <FaCaretDown />
                    Download
                  </button>
              </div>
            </div>

            {/* Transactions Table */}
            <div className="border rounded-lg">
              <table className="w-full text-xs md:text-lg">
                <thead>
                  <tr className="bg-gray-100 ">
                    <th className="text-center text-base text-gray-700">
                      Title
                    </th>
                    <th className="text-center text-base  text-gray-700 ">
                      Category
                    </th>
                    <th className="text-center text-base text-gray-700  md:block">
                      Transaction Method
                    </th>
                    <th className="text-center text-base  text-gray-700">
                      Date
                    </th>
                    <th className="text-center text-base text-gray-700">
                      Amount
                    </th>
                    <th className="text-center text-base text-gray-700">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transaction.map((transaction, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-gray-100 `}
                    >
                      <td className="text-center text-base p-2 text-gray-800">
                        {transaction.title}
                      </td>
                      <td className="text-center text-base p-2 text-gray-800">
                        {transaction.category}
                      </td>
                      <td className="text-center text-base p-2 hidden md:block text-gray-600">
                        {transaction.method}
                      </td>
                      <td className="text-center text-base p-2  text-gray-600">
                        {transaction.date}
                      </td>
                      <td className="text-center text-base p-2  text-green-500">
                        {transaction.amount}
                      </td>
                      <td className="p-2 md:px-6 text-base cursor-pointer text-indigo-900" onClick={openModal}>
                       <CiMenuKebab className="m-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {downloadModalOpen && <DownloadModal onClose={closeDownloadModal}/>}
        {sortModalOpen && <SortModal onClose={closeSortModal}/>}
        {modalOpen && (<IconModal onClose={closeModal} onDelete={() => { closeModal(); // Close the icon modal first
      setDeleteModalOpen(true); // Then open delete modal
    }} 
    onEdit={() => {
      closeModal(); // Close the icon modal first
      setEditModalOpen(true); // Then open edit modal
    }}
  />
)}
{deleteModalOpen && <DeleteModal onClose={closeDeleteModal}/>}
{editModalOpen && <EditModal onClose={closeEditModal}/>}
      </section>
  );
};

export default History;
