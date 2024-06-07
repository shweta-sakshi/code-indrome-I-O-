import React from 'react'
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa'

const Sellernavbar = ({ sidebarToggle, setSidebarToggle }) => {
    return (
        <div className="bg-gray-800 px-4 py-3 flex justify-between w-full fixed">
            <div className="flex items-center text-xl">
                <FaBars
                    className="text-white me-4 cursor-pointer"
                    onClick={() => setSidebarToggle(!sidebarToggle)}
                />
                <span className="text-white font-semibold">Chemical Hub</span>
            </div>
            <div className="flex items-center gap-x-5">
                <div className="relative md:w-64 ">
                    <span className="relative md:absolute inset-y-0 left-0 flex item-center pl-2">
                        <button className="p-1 focus:outline-none text-white md:text-black">
                            <FaSearch />
                        </button>
                    </span>
                    <input
                        type="text"
                        className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
                        placeholder="Search..."
                    />
                </div>
                <div className="text-white">
                    <FaBell className="w-6 h-6 hover:cursor-pointer" />
                </div>
                <div className="relative">
                    <button className="text-white group">
                        <FaUserCircle className="w-6 h-6 mt-1" />
                        <div className="bg-white text-black z-10 hidden absolute rounded-lg shadow w-32 group-focus:block top-full right-0">
                            <ul className="py-2 text-sm">
                                <li>
                                    <a
                                        href="/userprofile"
                                        className="block px-4 py-2 hover:bg-gray-200"
                                    >
                                        <div>Profile</div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/userprofile"
                                        className="block px-4 py-2 hover:bg-gray-200"
                                    >
                                        <div>Settings</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="block px-4 py-2 hover:bg-gray-200">
                                        <div>Log Out</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sellernavbar