import React from "react";
import Header from "../Layouts/Header";
import { Link } from "react-router-dom";
import avatar from './../../assets/avatar.png'
import add from './../../assets/Add-Expense.png'
import invoice from './../../assets/invoice.png'
import security from './../../assets/security.png'

const HowItWorks = () => {
  return (
    <section className="bg-bgColor">
      <Header />
      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-40 text-white">
  {/* Header Section */}
  <div className="text-center mb-8 md:mb-16">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-headerFont">
      Simplify your finances with ease
    </h1>
    <p className="text-lg md:text-xl font-medium mt-4 font-bodyFont">
      Track, manage, and optimize your expenses in just a few clicks.
    </p>
  </div>

  {/* Introduction Section */}
  <div className="flex justify-center mb-8 md:mb-16">
    <div className="flex flex-col gap-4 w-full md:w-11/12">
      <h3 className="font-headerFont text-xl md:text-2xl lg:text-3xl font-bold">
        Introduction
      </h3>
      <div className="flex flex-col gap-2">
        <p className="font-bodyFont text-sm md:text-base lg:text-lg">
          Managing expenses shouldn't be complicated. Our platform makes it effortless to track, manage, and optimize your finances with intuitive tools and automated solutions. Whether you're a business owner or managing personal finances, we provide the clarity and control you need to make smarter financial decisions. Follow this guide to understand how to make the most of our expense tracker app.
        </p>
        <p className="font-bodyFont text-sm md:text-base lg:text-lg">
          Ready to take control? <Link to='/register'><span className="cursor-pointer font-bold text-indigo-700 hover:text-indigo-900">Get Started</span></Link>
        </p>
      </div>
    </div>
  </div>

  {/* Features Grid */}
  <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 w-full md:w-11/12">
      {/* Getting Started Section */}
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 w-full">
          <div>
            <img className="" src={avatar} alt="Getting Started" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-headerFont font-bold text-xl md:text-2xl">
              Getting Started
            </h3>
            <ul className="flex flex-col gap-2 list-disc ml-5">
              <li className="font-bodyFont text-sm md:text-base">Create a new account or log in using the required credentials.</li>
              <li className="font-bodyFont text-sm md:text-base">Set up your profile to the taste of your choice.</li>
              <li className="font-bodyFont text-sm md:text-base">Navigate to your expense dashboard and start keeping track of your finances</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Adding Expense Section */}
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 w-full">
          <div>
            <img className="" src={add} alt="Adding Expense" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-headerFont font-bold text-xl md:text-2xl">
              Adding Expense
            </h3>
            <ul className="flex flex-col gap-2 list-disc ml-5">
              <li className="font-bodyFont text-sm md:text-base"><span className="font-bold">Quick Add:</span> Tap the "Add Expense" button to quickly record expenses.</li>
              <li className="font-bodyFont text-sm md:text-base"><span className="font-bold">Categories:</span> Assign transactions to pre-set or custom categories.</li>
              <li className="font-bodyFont text-sm md:text-base"><span className="font-bold">Method:</span> Add expense method to keep track of the methods for each expense</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Insights & Invoice Section */}
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 w-full">
          <div>
            <img className="" src={invoice} alt="Insights and Invoice" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-headerFont font-bold text-xl md:text-2xl">
              Insights & Invoice
            </h3>
            <ul className="flex flex-col gap-2 list-disc ml-5">
              <li className="font-bodyFont text-sm md:text-base"><span className="font-bold">Visual Reports:</span> View your spending habits through charts and graphs.</li>
              <li className="font-bodyFont text-sm md:text-base"><span className="font-bold">Custom Invoice:</span> Generate invoice based on date ranges, categories, or payment methods.</li>
              <li className="font-bodyFont text-sm md:text-base"><span className="font-bold">Download Invoice:</span> Download invoice for use.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Security & Privacy Section */}
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 w-full">
          <div>
            <img className="" src={security} alt="Security and Privacy" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-headerFont font-bold text-xl md:text-2xl">
              Security & Privacy
            </h3>
            <ul className="flex flex-col gap-2 list-disc ml-5">
              <li className="font-bodyFont text-sm md:text-base"><span className="font-bold">Data Encryption:</span> Your financial data is encrypted and securely stored.</li>
              <li className="font-bodyFont text-sm md:text-base"><span className="font-bold">Secured Information:</span> Your informations are secured and cannot be used or transferred by us</li>
              <li className="font-bodyFont text-sm md:text-base"><span className="font-bold">Update Informations:</span> Update informations with ease at your convenience.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default HowItWorks;
