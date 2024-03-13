import React from 'react'

const SignUp = () => {
  return (
    <div>
      
      <div className='wrapper'>

        <form action="">
          <h1>SignUp</h1>
          <div className="input-box" >
            <input type="text" placeholder='Full Name' required />
          </div>
          

          <div className="input-box">
            <input type="Phone number" placeholder='Phone number' required />
          </div>

          <div className="input-box">
            <input type="text" placeholder='Email Id' required />
          </div>

          <div className="input-box">
            <input type="Password" placeholder='Password' required />
          </div>

          <div className="input-box" >
            <input type="confirm password" placeholder='confirm Password' required />
          </div>

          <div >
            <button type="submit">signUp</button>
            <p>Already have an account?<a href="/login">sign in </a></p>
          </div>
        </form>

      </div>
    </div>

  )
}

export default SignUp
