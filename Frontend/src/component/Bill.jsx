import React from "react";
import BillTotal from "./BillTotal";
import BillItems from "./BillItem";

function Bill({ items }) {
  const requiredItems = items.filter((item) => item.number > 0);

  const renderedItems = requiredItems.map((item) => (
    <BillItems key={item._id} item={item} />
  ));

  return (
    <div className="w-full max-w-xl p-4 mx-auto mt-5">
      <p className="text-xl font-bold text-center mb-4 mt-20">Checkout</p>
      <div className="w-full border border-gray-300 rounded-md shadow-md overflow-hidden">
        {renderedItems.length > 0 ? (
          <div className="divide-y divide-gray-300">
            {renderedItems}
            <BillTotal items={items} />
            <div className="flex justify-center mt-4">
              <button className="bg-blue-500 text-white text-lg font-medium font-poppins ml-6 rounded-md p-2 hover:bg-blue-800">
                Place Order
              </button>
            </div>
          </div>
        ) : (
          <p className="p-4 text-center">No items in the cart</p>
        )}
      </div>
    </div>
  );
}

export default Bill;
