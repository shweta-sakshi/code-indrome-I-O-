import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/solid";

const Selleractivationpage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const sendSellerActivationToken = async () => {
        try {
          const res = await axios.post("/api/seller/activation", {
            activation_token,
          });
          console.log(res.data.message);
        } catch (err) {
          setError(!error);
          console.log(err);
        }
      };
      sendSellerActivationToken();
    }
  }, [activation_token]);

  return (
    <div className="max-w-md mx-auto mt-10 px-4 text-2xl flex">
      {error ? (
        <div className="border-2 border-red-500 flex p-2 text-red-500">
          <ExclamationCircleIcon className="h-12 w-12 mb-4" />
          <p className="pt-2">Your activation token is expired</p>
        </div>
      ) : (
        <div className="border-2 border-green-500 flex p-2 text-green-500">
          <CheckCircleIcon className="h-12 w-12 mb-4" />
          <p className="pt-2">
            Your Shop has been created successfully, you can login now !!
          </p>
        </div>
      )}
    </div>
  );
};

export default Selleractivationpage;
