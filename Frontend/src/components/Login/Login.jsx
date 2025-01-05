import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { FaRegEye } from "react-icons/fa6";
// import background from "../assets/login-bg.jpg"
import "./Login.css";

const Login = () => {
  return (
    <main className="bg-indigo-500 background p-10">
      <div className="p-6">
        <div className="flex items-center gap-1 text-white">
          <GoArrowLeft />
          <p>Back to home Page</p>
        </div>

        <div className=" md:flex justify-between">
          {/* HeroCard */}
          <div className=" text-white space-y-10 py-20">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold font-serif">Welcome Back!</h1>
              <p className="text-xl">
                Login to make sealess transaction records effortlessly.
              </p>
            </div>

            <div className="pt-4">
              <p className="mb-4">New to RokoApp?</p>
              <p className="bg-indigo-200 text-black rounded w-2/3 p-3 text-center">Sign Up</p>
            </div>
          </div>

          {/* form Card */}
          <div className=" bg-slate-200 p-10 rounded">
            <div className="text-center ">
              <h1 className="text-4xl font-bold">Login</h1><br />
              <p>
                Please fill in the following details to log into your acount
              </p>
            </div>
            <br />

            <form action="" className="">
              <div className="flex flex-col gap-4">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Pleasefill your email"
                  className="bg-indigo-100 p-3 border border-black"
                  required
                />
              </div>
              <br />
              <div className="flex flex-col gap-4">
                <label htmlFor="password" className="font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                   className="bg-indigo-100 p-3 border border-black"
                  required
                />
                <FaRegEye className="-mt-12 ml-60" />
              </div>

              <div className="flex justify-center pt-10">
                <button className="bg-indigo-700 text-white p-3 w-full rounded">
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
