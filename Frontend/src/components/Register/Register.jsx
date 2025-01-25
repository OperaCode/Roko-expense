import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "./PasswordInput";
import { GoArrowLeft } from "react-icons/go";
import {toast} from "react-toastify"

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  // const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true);

    const { firstName, lastName, email, password, confirmPassword } = formData;

    // user validation
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      // to fetch response from backend API URL
      const response = await fetch("https://localhost:3000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/login"); // Redirect to login page after successful registration
        toast.success("Registration successful")
      } else {
       toast.error("Failed to create account. Please try again.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-indigo-500 background font-bodyFont">
      <div className="p-14">
        <Link to="/">
          <div className="flex items-center gap-1 text-white hover:cursor-pointer">
            <GoArrowLeft />
            <p>Back to home Page</p>
          </div>
        </Link>

        <div className="md:flex justify-between">
          {/* HeroCard */}
          <div className="text-white space-y-10 py-20 md:flex-1">
            <div className="space-y-4 pr-12 font-headerFont">
              <h1 className="text-5xl font-bold">New Here?</h1>
              <p className="text-2xl lg:w-10/12">
                Let's get you started on your transaction journey.
              </p>
              <ul className="flex flex-col gap-2 list-disc ml-5">
                <li className="font-bodyFont text-sm md:text-base">
                  <span>📊</span> Track Your Spending in Real-Time.
                </li>
                <li className="font-bodyFont text-sm md:text-base">
                  <span>✅</span> Select categories for all expenses.
                </li>
                <li className="font-bodyFont text-sm md:text-base">
                  <span>🔒</span> Secure and Private.
                </li>
              </ul>
            </div>

            <div className="">
              <p className="mb-4">Already have an account with us?</p>
              <Link to="/login">
                <p className="bg-indigo-200 text-black rounded w-1/2 p-3 text-center hover:cursor-pointer font-semibold">
                  Login
                </p>
              </Link>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white p-6 -mt-8 rounded md:flex-1">
            <div className="text-center flex flex-col gap-4">
              <h1 className="md:text-3xl text-2xl font-bold font-headerFont">
                Take Control of Your Finances Today!
              </h1>
              <p>Track expenses and achieve your financial goals with ease.</p>
            </div>
            <br />

            <form onSubmit={handleSubmit} className="px-20 flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Please fill your first name"
                  className="bg-indigo-100 p-2 rounded-md border-b border-indigo-900"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="lastName" className="font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Please fill your last name"
                  className="bg-indigo-100 p-2 rounded-md border-b border-indigo-900"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Please fill your email"
                  className="bg-indigo-100 p-2 rounded-md border-b border-indigo-900"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <PasswordInput
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="confirmPassword" className="font-medium">
                  Confirm Password
                </label>
                <PasswordInput
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <p>
                  I agree to the{" "}
                  <Link to="/terms-and-conditions">
                    <span className="text-indigo-700 hover:text-indigo-900">
                      terms & conditions
                    </span>
                  </Link>{" "}
                  and privacy policy of SpendSmart
                </p>
              </div>

              {error && (
                <p className="text-red-600 text-sm text-center">{error}</p>
              )}

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className={`p-3 w-2/3 font-medium rounded transition-colors ${
                    isChecked
                      ? "bg-indigo-700 text-white hover:bg-indigo-800"
                      : "bg-indigo-300 text-gray-100 cursor-not-allowed"
                  }`}
                  disabled={!isChecked || loading}
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
