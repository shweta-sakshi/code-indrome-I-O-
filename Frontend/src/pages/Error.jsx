import React from "react";

const Error = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
        <svg
          className="h-6 w-6 mr-2 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-18-18m18 0L3 21"
          ></path>
        </svg>
        <p className="text-lg font-semibold">
          Error occurred. Wrong Route.
        </p>
      </div>
    </div>
  );
};

export default Error;
