import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaLock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const Seller = () => {

  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);
  const [photofile, setPhoto] = useState(null);

  const [inpval, setInpval] = useState({
    sname: "",
    email: "",
    phoneNumber: "",
    password: "",
    cpassword: "",
    address: "",
    zipCode: ""
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

    const { sname, email, phoneNumber, password, cpassword, address, zipCode } = inpval;
    const file = photofile;
    console.log(file)
    if (sname === "") {
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
    } else if (phoneNumber === "") {
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
    } else if (address === "") {
      toast.error("Address can't be empty!", {
        position: "top-center"
      });
    } else if (zipCode === "") {
      toast.error("zip code can't be empty!", {
        position: "top-center"
      });
    } else {
      //everything is checked and user data will be transfer to backend database.
      const formData = new FormData();
      formData.append("sname", sname);
      formData.append("email", email);
      formData.append("phoneNumber", phoneNumber);
      formData.append("file", file);
      formData.append("password", password);
      formData.append("cpassword", cpassword);
      formData.append("address", address);
      formData.append("zipCode", zipCode);
      axios.post("/api/seller-SignUp",
        formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
        .then(res => {
          toast.success(res.message, {
            position: "top-center"
          });
          setInpval({ ...inpval, sname: "", email: "", phoneNumber: "", password: "", cpassword: "", address: "", zipCode: "" });
        })
        .catch(error => {
          console.log(error)
          toast.error(error.message, {
            position: "top-center"
          });
        });
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="wrapper bg-white p-8 rounded shadow-md m-4">
        <form>
          <div className="mb-4 text-center text-4xl">
            Create a business account
          </div>

          <div className="mb-4 flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2">
            <FaUser className="ml-2" />
            <input
              type="text"
              placeholder="Shop Name"
              onChange={setVal}
              value={inpval.sname}
              name="sname"
              required
              className="w-full px-4 py-2  focus:outline-none"
            />
          </div>

          <div className="mb-4 flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2">
            <FaPhone className="ml-2" />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={setVal}
              value={inpval.phoneNumber}
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

          <div className="mb-4 flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2">
            <FaUser className="ml-2" />
            <input
              type="text"
              placeholder="Shop Location"
              onChange={setVal}
              value={inpval.address}
              name="address"
              required
              className="w-full px-4 py-2  focus:outline-none"
            />
          </div>

          <div className="mb-4 flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2">
            <FaMapMarkerAlt className="ml-2" />
            <input
              type="phone"
              name="zipCode"
              placeholder="zip Code"
              onChange={setVal}
              value={inpval.zipCode}
              required
              className="w-full px-4 py-2  focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="photo" className="block text-gray-700">
              Please provide the image of the Trade License:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border border-gray-400 text-gray-400 rounded px-3 py-2 w-full hover:border-gray-600 hover:border-2"
            />
          </div>

          {/* <div className="mb-4">
              <label htmlFor="photo" className="block text-gray-700">
                Please provide the image of the Chemical Storage License:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="border border-gray-400 text-gray-400 rounded px-3 py-2 w-full hover:border-gray-600 hover:border-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="photo" className="block text-gray-700">
                Please provide the image of the Import-Export Code (IEC):
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="border text-gray-400 border-gray-400 rounded px-3 py-2 w-full hover:border-gray-600 hover:border-2"
              />
            </div> */}

          <div>
            <div className="flex justify-center">
              <button
                type="submit"
                onClick={addUserdata}
                className=" bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-400 "
              >
                Sign Up
              </button>
            </div>
            <p className="text-center mt-4">
              Already have an account?
              <a
                href="/sellerloginform"
                className="text-blue-500 hover:underline"
              >
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
}

export default Seller
