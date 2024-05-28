import React, { useState } from "react";
import Dashboard from "./Dashboard";

const UserProfile = () => {
  // State variables to manage user profile data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions like sending the data to a server, etc.
    console.log("Form submitted:", {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      photo,
    });
  };

  return (
    <div>
      <div>
        <Dashboard />
      </div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
        <div className="max-w-md mx-auto m-8 p-6 bg-white rounded shadow-md mt-[70px]">
          <h2 className="text-3xl font-semibold m-4 p-2">
            User Profile Management
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="photo"
                className="block cursor-pointer text-gray-700"
              >
                Please Upload End-Use Verification Certificate:
              </label>
              <input
                type="file"
                id="photo"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
                className="border border-gray-300 rounded px-3 py-2 w-full hover:border-gray-600 hover:border-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block cursor-pointer text-gray-700"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 w-full hover:border-gray-600 hover:border-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block cursor-pointer text-gray-700"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 w-full hover:border-gray-600 hover:border-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block cursor-pointer text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 w-full hover:border-gray-600 hover:border-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block cursor-pointer text-gray-700"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 w-full hover:border-gray-600 hover:border-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 cursor-pointer"
              >
                Address:
              </label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 w-full h-24 hover:border-gray-600 hover:border-2"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
              >
                Save Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
