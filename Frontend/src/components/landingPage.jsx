import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import laptopAndPhone from "../assets/laptop.png";
import singlelaptop from "../assets/single-laptop.png";
import laptopcafe from "../assets/laptop-cafe.png";
import laptopterrace from "../assets/laptop-terrace.png"
import holdingPhone from "../assets/holdingPhone.png";
import rokologo from "../assets/Roko-logo.png";

const LandingPage = () => {
  return (
    <>
      <main className="bg-gradient-to-tl from-indigo-400 to-indigo-950 pb-4">
        <Header logo ={rokologo}/>
        <section className="flex flex-col text-center lg:pt-40 ">
          <div className="text-white lg:px-36">
            <h1 className="font-bold text-5xl">
              The Smart Expense Management App that Works for you
            </h1>
            <br />
            <p>
              Mananging money is hard, but you don't have to it alone. Roko
              empowers you and manage your expenses.
            </p>
          </div>
          <div className="flex justify-center mt-12">
            <img src={laptopAndPhone} />
          </div>
        </section>
      </main>

      <section className="py-8 px-10">
        <h2 className="font-bold text-4xl ">How Roko Works</h2>
    

        <div className="md:flex ">

          <div className="flex-1 space-y-4 mt-4 justify-center">

            {/* image and description container */}
            <div className="flex gap-2 ">
              {/* image container beside words */}
              <div className="Image-container">
                <img src={laptopcafe} alt="" />
              </div>

              {/* Text Container for words beside images */}
              <div className="">
                <h3 className="text-md font-semibold">Sign Up for Free</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  corporis necessitatibus totam consectetur at atque!
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              {/* image container beside words */}
              <div className="Image-container">
                <img src={holdingPhone} alt="" />
              </div>

              {/* Text Container for words beside images */}
              <div className="">
                <h3 className="text-md font-semibold">Make a Monthly Plan</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  corporis necessitatibus totam consectetur at atque!
                </p>
              </div>
            </div>

            <div className="flex gap-2 ">
              {/* image container beside words */}
              <div className="Image-container">
                <img src={laptopterrace} alt="" />
              </div>

              {/* Text Container for words beside images */}
              <div className="">
                <h3 className="text-md font-semibold">Enjoy less Stress</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  corporis necessitatibus totam consectetur at atque!
                </p>
              </div>
            </div>

            <button className="bg-indigo-900 p-3 text-white rounded w-2/4 ml-24">Sign Up for Free</button>

          </div>

          {/* single laptop image */}
          <div className="md:flex-1">
            <img src={singlelaptop} className="lg:-mt-10"/>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
