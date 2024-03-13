import React from "react";
import { FaUser, FaPhone, FaEnvelope, FaLock } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="wrapper bg-white p-8 rounded shadow-md">
        <form>
          <div className="mb-4 text-center text-4xl">Sign Up</div>
          <div className="mb-4 flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2">
            <FaUser className="ml-2" />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-2  focus:outline-none"
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2">
            <FaPhone className="ml-2" />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full px-4 py-2  focus:outline-none"
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2">
            <FaEnvelope className="ml-2" />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-2  focus:outline-none"
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2">
            <FaLock className="ml-2" />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2  focus:outline-none"
            />
          </div>
          <div className="mb-6 flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2">
            <FaLock className="ml-2" />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="w-full px-4 py-2  focus:outline-none"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-400 "
            >
              Sign Up
            </button>
            <p className="text-center mt-4">
              Already have an account?
              <a href="/login" className="text-blue-500 hover:underline">
                {" "}
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
