import React from "react";
// import background from "../assets/login-bg.jpg"

const Login = () => {
  return (
    <main className="bg-indigo-500 ">
      <div className="p-20 justify-between">
        <div>
          <p className="my-6 text-white">
            <span></span>Back to home page
          </p>
        </div>
        <div className="flex justify-between">
          <div className=" space-y-5 text-white px-6">
            <h1 className="font-bold text-5xl ">Welcome Back!</h1>
            <h3 className="text-md">Login to make seamless transaction records effortlessly</h3>

            <p>New to Roko ?</p>
            <button className="bg-slate-200 text-black p-2 w-2/3">Sign up</button>
          </div>

          <div className=" bg-slate-100 p-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Login</h1>
              <p>
                Please fill in the following details to log into your account
              </p>
            </div>

            <form action="" className=" ">
              <div className=" md:flex-col">
                <label htmlFor="email" className="font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Please enter email address"
                  required
                  className="p-1"
                />
                <label htmlFor="password" className="font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="p-1"
                  required
                />
              </div>
              <button className="bg-indigo-600 text-white p-3 w-full">Login</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
