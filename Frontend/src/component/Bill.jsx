import React from "react";
import BillTotal from "./BillTotal";
import BillItems from "./BillItem";

function Bill({ items }) {
  const requiredItems = items.filter((item) => item.qty > 0);

  const renderedItems = requiredItems.map((item) => (
    <BillItems key={item.id} item={item} />
  ));

  return (
    <div className="w-full max-w-xl p-4 mx-auto mt-5">
      <p className="text-xl font-bold text-center mb-4">Checkout</p>
      <div className="w-full border border-gray-300 rounded-md shadow-md overflow-hidden">
        {renderedItems.length > 0 ? (
          <div className="divide-y divide-gray-300">
            {renderedItems}
            <BillTotal items={items} />
            <div className="flex justify-center mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600">
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
