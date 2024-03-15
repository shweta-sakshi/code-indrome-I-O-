import React from "react";
import { FaFlask } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-400 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4 flex justify-between items-center fixed w-full z-10">
        <div className="text-white text-2xl font-bold">Chemical Hub</div>
        <div>
          <Link
            to="/login"
            className="text-white font-bold py-2 px-4 rounded mr-4 hover:bg-gray-700"
          >
            Log In
          </Link>
          <Link
            to="/register"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded hover:shadow-md"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center py-16">
        <div className="text-5xl font-bold mb-8 text-white text-center mt-4">
          Welcome to Chemical Hub
        </div>
        <div className="flex justify-center items-center mb-8">
          <FaFlask className="text-6xl mr-4 text-white" />
          <div className="text-xl text-white">
            Your one-stop solution for all chemical industry needs
          </div>
        </div>
        <Link
          to="/explore"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
        >
          Explore Now
        </Link>
      </div>

      {/* Additional Content */}
      <div className="bg-gray-200 py-8">
        <div className="container mx-auto text-center text-gray-800">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies ligula non semper vehicula.
          </p>
          <img
            src="https://via.placeholder.com/400x200"
            alt="Services"
            className="mb-4 rounded-lg"
          />
          <Link
            to="/services"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded hover:shadow-md"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2024 Chemical Hub. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
