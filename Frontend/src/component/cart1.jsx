import React from "react";
import CartItem from "./CartItem";
import Dashboard from "./Dashboard";

function Cart({ items, removeAllFromCart }) {
  const requiredItems = items.filter((item) => {
    return item.qty > 0;
  });

  const renderedItems = requiredItems.map((item) => {
    return (
      <CartItem
        item={item}
        key={item.id}
        removeAllFromCart={removeAllFromCart}
      />
    );
  });

  return (
    <>
      <div className="w-1/2 p-4 flex flex-col items-center justify-center gap-4 m-5 border-r-2 border-black">
        <p className="font-poppins text-xl font-bold">Your Items in Cart</p>
        <div className="flex flex-col items-center justify-center gap-4 w-full px-5 mt-3">
          {renderedItems}
        </div>
      </div>
    </>
  );
}

export default Cart;
