import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaUser, FaLock } from "react-icons/fa";
import Button from "./Button";
import "react-toastify/dist/ReactToastify.css"; 

export default function Loginform() {
  const [passShow, setPassShow] = useState(false);
  const [inpval, setInpval] = useState({ email: "", password: "" });
  const history = useNavigate();

  const setVal = (e) => {
    const { name, value } = e.target;
    setInpval((prev) => ({ ...prev, [name]: value }));
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = inpval;


    if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-center",
      });
    } else {
      //user credential will be check with database.
      axios
        .post(
          "/api/login",
          {
            email: email,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          //setting token to the localStorage withName usersdatatoken
          localStorage.setItem("usersdatatoken", res.data.result.token);
          history("/userdash");
          setInpval({ ...inpval, email: "", password: "" });
        })
        .catch((error) => {
          console.log(error);
          toast.error("Invalid Credential", {
            position: "top-center",
          });
        });
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md">
        <div className="text-4xl text-center mb-8">Login</div>

        <div className="mb-4">
          <div className="flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2">
            <FaUser className="ml-2" />
            <input
              type="email"
              name="email"
              value={inpval.email}
              onChange={setVal}
              placeholder="UserEmail"
              required
              className="w-full px-4 py-2 focus:outline-none "
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2">
            <FaLock className="ml-2" />
            <input
              type={!passShow ? "Password" : "text"}
              name="password"
              onChange={setVal}
              value={inpval.password}
              placeholder="Password"
              required
              className="w-full px-4 py-2 focus:outline-none"
            />
            <div
              className="showpass"
              onClick={() => setPassShow(!passShow)}
            ></div>
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <input type="checkbox" className="mr-2 hover:cursor-pointer" />
          <span>Remember me</span>
        </div>

        <a
          href="#"
          className="block text-blue-500 text-center mb-4 hover:underline"
        >
          Forgot Password?
        </a>

        <button
          type="submit"
          onClick={loginUser}
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-400"
        >
          Login
        </button>

        <div className="text-center mt-4">
          <p>Don't have an account?</p>
        </div>

        <div className="flex items-center justify-center">
          <Link to="/register">
            <Button info="Register Here" />
          </Link>
        </div>
      </form>

      {/* React Toastify Container */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
