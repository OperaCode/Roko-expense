import React from "react";
import img from "./../../assets/HIW-img.png";
import Header from "../Layouts/Header";

const HowItWorks = () => {
  return (
    <section className="bg-bgColor">
      <Header />
      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-40 text-white">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-headerFont">
            How It Works
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium mt-4 font-bodyFont">
            Serious budgeting for the modern world
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 md:space-y-12 lg:space-y-12">
          {[
            {
              title: "Become a Goodbudgeter",
              reverse: false,
            },
            {
              title: "Become a Goodbudgeter",
              reverse: true,
            },
            {
              title: "Become a Goodbudgeter",
              reverse: false,
            },
          ].map((section, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                section.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } 
              items-center justify-center gap-6 md:gap-12 lg:gap-48`}
            >
              {/* Text Content */}
              <div className="w-full md:w-6/12 space-y-3 md:space-y-6">
                <h2 className="font-headerFont text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">
                  {section.title}
                </h2>
                <p className="font-bodyFont text-base sm:text-lg md:text-xl text-center md:text-left">
                  Meet Dave, As a medical doctor and the father of a growing
                  family, Dave has a lot to keep track of. With RoKo, he's able
                  to manage his finances, stay on the same page with his family,
                  and spend on what's really important in life. This is his
                  story.
                </p>
              </div>

              {/* Image */}
              <div className="w-full md:w-auto">
                <img
                  src={img}
                  alt="Dave, the goodbudgeter"
                  className="h-48 sm:h-60 md:h-72 w-auto mx-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
