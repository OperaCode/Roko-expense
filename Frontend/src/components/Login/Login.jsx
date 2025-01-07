import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { FaRegEye } from "react-icons/fa6";

import "./Login.css";

const Login = () => {
  return (
    <main className="bg-indigo-500 background p-16 ">
      <div className="">
        <div className="flex items-center gap-1 text-white hover:cursor-pointer">
          <GoArrowLeft />
          <p>Back to home Page</p>
        </div>

        <div className=" md:flex ">
          {/* HeroCard */}
          <div className=" text-white space-y-10 py-20 md:flex-1">
            <div className="space-y-4 pr-12">
              <h1 className="text-5xl font-bold font-serif">Welcome Back!</h1>
              <p className="text-3xl">
                Login to make seamless transaction records effortlessly.
              </p>
            </div>

            <div className="">
              <p className="mb-8">New to RokoApp?</p>
              <p className="bg-indigo-200 text-black rounded w-1/2 p-3 text-center hover:cursor-pointer font-semibold">Sign Up</p>
            </div>
          </div>

          {/* form Card */}
          <div className=" bg-slate-200 p-6 rounded md:flex-1">
            <div className="text-center ">
              <h1 className="text-4xl font-bold ">Login</h1><br />
              <p>
                Please fill in the following details to log into your acount
              </p>
            </div><br />
           

            <form action="" className="px-16">
              <div className="flex flex-col gap-4">
                <label htmlFor="email" className="font-semibold">
                  Email 
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Please fill your email"
                  className="bg-indigo-100 p-3 border border-black"
                  required
                />
              </div>
             
              <div className="flex flex-col gap-4">
                <label htmlFor="password" className="font-semibold">
                  Password
                </label>
                <div className="">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                   className="bg-indigo-100 p-3 border border-black w-full"
                  required
                />
                <FaRegEye className="-mt-8 right-48 absolute flex justify-end  cursor-pointer " />
                </div>
              </div>

              <div className="flex justify-center pt-10">
                <button className="bg-indigo-700 text-white p-3 w-2/3 font-semibold rounded">
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
