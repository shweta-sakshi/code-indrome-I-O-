import React from 'react';

function Rating() {
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="product bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Product Name</h2>
                <div className="rating flex mb-4">
                    <span className="star text-yellow-500" data-value="1">&#9733;</span>
                    <span className="star text-yellow-500" data-value="2">&#9733;</span>
                    <span className="star text-yellow-500" data-value="3">&#9733;</span>
                    <span className="star text-yellow-500" data-value="4">&#9733;</span>
                    <span className="star text-yellow-500" data-value="5">&#9733;</span>
                </div>
                <textarea className="review-input border border-gray-300 rounded-md p-2 w-full mb-4" placeholder="Write a review"></textarea>
                <button className="submit-review bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit Review</button>
                <div className="reviews mt-4">
                    {/* Reviews will be displayed here */}
                </div>
            </div>
        </div>
    );
}

export default Rating;
