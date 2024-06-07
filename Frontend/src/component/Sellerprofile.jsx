import React, { useState } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaLock,
  FaMapMarkerAlt,
  FaStore,
} from "react-icons/fa";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';

const Seller = () => {

  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);
  const [photofile, setPhoto] = useState(null);
  const [sign, setSign] = useState();
  const [url, setUrl] = useState();

  const [inpval, setInpval] = useState({
    sname: "",
    email: "",
    phonenumber: "",
    password: "",
    cpassword: "",
    address: "",
    gstin: ""
  });

  const clearSign = () => {
    sign.clear()
  }

  const saveSign = () => {
    setUrl(sign.toDataURL('image / png'));
  }

  console.log(sign)
  console.log(url)


  const setVal = (e) => {
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  };

  //On chooding image value of photo will be set.
  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  //function call when user click on register button.
  const addUserdata = async (e) => {
    e.preventDefault();

    const { sname, email, phonenumber, password, cpassword, address, gstin } = inpval;
    const file = photofile;
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
    } else if (phonenumber === "") {
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
    } else if (gstin === "") {
      toast.error("GSTIN Number is compulsary!", {
        position: "top-center"
      });
    } else {

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("https://sheet.gstincheck.co.in/check/{859603f1083ace79196efc723ac8612f}/{gstin}", requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result)
          //everything is checked and user data will be transfer to backend database.
          const formData = new FormData();
          formData.append("sname", sname);
          formData.append("email", email);
          formData.append("phonenumber", phonenumber);
          formData.append("file", file);
          formData.append("password", password);
          formData.append("cpassword", cpassword);
          formData.append("address", address);
          formData.append("gstin", gstin);
          console.log(formData);
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
              setInpval({ ...inpval, sname: "", email: "", phonenumber: "", password: "", cpassword: "", address: "", gstin: "", photofile: null });
            })
            .catch(error => {
              console.log(error)
              toast.error(error.message, {
                position: "top-center"
              });
            });
        })
        .catch(error => console.log('error', error));
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
              name="phonenumber"
              placeholder="Phone Number"
              onChange={setVal}
              value={inpval.phonenumber}
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
            <FaMapMarkerAlt className="ml-2" />
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
            <FaStore className="ml-2" />
            <input
              type="text"
              placeholder="GSTIN Number"
              onChange={setVal}
              value={inpval.gstin}
              name="gstin"
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

          {/* Certification photos..... */}
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

          <div >
            <label htmlFor="photo" className="block text-gray-700">
              Signature:
            </label>
            <div className="mb-4 flex items-center border border-gray-400 rounded hover:border-gray-600 hover:border-2">
              <SignatureCanvas penColor='blue'
                // style={{ border: "2px solid black" }}
                ref={data => setSign(data)}
                canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} />,
            </div>
            <div className='flex items-center justify-between'>
              <button onClick={saveSign}>
                save
              </button>
              <button className='mr-4'
                onClick={clearSign}
              >
                clear
              </button>
            </div>
          </div>

          <div>
            Here is image
            <img className="text-6xl mx-4 text-white" src={url} />
          </div>

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
