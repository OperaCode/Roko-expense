import React from "react";
import SideBar from "../Layouts/SideBar";
import { Link } from "react-router-dom";


const InvoiceView = () => {
  // Static invoice data
  const invoice = {
    number: "INV-2025-001",
    date: "2025-01-18",
    customer: {
      name: "John Doe",
      email: "john.doe@example.com",
      address: "123 Elm Street, Springfield",
    },
    items: [
      { name: "Service fee", quantity: 1, price: 500.0 },
      { name: "Machinery", quantity: 1, price: 120.0 },
      { name: "Domain Registration", quantity: 1, price: 20.0 },
    ],
    subtotal: 640.0,
    tax: 64.0,
    total: 704.0,
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-tl from-indigo-400 to-indigo-950 p-6 text-white">
      <div className="flex justify-between items-center mb-6">
            {/* Back Button */}
            <button
              className="flex items-center space-x-2 text-indigo-100 hover:text-indigo-500 focus:outline-none"
              onClick={() => window.history.back()}
            >
              <ion-icon name="arrow-back-outline" size="large"></ion-icon>
              <span>Back</span>
            </button>

            {/* Profile Section */}
            <div className="flex items-center space-x-3">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-indigo-500"
              />
              <button className="text-indigo-500 hover:text-indigo-700 focus:outline-none">
                <ion-icon name="create-outline" size="large"></ion-icon>
              </button>
            </div>
          </div>
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
         

          <header className="text-center border-b pb-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Invoice</h1>
          </header>

          <div className="flex justify-between items-start mb-6 text-black">
            <div className="space-y-2">
              <p><strong>Invoice Number:</strong> 00123</p>
              <p><strong>Invoice Date:</strong> 2024/10/02</p>
              <p><strong>Due Date:</strong> 2024/10/02</p>
            </div>
            <p className="text-right self-start"><strong>Status:</strong> Paid</p>
          </div>

          <section className="mb-6 text-black">
            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Customer Information</h2>
            <p><strong>Name:</strong> {invoice.customer.name}</p>
            <p><strong>Email:</strong> {invoice.customer.email}</p>
            <p><strong>Address:</strong> {invoice.customer.address}</p>
          </section>

          <section className="mb-6 text-black">
            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Items</h2>
            <table className="w-full border-collapse border border-gray-200 text-left">
              <thead>
                <tr>
                  <th className="border border-gray-200 px-4 py-2">Item</th>
                  <th className="border border-gray-200 px-4 py-2">Quantity</th>
                  <th className="border border-gray-200 px-4 py-2">Price</th>
                  <th className="border border-gray-200 px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-200 px-4 py-2">{item.name}</td>
                    <td className="border border-gray-200 px-4 py-2">{item.quantity}</td>
                    <td className="border border-gray-200 px-4 py-2">${item.price.toFixed(2)}</td>
                    <td className="border border-gray-200 px-4 py-2">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Summary</h2>
            <p className="text-gray-700"><strong>Subtotal:</strong> ${invoice.subtotal.toFixed(2)}</p>
            <p className="text-gray-700"><strong>Tax (10%):</strong> ${invoice.tax.toFixed(2)}</p>
            <p className="text-gray-800 font-bold"><strong>Total:</strong> ${invoice.total.toFixed(2)}</p>
          </section>

          {/* <button>Download </button> */}
          <div className="flex justify-end p-4">
  <Link to="/modal">
    <button className="flex items-center space-x-2 text-white bg-indigo-500 hover:bg-indigo-700 px-4 py-2 rounded shadow">
      <ion-icon name="download-outline" size="medium"></ion-icon>
      <span>Download</span>
    </button>
  </Link>
</div>


         
        </div>
      </div>
    </div>
  );
};

export default InvoiceView;
