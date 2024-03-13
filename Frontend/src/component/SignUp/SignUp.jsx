import React from 'react'
import './SignUp.css';

const SignUp = () => {
  return (
    <div>
      Registration Form
      <div class name='wrapper'>
        <form action="">
          <h1>SignUp</h1>
          <div class name="input-box" ></div>
          <input type="text" placeholder='Full Name' required />
        </form>
        <div class name="input-box">
          <input type="Phone number" placeholder='Phone number' required />
        </div>
        <div class name="input-box">
          <input type="text" placeholder='Email Id' required />
        </div>
        <div class name="input-box">
          <input type="Password" placeholder='Password' required />
        </div>
        <div class name="input-box" >
          <input type="confirm password" placeholder='confirm Password' required />
        </div>
        <div >
          <button type="submit">signUp</button>
          <p>Already have an account?<a href="/">sign in </a></p>
        </div>

      </div>
    </div>

  )
}

export default SignUp
