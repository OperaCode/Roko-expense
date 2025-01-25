import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import PasswordInput from "./PasswordInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Replace with your backend API URL
      const response = await fetch("https://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token or user data (example: localStorage)
        localStorage.setItem("authToken", data.token);
        navigate("/dashboard"); // Navigate to a protected route after login
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-indigo-500 background h-screen p-16 font-bodyFont">
      <div className="">
        <Link to="/">
          <div className="flex items-center gap-1 text-white hover:cursor-pointer">
            <GoArrowLeft />
            <p>Back to home Page</p>
          </div>
        </Link>

        <div className="md:flex">
          {/* HeroCard */}
          <div className="text-white space-y-10 py-20 md:flex-1">
            <div className="space-y-4 pr-12 font-headerFont flex flex-col gap-2">
              <h1 className="text-5xl font-bold">Welcome Back!</h1>
              <p className="text-2xl lg:w-8/12">
                Login to make seamless transaction records effortlessly.
              </p>
            </div>

            <div className="">
              <p className="mb-4">New to SpendSmart?</p>
              <Link to="/register">
                <p className="bg-indigo-200 text-black rounded w-1/2 p-3 text-center hover:cursor-pointer font-semibold">
                  Sign Up
                </p>
              </Link>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white p-6 rounded md:flex-1">
            <div className="text-center">
              <h1 className="md:text-3xl text-2xl font-bold font-headerFont">
                Let's Get You Back In
              </h1>
              <br />
              <p>Please fill in the following details to log into your account</p>
            </div>
            <br />

            <form onSubmit={handleSubmit} className="px-16 flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Please fill your email"
                  className="bg-indigo-100 p-2 rounded-md border-b border-indigo-900"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <div className="">
                  <PasswordInput
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-600 text-sm text-center">{error}</p>
              )}

              <div className="flex justify-center pt-10">
                <button
                  type="submit"
                  className="bg-indigo-700 hover:bg-indigo-900 text-white p-3 w-2/3 font-semibold rounded"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
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
