import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import { useOrdersdetail } from '../component/contexProvider/Paymentcontext';

function TrackOrder() {

  const { detail, data } = useOrdersdetail();
  console.log(detail);

  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const [inProgressOrders, setInProgressOrders] = useState([]);

  useEffect(() => {
    if (data) {
      setDeliveredOrders([]);
      setInProgressOrders([]);
      detail.forEach((products) => {
        if (products.DeliveryStatus === 'Order Placed') {
          setInProgressOrders((prev) => [...prev, products]);
        } else {
          setDeliveredOrders((prev) => [...prev, products]);
        }
      });
    }
  }, [data, detail]);

  return (
    <div>
      <Dashboard />
      <div className="bg-blue-300 min-h-screen p-8">
        {/* Delivered Orders Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Delivered Orders</h2>
          {(deliveredOrders || []).map((order, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">
                  Order <span className="text-blue-700">{order.ShippingAddress}</span>
                </h3>
                <p className="text-green-600 font-semibold">{order.DeliveryStatus}</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600">
                  Delivered on: <b>{order.paymentDate}</b>
                </p>
                <p className="text-gray-600">
                  Tracking Number: <b className="text-blue-700">{order._id}</b>
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Items:</h4>
                {order.item.map((it, idx) => (
                  <div key={idx} className="flex justify-between mb-2">
                    <p>{it.pname} (x{item.number})</p>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* In-Progress Orders Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Track Orders</h2>
          {(inProgressOrders || []).map((order, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">
                  Order <span className="text-blue-700">{order._id}</span>
                </h3>
                <p className="text-yellow-600 font-semibold">{order.DeliveryStatus}</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600">
                  Expected Arrival: <b>{order.paymentDate}</b>
                </p>
                <p className="text-gray-600">
                  Tracking Number: <b className="text-blue-700">{order._id}</b>
                </p>
              </div>

              <div className="track my-8">
                <div>
                  <div key={index} className="flex justify-between mb-2">
                    <p>{order.item.pname} (x{order.item.number})</p>
                    <p>${order.item.price.toFixed(2)}</p>
                  </div>
                </div>
                {/* <ul className="list-none flex justify-between gap-4 text-center">
                  {order.progress.map((step, idx) => (
                    <li
                      key={idx}
                      className={`flex-1 relative ${idx <= order.currentStep ? 'text-blue-700' : 'text-gray-400'
                        }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full mx-auto mb-2 ${idx <= order.currentStep ? 'bg-blue-700' : 'bg-gray-400'
                          }`}
                      ></div>
                      <p>{step}</p>
                      {idx < order.progress.length - 1 && (
                        <div
                          className={`absolute top-3 left-1/2 h-0.5 w-full ${idx < order.currentStep ? 'bg-blue-700' : 'bg-gray-400'
                            }`}
                        ></div>
                      )}
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrackOrder;