import React from "react";

function BillTotal({ items }) {
  let totalAmount = 0;
  for (let item of items) {
    totalAmount += item.price * item.qty;
  }

  return (
    <>
      <div className="flex items-center justify-between w-full font-poppins p-4 bg-gray-200 rounded-md shadow-md">
        <p className="text-lg">Total:</p>
        <p className="text-lg font-bold">Rs. {totalAmount.toFixed(2)}</p>
      </div>
    </>
  );
}

export default BillTotal;
