import React from "react";
import BillTotal from "./BillTotal";
import BillItems from "./BillItem";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function Bill({ items }) {

  // This will filter out the items that are not in the cart.
  const requiredItems = items.filter((item) => item.number > 0);
  const renderedItems = requiredItems.map((item) => (
    <BillItems key={item._id} item={item} />
  ));

  // This function will handle the payment process.
  const handlePayment = async () => {
    try {
      const token = localStorage.getItem('usersdatatoken');
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": token
        },
        body: JSON.stringify({
          items: items.map(item => ({
            pname: item.pname,
            price: item.price,
            quantity: item.number,
          })),
        }),
      });

      const { id } = await response.json();
      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({ sessionId: id });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  }

  // This will render the bill.
  return (
    <div className="w-full max-w-xl p-4 mx-auto mt-5">
      <p className="text-xl font-bold text-center mb-4 mt-20">Checkout</p>
      <div className="w-full border border-gray-300 rounded-md shadow-md overflow-hidden">
        {renderedItems.length > 0 ? (
          <div className="divide-y divide-gray-300">
            {renderedItems}
            <BillTotal items={items} />
            <div className="flex justify-center mt-4">
              <button
                className=" mt-2 mb-2 bg-blue-500 text-white text-lg font-medium font-poppins ml-6 rounded-md p-2 hover:bg-blue-800"
                onClick={handlePayment}
              >
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
