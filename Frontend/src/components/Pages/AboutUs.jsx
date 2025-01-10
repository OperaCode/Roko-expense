import React, { useState } from 'react';
import about from './../../assets/AboutHero.png';
import phone from './../../assets/laptop.png';
import Header from '../Layouts/Header';
import rokologo from "./../../assets/Roko-logo.png";
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };

  return (
    <section className="bg-blue-50">
  {/* Hero Section */}
  <div className="bg-gradient-to-tl from-indigo-400 to-indigo-950 pb-8">
    <Header logo={rokologo} />
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center pt-4 md:pt-12 lg:pt-48">
        {/* Text Content */}
        <div className="text-white w-full md:w-9/12 px-4 sm:px-6 md:px-2 lg:px-24 text-center md:text-left">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headerFont">
            We work together, to work for you
          </h1>
          <p className="text-base md:text-xl font-medium mt-4 font-bodyFont">
            Our mission at RoKo is to empower people to live their best financial lives. We offer our member a unique understanding of their finances and a suite of valuable services that save them time and money- ultimately giving them a leg up on their financial journey.
          </p>
        </div>
        {/* Image */}
        <div className="w-full md:w-9/12">
          <img src={about} alt="About illustration" className="w-full" />
        </div>
      </div>
    </div>
  </div>

  {/* Who are we section */}
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row justify-center items-center p-4 sm:p-6 md:py-16 md:px-2 lg:p-24 gap-8 md:gap-6 lg:gap-12">
      {/* Text Content */}
      <div className="w-full md:w-5/12 space-y-2 md:space-y-4 lg:space-y-6">
        <h2 className="font-headerFont text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Who are we?
        </h2>
        <div className="space-y-2">
          <p className="font-bodyFont text-base md:text-lg lg:text-xl">
            RoKo enables you to submit expences effortlessly in real-time, giving you full visibility and control to your finance.
          </p>
          {isExpanded && (
            <div className="space-y-2">
              {Array(4).fill(0).map((_, index) => (
                <p key={index} className="font-bodyFont text-base md:text-lg lg:text-xl">
                  RoKo enables you to submit expences effortlessly in real-time, giving you full visibility and control to your finance.
                </p>
              ))}
            </div>
          )}
          <p 
            className="font-bodyFont text-base md:text-lg lg:text-xl text-indigo-700 hover:text-indigo-900 cursor-pointer"
            onClick={handleToggle}
          >
            {isExpanded ? "Show Less..." : "Show More..."}
          </p>
        </div>
        <Link to='/register'><button className="w-full md:w-auto bg-indigo-900 text-white px-24 py-3 rounded-md font-medium font-bodyFont mt-4">
          Sign Up
        </button></Link>
      </div>
      {/* Phone Image */}
      <div className="w-full md:w-6/12 flex justify-center md:justify-end">
        <img 
          src={phone} 
          alt="Dave, the goodbudgeter" 
          className="w-full max-w-md md:max-w-none"
        />
      </div>
    </div>
  </div>
</section>
  )
}

export default AboutUs