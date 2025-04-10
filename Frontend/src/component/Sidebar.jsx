import React from "react";
import { FaHome, FaListAlt, FaShoppingCart, FaCog } from "react-icons/fa";

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div>
      <div
        className={`${sidebarToggle ? "block" : "hidden"} w-64 mt-14
         bg-gray-800 h-full px-4 py-2 fixed`}
      >
        <div className="my-2 mb-4">
          <h1 className="text-2xl text-white font-bold">Admin Dashboad</h1>
        </div>
        <hr />
        <ul className="mt-3 text-white font-bold">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <a href="/userdash" className="px-3 flex">
              <FaHome className="inline-block w-6 h-6 mr-2 mt-2"></FaHome>
              <div className="mt-2">Home</div>
            </a>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <a href="/trackorder" className="px-3 flex">
              <FaListAlt className="inline-block w-6 h-6 mr-2 mt-2"></FaListAlt>
              <div className="mt-2">Orders</div>
            </a>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <a href="/cart" className="px-3 flex">
              <FaShoppingCart className="inline-block w-6 h-6 mr-2 mt-2"></FaShoppingCart>
              <div className="mt-2">Cart</div>
            </a>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <a href="/userprofile" className="px-3 flex">
              <FaCog className="inline-block w-6 h-6 mr-2 mt-2"></FaCog>
              <div className="mt-2">Setting</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
