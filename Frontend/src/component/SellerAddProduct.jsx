import React, { useState } from "react";
import Dashboard from "./Dashboard";

const SellerAddProduct = () => {
  const [productData, setProductData] = useState({
    productName: "",
    companyName: "",
    price: "",
    quantity: "",
    manufacturingDate: "",
    expiryDate: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setProductData({
      ...productData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <Dashboard/>
      <div className="w-full lg:w-1/3 md:w-1/2 sm:w-3/4 p-4 m-auto">
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-16">
            {/* Product Image */}
            <label htmlFor="image" className="cursor-pointer block">
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                className="hidden"
              />
              <div className="w-full h-64 object-cover bg-gray-200 flex justify-center items-center cursor-pointer hover:border-2 hover:border-black">
                {productData.image ? (
                  <img
                    src={URL.createObjectURL(productData.image)}
                    alt="Product"
                    className="w-full h-full object-cover hover:opacity-75"
                  />
                ) : (
                  <span className="text-gray-500 ">Upload Image</span>
                )}
              </div>
            </label>
            <div className="p-4">
              {/* Product Name */}
              <div className="mb-2">
                <label
                  htmlFor="productName"
                  className="text-lg font-semibold cursor-pointer"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  value={productData.productName}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  className="w-full px-3 py-2 border rounded mt-1 hover:border-2 hover:border-black"
                />
              </div>
              {/* Company Name */}
              <div className="mb-2">
                <label
                  htmlFor="companyName"
                  className="text-gray-600 cursor-pointer"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={productData.companyName}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  className="w-full px-3 py-2 border rounded mt-1 hover:border-2 hover:border-black"
                />
              </div>
              {/* Price */}
              <div className="mb-2">
                <label
                  htmlFor="price"
                  className="text-gray-800 font-semibold cursor-pointer"
                >
                  Price[ In Rs ]
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                  className="w-full px-3 py-2 border rounded mt-1 hover:border-2 hover:border-black"
                />
              </div>
              {/* Quantity */}
              <div className="mb-2">
                <label
                  htmlFor="quantity"
                  className="text-gray-600 cursor-pointer"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={productData.quantity}
                  onChange={handleChange}
                  placeholder="Enter quantity"
                  className="w-full px-3 py-2 border rounded mt-1 hover:border-2 hover:border-black"
                />
              </div>
              {/* Manufacturing and Expiry Date */}
              <div className="flex justify-between mb-2">
                <div>
                  <label
                    htmlFor="manufacturingDate"
                    className="text-gray-600 cursor-pointer"
                  >
                    Manufacturing Date
                  </label>
                  <input
                    type="date"
                    id="manufacturingDate"
                    name="manufacturingDate"
                    value={productData.manufacturingDate}
                    onChange={handleChange}
                    placeholder="Enter manufacturing date"
                    className="w-full px-3 py-2 border rounded mt-1 hover:border-2 hover:border-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="expiryDate"
                    className="text-gray-600 cursor-pointer"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    id="expiryDate"
                    name="expiryDate"
                    value={productData.expiryDate}
                    onChange={handleChange}
                    placeholder="Enter expiry date"
                    className="w-full px-3 py-2 border rounded mt-1 hover:border-2 hover:border-black"
                  />
                </div>
              </div>
              {/* Add to Cart Button */}
              <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
              >
                Add item
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerAddProduct;
