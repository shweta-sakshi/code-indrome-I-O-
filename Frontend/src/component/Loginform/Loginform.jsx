import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaUser, FaLock } from "react-icons/fa";

export default function Loginform() {

  const [passShow, setPassShow] = useState(false)

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });

    const history = useNavigate();

    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    //function call when user hit the login button
    const loginUser = async (e) => {
        e.preventDefault();

        const { email, password } = inpval;

        if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else {

            //user credential will be check with database.
            const data = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            const res = data.json();

            if (res.status === 201) {
                localStorage.setItem("usersdatatoken", res.result.token);
                history("/dash");
                setInpval({ ...inpval, email: "", password: "" });
            } else {
                toast.error("Invalid Credential", {
                    position: "top-center"
                });
            }
        }
    }

  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login To your Account</h1>

        <div className="input-box">
          <input type="email" value={inpval.email} onChange={setVal} name="email" placeholder='Email_Id' required />
          <FaUser className='icon' />
        </div>

        <div>
          <input type={!passShow ? "Password" : "text"} onChange={setVal} value={inpval.password} name="password" placeholder='Password' required />
          <div className='showpass' onClick={() => setPassShow(!passShow)}>
            {!passShow ? "Show" : "Hide"}
          </div>
          <FaLock className='icon' />
        </div>

        <div className="Remember-forget">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit"  onClick={loginUser} >Login</button>
        <div className="register-link">
          <p>Don't have an account?<a href="/register">Register</a></p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
