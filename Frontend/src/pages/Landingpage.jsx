import React from "react";
import { FaFlask, FaIndustry, FaShippingFast, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";
import Service1Image from "../photos/Service1Image.jpeg";
import Service2Image from "../photos/Service2Image.jpeg";
import Service3Image from "../photos/Service3Image.jpeg";

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
          <FaFlask className="text-6xl mx-4 text-white" />
          <div className="text-xl text-white">
            Your one-stop solution for all chemical industry needs
          </div>
        </div>{" "}
        <div className="text-xl text-white mb-8 max-w-full sm:px-20 px-10 text-center">
          Explore our extensive collection of products, services, and equipment
          tailored to meet your requirements.
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {/* Placeholder content with icons */}
          <div className="flex flex-col items-center m-4">
            <FaIndustry className="text-white text-4xl mb-2" />
            <h3 className="text-white text-lg font-bold">Chemical Products</h3>
            <p className="text-white">
              Browse a wide range of chemical products from top manufacturers.
            </p>
          </div>
          <div className="flex flex-col items-center m-4">
            <FaShippingFast className="text-white text-4xl mb-2" />
            <h3 className="text-white text-lg font-bold">Fast Shipping</h3>
            <p className="text-white">
              Enjoy fast and reliable shipping services for your chemical
              orders.
            </p>
          </div>
          <div className="flex flex-col items-center m-4">
            <FaTools className="text-white text-4xl mb-2" />
            <h3 className="text-white text-lg font-bold">Equipment</h3>
            <p className="text-white">
              Find high-quality equipment and machinery for your chemical
              processes.
            </p>
          </div>
        </div>
      </div>

      {/*Services*/}
      <div className="bg-gray-200 py-8">
        <div className="container mx-auto text-center text-gray-800">
          <h2 className="text-4xl font-bold mb-4 ">Our Services</h2>
          <p className="text-xl mb-8">
            Explore our diverse range of high-quality chemical products sourced
            from trusted manufacturers worldwide.
          </p>
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8 mx-4">
              {/* Service 1 */}
              <div className="bg-white rounded-lg shadow-md">
                <img
                  src={Service1Image}
                  alt="Service 1"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">Service 1</h2>
                  <p className="text-gray-700 mb-4">
                    Description of Service 1. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-white rounded-lg shadow-md">
                <img
                  src={Service2Image}
                  alt="Service 2"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">Service 2</h2>
                  <p className="text-gray-700 mb-4">
                    Description of Service 2. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-white rounded-lg shadow-md">
                <img
                  src={Service3Image}
                  alt="Service 3"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">Service 3</h2>
                  <p className="text-gray-700 mb-4">
                    Description of Service 3. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
