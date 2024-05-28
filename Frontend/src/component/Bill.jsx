import React from "react";
import BillTotal from "./BillTotal";
import BillItems from "./BillItem";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = await loadStripe('pk_test_51PIGDNSH5URDaC5ADL7tuEAVnpXYFvIR5zEMLK5O50PllvYi4tKlYvWWuXlb0aclBXuKEKqinSNlWs6YeuIVZCSm002k2bkjqV');

function Bill({ items }) {
  const requiredItems = items.filter((item) => item.number > 0);

  const renderedItems = requiredItems.map((item) => (
    <BillItems key={item._id} item={item} />
  ));

  console.log(items)

  const handlePayment = async () => {
    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: items.map(item => ({
            pname: item.pname,
            price: item.price,
            quantity: item.number,
          })),
          customer: {
            name: "Shweta Kumari",
            email: "shweta25sakshi@gmail.com",
            id: items._id,
            address: {
              line1: "123 Example Street",
              city: "Mumbai",
              state: "MH",
              postal_code: "400001",
              country: "IN",
            },
          }
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
