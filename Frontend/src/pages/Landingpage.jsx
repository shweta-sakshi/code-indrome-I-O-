import React from 'react'
import { Link } from 'react-router-dom'

const Landingpage = () => {
  return (
    <div>Welcome To Landingpage
      <div><Link to="/login">Login</Link></div>
      <div><Link to="/register">Register</Link></div>
    </div>
  )
}

export default Landingpage