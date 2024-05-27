import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Services from "../photos/services.jpeg";
import { useLocation } from "react-router-dom";
import { useCartproductdata } from "./contexProvider/Productcontext";
import { toast } from "react-toastify";

/*
1. Update the Link in Userdashboard: Use the state property to pass the product data.
2. Access the Passed Data in the Target Component: Use the useLocation hook to access the data passed via the state.
*/

const ProductInfo = () => {

  const location = useLocation();
  const productdata = location.state.productInformation || {};

  if (!productdata) {
    return <div>No product data available</div>;
  }

  const productInformation = { ...productdata, number: 0 };

  const [cartdata, setcartdata] = useCartproductdata();
  const [quantity, setQuantity] = useState(0);

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    let mycart = [...cartdata]
    let index = mycart.findIndex(item => item._id === productInformation._id);

    if (index !== -1) {
      mycart[index].number += quantity;
    } else {
      productInformation.number = quantity;
      mycart.push(productInformation);
    }

    setcartdata(mycart);
    localStorage.setItem('Cart', JSON.stringify(mycart));
    toast.success("Item successfully added to cart!!", {
      position: "top-center"
    });
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
              <strong>Product Name:</strong> {productInformation.pname}
            </li>
            <li className="m-1">
              <strong>Price:</strong> {productInformation.price}
            </li>
            <li className="m-1">
              <strong>Rating:</strong> {productInformation.rating}
            </li>
            <li className="m-1">
              <strong>Manufacturing Date:</strong> {productInformation.manufacturing}
            </li>
            <li className="m-1">
              <strong>Expiry Date:</strong> {productInformation.expiry}
            </li>
            <li className="m-1">
              <strong>Category :</strong> {productInformation.category}
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
              className={`${quantity === 0 ? "hidden" : "block"
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
