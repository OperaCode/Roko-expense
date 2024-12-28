import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import laptop from "../assets/laptop.png";
import singlelaptop from "../assets/single-laptop.png";

const LandingPage = () => {
  return (
    <>
      <main className="bg-indigo-500">
        <Header />
        <section className="flex flex-col text-center pt-40 ">
          <div className="text-white px-6 lg:px-36">
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
            <img src={laptop} />
          </div>
        </section>
      </main>

      <section className="p-12">
        <h2 className="font-bold">How Roko Works</h2>

        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h3 className="text-md font-semibold">Sign Up for Free</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              corporis necessitatibus totam consectetur at atque!
            </p>
          </div>

          <div>
            <img src={singlelaptop} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
