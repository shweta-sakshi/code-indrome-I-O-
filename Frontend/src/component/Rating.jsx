import React, { useState } from "react";
import Dashboard from "./Dashboard";

function Rating() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div>
      <div>
        <Dashboard />
      </div>
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="product bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Product Name</h2>
          <div className="rating flex mb-4 text-2xl cursor-pointer">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                className={`star text-${
                  rating >= value ? "yellow" : "white"
                }-500`}
                onClick={() => handleStarClick(value)}
              >
                &#9733;
              </span>
            ))}
          </div>
          <textarea
            className="review-input border border-gray-300 rounded-md p-2 w-full mb-4"
            placeholder="Write a review"
          ></textarea>
          <button className="submit-review bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Submit Review
          </button>
          <div className="reviews mt-4">
            {/* Reviews will be displayed here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
