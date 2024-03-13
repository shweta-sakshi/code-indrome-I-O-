import React from 'react'
import './Loginform.css';
import { FaUser, FaLock } from "react-icons/fa";

export default function Loginform() {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder='Username' required />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type="Password" placeholder='Password' required />
          <FaLock className='icon' />
        </div>
        <div className="Remember-forget">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>Don't have an account?<a href="/register">Register</a></p>
        </div>
      </form>

    </div>
  );
};
