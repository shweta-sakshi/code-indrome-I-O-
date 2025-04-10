import React from "react";
import { FaHome, FaListAlt, FaShoppingCart, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sellersidebar = ({ sidebarToggle }) => {
    return (
        <div>
            <div
                className={`${sidebarToggle ? " block" : " hidden "} w-64 mt-14
         bg-gray-800 h-full px-4 py-2 fixed`}
            >
                <div className="my-2 mb-4">
                    <h1 className="text-2xl text-white font-bold">Admin Dashboad</h1>
                </div>
                <hr />
                <ul className="mt-3 text-white font-bold">
                    <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                        <Link to="/sellerdash" className="px-3 flex">
                            <FaHome className="inline-block w-6 h-6 mr-2 mt-2"></FaHome>
                            <div className="mt-2">Home</div>
                        </Link>
                    </li>
                    <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                        <Link to="/trackorder" className="px-3 flex">
                            <FaListAlt className="inline-block w-6 h-6 mr-2 mt-2"></FaListAlt>
                            <div className="mt-2">Orders</div>
                        </Link>
                    </li>
                    <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                        <Link to="/addproduct" className="px-3 flex">
                            <FaShoppingCart className="inline-block w-6 h-6 mr-2 mt-2"></FaShoppingCart>
                            <div className="mt-2">Add Product</div>
                        </Link>
                    </li>
                    <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                        <Link to="/userprofile" className="px-3 flex">
                            <FaCog className="inline-block w-6 h-6 mr-2 mt-2"></FaCog>
                            <div className="mt-2">Setting</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sellersidebar