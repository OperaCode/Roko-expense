import React from 'react'
import Header from '../Layouts/Header'

const TandC = () => {
  return (
    <section className="bg-bgColor">
    <Header />
    <div className="container mx-auto px-4 py-8 md:py-16 lg:py-40">
      {/* Header Section */}
      <div className="text-white text-center mb-8 md:mb-12 mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-headerFont">
          Terms And Conditions
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-medium mt-4 font-bodyFont">
          This app is operated by appName. We are registered in Nigeria. The following terms and condition are provided to give users a good experience and to safely protect them and their data
        </p>
      </div>
  
      {/* Terms Content */}
      <div className="text-white space-y-6 md:space-y-8">
        {/* Subheading */}
        <h2 className="text-xl sm:text-2xl font-headerFont font-bold px-4 md:px-8 lg:px-28">
          Please, read the terms and condition carefully
        </h2>
  
        {/* Terms Paragraphs */}
        <div className="mx-auto max-w-5xl px-4">
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <p 
                key={index} 
                className="text-base sm:text-lg lg:text-xl font-medium font-bodyFont"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem numquam quam recusandae aut iure nemo quibusdam. Assumenda, cumque sapiente. Magni consectetur ipsum corporis voluptates dolorum obcaecati officiis suscipit at exercitationem?
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TandC