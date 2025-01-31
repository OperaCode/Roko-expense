import React, { useState } from "react";
import DownloadModal from "../Modals/downloadModal";

const InvoiceView = () => {
  // Categories and transaction methods
  const categories = ["Food and groceries", "Transportation", "Utilities"];
  const transactionMethods = ["Bank Transfer", "Cash", "Credit Card"];

  // Static invoice data
  const invoice = {
    number: "INV-2025-001",
    date: "2025-01-18",
    customer: {
      name: "Cheryl",
      email: "john.doe@example.com",
    },
    titles: [
      { name: "Orlando", category: "Food and groceries", method: "Bank Transfer", amount: 500.0 },
    ],
    subtotal: 500.0,
    tax: 64.0,
    total: 564.0,
  };

  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      {/* <SideBar /> */}

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-tl from-indigo-400 to-indigo-950 p-4 md:p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Back Button */}
          <button
            className="flex items-center space-x-2 text-indigo-100 hover:text-indigo-500 focus:outline-none mb-4 md:mb-0"
            onClick={() => window.history.back()}
          >
            <ion-icon name="arrow-back-outline" size="large"></ion-icon>
            <span>Back</span>
          </button>
        </div>

        <div className="max-w-3xl mx-auto p-4 md:p-6 bg-white shadow-md rounded-lg">
          <header className="text-center border-b pb-4 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Invoice</h1>
          </header>

          <div className="flex flex-col md:flex-row justify-between items-start mb-6 text-black">
            <div className="space-y-2">
              <p>
                <strong>Invoice Number:</strong> 00123
              </p>
              <p>
                <strong>Invoice Date:</strong> 2024/10/02
              </p>
            </div>
            <p className="text-left md:text-right self-start mt-4 md:mt-0">
              <strong>Status:</strong> Paid
            </p>
          </div>

          <section className="mb-6 text-black">
            <h2 className="text-lg md:text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
              Customer Information
            </h2>
            <p>
              <strong>Name:</strong> {invoice.customer.name}
            </p>
            <p>
              <strong>Email:</strong> {invoice.customer.email}
            </p>
          </section>

          <section className="mb-6 text-black">
            <h2 className="text-lg md:text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
              Titles
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-left">
                <thead>
                  <tr>
                    <th className="border border-gray-200 px-4 py-2">Title</th>
                    <th className="border border-gray-200 px-4 py-2">Category</th>
                    <th className="border border-gray-200 px-4 py-2">Method</th>
                    <th className="border border-gray-200 px-4 py-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.titles.map((title, index) => (
                    <tr key={index}>
                      <td className="border border-gray-200 px-4 py-2">{title.name}</td>
                      <td className="border border-gray-200 px-4 py-2">{title.category}</td>
                      <td className="border border-gray-200 px-4 py-2">{title.method}</td>
                      <td className="border border-gray-200 px-4 py-2">
                        ${title.amount.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
              Summary
            </h2>
            <p className="text-gray-700">
              <strong>Subtotal:</strong> ${invoice.subtotal.toFixed(2)}
            </p>
            <p className="text-gray-700">
              <strong>Tax (10%):</strong> ${invoice.tax.toFixed(2)}
            </p>
            <p className="text-gray-800 font-bold">
              <strong>Total:</strong> ${invoice.total.toFixed(2)}
            </p>
          </section>

          <div className="flex justify-end p-4">
              <button className="flex items-center space-x-2 text-white bg-indigo-500 hover:bg-indigo-700 px-4 py-2 rounded shadow" onClick={openModal}>
                <ion-icon name="download-outline" size="medium"></ion-icon>
                <span>Download</span>
              </button>
          </div>
        </div>
      </div>
      {modalOpen &&  <DownloadModal onClose={closeModal}/>}
    </div>
  );
};


export default InvoiceView;
