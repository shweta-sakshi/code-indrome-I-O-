import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import Button from "./Button";

export default function Loginform() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md">
        <div className="text-4xl text-center mb-8">Login</div>
        <div className="mb-4  ">
          <div className="flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2 ">
            <FaUser className="ml-2" />
            <input
              type="text"
              placeholder="Username"
              required
              className="w-full px-4 py-2 focus:outline-none "
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2">
            <FaLock className="ml-2" />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" className="mr-2 hover:cursor-pointer" />
          <span>Remember me</span>
        </div>
        <a
          href="#"
          className="block text-blue-500 text-center mb-4 hover:underline"
        >
          Forgot Password?
        </a>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-400 "
        >
          Login
        </button>
        <div className="text-center mt-4">
          <p>Don't have an account?</p>
        </div>
        <div className="flex items-center justify-center">
          <Button info="Register Here" />
        </div>
      </form>
    </div>
  );
}
