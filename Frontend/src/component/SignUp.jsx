import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {

  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);

  const [photofile, setPhoto] = useState(null);

  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    phone: "",
    password: "",
    cpassword: ""
  });


  const setVal = (e) => {
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  //function call when user click on register button.
  const addUserdata = async (e) => {
    e.preventDefault();

    const { fname, email, phone, password, cpassword } = inpval;
    const file = photofile;
    console.log(file)
    if (fname === "") {
      toast.warning("fname is required!", {
        position: "top-center"
      });
    } else if (email === "") {
      toast.error("email is required!", {
        position: "top-center"
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center"
      });
    } else if (phone === "") {
      toast.warning("Phone number require!", {
        position: "top-center"
      });
    }
    else if (password === "") {
      toast.error("password is required!", {
        position: "top-center"
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-center"
      });
    } else if (cpassword === "") {
      toast.error("cpassword is required!", {
        position: "top-center"
      });
    }
    else if (cpassword.length < 6) {
      toast.error("confirm password must be 6 char!", {
        position: "top-center"
      });
    } else if (password !== cpassword) {
      toast.error("pass and Cpass are not matching!", {
        position: "top-center"
      });
    } else {
      //everything is checked and user data will be transfer to backend database.
      console.log(file)
      const formData = new FormData();
      formData.append("fname", fname);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("file", file);
      formData.append("password", password);
      formData.append("cpassword", cpassword);
      const res = await axios.post("/api/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      })
      if (res.status === 201) {
        toast.success("Check your E_mail", {
          position: "top-center"
        });
      } else if (res.status === 402) {
        toast.error("User already exist", {
          position: "top-center"
        });
      } else if (res.status === 422) {
        toast.error("Invalid Credential", {
          position: "top-center"
        });
      } else {
        toast.error("Give valid email", {
          position: "top-center"
        });
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="wrapper bg-white p-8 rounded shadow-md">
        <form>
          <div className="mb-4 text-center text-4xl">Sign Up</div>

          <div className="mb-4 flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2">
            <FaUser className="ml-2" />
            <input
              type="text"
              placeholder="Full Name"
              onChange={setVal}
              value={inpval.fname}
              name="fname"
              required
              className="w-full px-4 py-2  focus:outline-none"
            />
          </div>

          <div className="mb-4 flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2">
            <FaPhone className="ml-2" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={setVal}
              value={inpval.phone}
              required
              className="w-full px-4 py-2  focus:outline-none"
            />
          </div>

          <div className="mb-4 flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2">
            <FaEnvelope className="ml-2" />
            <input
              type="email"
              onChange={setVal}
              value={inpval.email}
              name="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-2  focus:outline-none"
            />
          </div>

          <div className="mb-4 flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2">
            <FaLock className="ml-2" />
            <input
              type={!passShow ? "password" : "text"}
              value={inpval.password}
              onChange={setVal}
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2  focus:outline-none"
            />
            <div
              className="showpass"
              onClick={() => setPassShow(!passShow)}
            ></div>
          </div>

          <div className="mb-6 flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2">
            <FaLock className="ml-2" />
            <input
              type={!cpassShow ? "password" : "text"}
              value={inpval.cpassword}
              onChange={setVal}
              name="cpassword"
              placeholder="Confirm Password"
              required
              className="w-full px-4 py-2  focus:outline-none"
            />
            <div
              className="showpass"
              onClick={() => setCPassShow(!cpassShow)}
            ></div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block cursor-pointer text-gray-700"
            >
              Upload file:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border border-gray-300 rounded px-3 py-2 w-full hover:border-gray-600 hover:border-2"
            />
          </div>

          <div>
            <button
              type="submit"
              onClick={addUserdata}
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-400 "
            >
              Sign Up
            </button>
            <p className="text-center mt-4">
              Already have an account?
              <a href="/login" className="text-blue-500 hover:underline">
                {" "}
                Sign in
              </a>
            </p>
          </div>
        </form>
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
    </div>
  );
};

export default SignUp;
