import React from "react";

const Seller = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full my-4 bg-white p-8 rounded shadow-md">
        <h3 className="text-3xl font-bold mb-6 text-center">
          Create a business account
        </h3>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="shopName" className="text-gray-700 font-semibold">
              Shop Name
            </label>
            <input
              type="text"
              id="shopName"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Shop Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="text-gray-700 font-semibold"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="text-gray-700 font-semibold"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="locationAddress"
              className="text-gray-700 font-semibold"
            >
              Location Address
            </label>
            <input
              type="text"
              id="locationAddress"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Location Address"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="zipCode" className="text-gray-700 font-semibold">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Zip Code"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 mx-auto block text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/"
            className="text-blue-500 hover:underline hover:text-blue-700"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Seller;
