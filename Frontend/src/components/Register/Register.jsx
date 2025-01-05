import React from 'react'
import "../Login/Login.css"
import { GoArrowLeft } from "react-icons/go";
import { FaRegEye } from "react-icons/fa6";

const Register = () => {
  return (
    <main className="bg-indigo-500 background p-10 ">
          <div className="p-16 ">
            <div className="flex items-center gap-1 text-white hover:cursor-pointer">
              <GoArrowLeft />
              <p>Back to home Page</p>
            </div>
    
            <div className=" md:flex justify-between">
              {/* HeroCard */}
              <div className=" text-white space-y-10 py-20 md:flex-1">
                <div className="space-y-4 pr-12">
                  <h1 className="text-5xl font-bold font-serif">New Here?</h1>
                  <p className="text-3xl">
                    Lets get you started on your transaction journey.
                  </p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate delectus omnis asperiores consequuntur nulla dicta voluptas aspernatur doloremque. Ab, laborum!</p>
                </div>
    
                <div className="">
                  <p className="mb-8">Already have an account with us?</p>
                  <p className="bg-indigo-200 text-black rounded w-1/2 p-3 text-center hover:cursor-pointer font-semibold">Login</p>
                </div>
              </div>
    
              {/* form Card */}
              <div className=" bg-slate-200 p-6 -mt-8 rounded md:flex-1">
                <div className="text-center ">
                  <h1 className="text-4xl font-bold">Create an account</h1>
                  <p>
                    Please fill in the following details to log into your acount
                  </p>
                </div><br />

                <div className='border-solid rounded-2xl'>
                  <img src="" alt="" />
                </div>
               
    
                <form action="" className="px-20">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="fname" className="font-semibold">
                     First name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      placeholder="Please fill your first name"
                      className="bg-indigo-100 p-2 border border-black"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="lastname" className="font-semibold">
                     Last name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      placeholder="Please fill your last name"
                      className="bg-indigo-100 p-2 border border-black"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-semibold">
                   Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Please fill your email"
                      className="bg-indigo-100 p-2 border border-black"
                      required
                    />
                  </div>
                 
                  <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="font-semibold">
                      Password
                    </label>
                    <div className="">
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter password"
                       className="bg-indigo-100 p-2 border border-black w-full"
                      required
                    />
                    <FaRegEye className="-mt-8 right-40 absolute flex justify-end  cursor-pointer " />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="password2" className="font-semibold">
                      Confirm Password
                    </label>
                    <div className="">
                    <input
                      type="password2"
                      id="password2"
                      placeholder="Enter password"
                       className="bg-indigo-100 p-2 border border-black w-full"
                      required
                    />
                    <FaRegEye className="-mt-8 right-40 absolute flex justify-end  cursor-pointer " />
                    </div>
                  </div>

                  <div className='flex gap-2 mt-4'>
                    <input type="checkbox" />
                    <p>I agree to the terms & conditions and privacy policy of RokoApp</p>
                  </div>
    
                  <div className="flex justify-center pt-10">
                    <button className="bg-indigo-700 text-white p-3 w-2/3 font-semibold rounded">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
  )
}

export default Register