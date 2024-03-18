import React, { useState } from "react";
import Dashboard from "./Dashboard";

const SellerAddProduct = () => {
  const [productData, setProductData] = useState({
    pname: "",
    price: "",
    category: "",
    description: "",
    quantity: "",
    manufacturing: "",
    expiry: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const { pname, price, category, description, quantity, manufacturing, expiry } = productData;
    const file = image

    //for file we should use formdata
    const formData = new FormData();
    formData.append("pname", pname);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("quantity", quantity);
    formData.append("manufacturing", manufacturing);
    formData.append("expiry", expiry);
    formData.append("file", file);


    if (pname === "") {
      toast.error("Product name is required!", {
        position: "top-center"
      });
    } else if (price === "") {
      toast.warning("Price is required!", {
        position: "top-center"
      });
    } else if (category === "") {
      toast.warning("category is required!", {
        position: "top-center"
      });
    } else if (quantity === "") {
      toast.warning("quantity is required!", {
        position: "top-center"
      });
    } else if (manufacturing === "") {
      toast.warning("manufactuting date is required!", {
        position: "top-center"
      });
    } else if (expiry === "") {
      toast.warning("expiry date is required!", {
        position: "top-center"
      });
    } else {

      //getting value of token as createPost require authentication.
      let token = localStorage.getItem("sellersdatatoken");

      const productData = await fetch("/api/create-product", {
        method: "POST",
        headers: {
          "authorization": token
        },
        body: formData
      });

      const productRes = await productData.json();
      if (productRes.status === 201) {
        toast.success("Post Created (❁´◡`❁)😊", {
          position: "top-center"
        });
        setInpval({ ...inpval, title: "", body: "", photo: "" });
        handleClose()
      } else if (productRes.status === 422) {
        toast.error("Try again with all the details!!", {
          position: "top-center"
        });
        setInpval({ ...inpval, title: "", body: "", photo: "" });
      } else {
        toast.error("try again!!!", {
          position: "top-center"
        });
        setInpval({ ...inpval, title: "", body: "", photo: "" });
      }
    }
  };

  return (
    <div>
      <div>
        <Dashboard />
      </div>
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
                  name="pname"
                  value={productData.pname}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  className="w-full px-3 py-2 border rounded mt-1 hover:border-2 hover:border-black"
                />
              </div>
              {/* Category of product  */}
              <div className="mb-2">
                <label
                  htmlFor="category"
                  className="text-gray-600 cursor-pointer"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={productData.category}
                  onChange={handleChange}
                  placeholder="Enter category of product"
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
                    htmlFor="manufacturing"
                    className="text-gray-600 cursor-pointer"
                  >
                    Manufacturing Date
                  </label>
                  <input
                    type="date"
                    id="manufacturing"
                    name="manufacturing"
                    value={productData.manufacturing}
                    onChange={handleChange}
                    placeholder="Enter manufacturing date"
                    className="w-full px-3 py-2 border rounded mt-1 hover:border-2 hover:border-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="expiry"
                    className="text-gray-600 cursor-pointer"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    id="expiry"
                    name="expiry"
                    value={productData.expiry}
                    onChange={handleChange}
                    placeholder="Enter expiry date"
                    className="w-full px-3 py-2 border rounded mt-1 hover:border-2 hover:border-black"
                  />
                </div>
              </div>
              {/* Description */}
              <div className="mb-2">
                <label
                  htmlFor="description"
                  className="text-lg font-semibold cursor-pointer"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={productData.description}
                  onChange={handleChange}
                  placeholder="Dscription of product"
                  className="w-full px-3 py-2 border rounded mt-1 hover:border-2 hover:border-black"
                />
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
