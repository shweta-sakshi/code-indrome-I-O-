import React from "react";
import { FaHome,FaRegFileAlt,FaPoll,FaRegEnvelope } from "react-icons/fa";

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div>
      <div className={`${sidebarToggle? "hidden":"block"} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
        <div className="my-2 mb-4">
          <h1 className="text-2xl text-white font-bold">Admin Dashboad</h1>
        </div>
        <hr />
        <ul className="mt-3 text-white font-bold">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <a href="" className="px-3 flex">
              <FaHome className="inline-block w-6 h-6 mr-2 mt-2"></FaHome>
              <div className="mt-2">Home</div>
            </a>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <a href="" className="px-3 flex">
              <FaRegFileAlt className="inline-block w-6 h-6 mr-2 mt-2"></FaRegFileAlt>
              <div className="mt-2">Orders</div>
            </a>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <a href="" className="px-3 flex">
              <FaPoll className="inline-block w-6 h-6 mr-2 mt-2"></FaPoll>
              <div className="mt-2">Report</div>
            </a>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <a href="" className="px-3 flex">
              <FaRegEnvelope className="inline-block w-6 h-6 mr-2 mt-2"></FaRegEnvelope>
              <div className="mt-2">Inbox</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
