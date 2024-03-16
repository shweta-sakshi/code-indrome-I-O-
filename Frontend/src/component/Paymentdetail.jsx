import React from "react";

const Paymentdetail = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100  min-h-screen">
      <div className="container mx-auto my-4 flex justify-center items-center">
        <form
          action=""
          className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md"
        >
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">Billing Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="Name"
                  className="cursor-pointer text-sm font-semibold"
                >
                  Full Name:
                </label>
                <input
                  type="text"
                  id="Name"
                  placeholder="John Doe"
                  className="input-box border-2 p-1 my-2 hover:border-black "
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="cursor-pointer text-sm font-semibold"
                >
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="example@gmail.com"
                  className="input-box border-2 p-1 my-2 hover:border-black "
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="address"
                  className="cursor-pointer text-sm font-semibold"
                >
                  Address:
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Street - House No - Locality"
                  className="input-box border-2 p-1 my-2 hover:border-black "
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="city"
                  className="cursor-pointer text-sm font-semibold"
                >
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Mumbai"
                  className="input-box border-2 p-1 my-2 hover:border-black "
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="state"
                  className="cursor-pointer text-sm font-semibold"
                >
                  State:
                </label>
                <input
                  type="text"
                  id="state"
                  placeholder="India"
                  className="input-box border-2 p-1 my-2 hover:border-black "
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="zip"
                  className="cursor-pointer text-sm font-semibold"
                >
                  Zip Code:
                </label>
                <input
                  type="text"
                  id="zip"
                  placeholder="123456"
                  className="input-box border-2 p-1 my-2 hover:border-black "
                />
              </div>
            </div>
                  </div>
                  <hr />

          <div className="mb-8">
            <h3 className="text-3xl font-bold my-6">Payment Mode</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="card"
                  className="cursor-pointer text-sm font-semibold"
                >
                  Name on Card:
                </label>
                <input
                  type="text"
                  id="card"
                  placeholder="Mr. Johnson"
                  className="input-box border-2 p-1 my-2 hover:border-black "
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="cardNo"
                  className="cursor-pointer text-sm font-semibold"
                >
                  Credit Card Number:
                </label>
                <input
                  type="text"
                  id="cardNo"
                  placeholder="1111-2222-3333-4444"
                  className="input-box border-2 p-1 my-2 hover:border-black "
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="exp"
                  className="cursor-pointer text-sm font-semibold"
                >
                  Expiry Month:
                </label>
                <input
                  type="text"
                  id="exp"
                  placeholder="April"
                  className="input-box border-2 p-1 my-2 hover:border-black "
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="expYr"
                  className="cursor-pointer text-sm font-semibold"
                >
                  Expiry Year:
                </label>
                <input
                                  type="text"
                                  id="expYr"
                  placeholder="2026"
                  className="input-box border-2 p-1 my-2 hover:border-black "
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="cvv"
                  className="cursor-pointer text-sm font-semibold"
                >
                  CVV:
                </label>
                <input
                  type="text"
                  id="cvv"
                  placeholder="123"
                  className="input-box border-2 p-1 my-2 hover:border-black "
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Proceed to Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Paymentdetail;
