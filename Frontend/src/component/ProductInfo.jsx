import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Services from "../photos/services.jpeg";

const ProductInfo = (data) => {
  const image = data.image;
  const [quantity, setQuantity] = useState(0);

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    console.log(`Product added to cart with quantity: ${quantity}`);
  };

  // Function to handle incrementing the quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle decrementing the quantity
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div>
      <div>
        <Dashboard />
      </div>
      <div className="flex justify-center items-center h-screen ">
        <div className="max-w-md rounded overflow-hidden mt-16 ">
          <div>
            <img src={Services} alt="product image" className="w-full" />
          </div>
          <ul className="border-t-2 border-gray-400 mt-2">
            <li className="m-1">
              <strong>Product Name:</strong> {data.name}
            </li>
            <li className="m-1">
              <strong>Price:</strong> {data.price}
            </li>
            <li className="m-1">
              <strong>Rating:</strong> {data.rating}
            </li>
            <li className="m-1">
              <strong>Manufacturing Date:</strong> {data.mnu}
            </li>
            <li className="m-1">
              <strong>Expiry Date:</strong> {data.exp}
            </li>
            <li className="m-1">
              <strong>Category :</strong> {data.category}
            </li>
            <li className="m-1">
              <strong>Seller name :</strong> {data.seller}
            </li>
            <li className="m-1 flex">
              <strong>Set Quantity :</strong>
              <div>
                <button
                  onClick={decrementQuantity}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-l ml-2"
                >
                  -
                </button>
                <span className="bg-gray-200 py-2 px-4">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-r"
                >
                  +
                </button>
              </div>
            </li>
          </ul>
          <div className="flex justify-end items-center mt-6">
            <button
              onClick={handleAddToCart}
              className={`${
                quantity === 0 ? "hidden" : "block"
              } bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
