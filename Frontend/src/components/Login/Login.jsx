import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { FaRegEye } from "react-icons/fa6";
// import background from "../assets/login-bg.jpg"
import "./Login.css";

const Login = () => {
  return (
    <main className="bg-indigo-500 background p-10">
      <div className="p-6">
        <div className="flex items-center gap-1 mb-4 text-white">
          <GoArrowLeft />
          <p>Back to home Page</p>
        </div>

        <div className=" md:flex justify-between">
          {/* HeroCard */}
          <div className=" text-white space-y-10 py-20">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold font-serif">Welcome Back!</h1>
              <p className="text-lg">
                Login to make sealess transaction records effortlessly.
              </p>
            </div>

            <div>
              <p>New to RokoApp?</p>
              <p className="">Sign Up</p>
            </div>
          </div>

          {/* form Card */}
          <div className=" bg-slate-200 p-10">
            <div className="text-center ">
              <h1 className="text-4xl">Login</h1><br />
              <p>
                Please fill in the following details to log into your acount
              </p>
            </div>
            <br />

            <form action="" className="  gap-3">
              <div className="gap-4">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Pleasefill your email"
                  required
                />
              </div>
              <br />
              <div className="flex gap-4">
                <label htmlFor="password" className="font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  required
                />
                <FaRegEye className="-ml-10" />
              </div>

              <div className="flex justify-center pt-24">
                <button className="bg-indigo-500 p-3 w-2/3 j">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
