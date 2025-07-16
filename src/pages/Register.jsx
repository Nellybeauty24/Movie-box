import React from 'react'
import { Link } from "react-router-dom"
import '../assets/css/Form.css'
import logo from '../assets/img/logo/logo.png'

function Register() {
  return (
    <div className='container'>
      <div className='login-form'>
       <form action="">
         <img src={logo} alt="image" />
        <h1>Hi, Welcome</h1>
         <p>Please sign-up to start your experience</p>

          <div>
              <input type="text" placeholder='Fullname' />

         </div>
         <div>
              <input type="email" placeholder='Email' />

         </div>

         <div>
            <input type="password"  placeholder='Password'/>

         </div>
       
         

          <Link to="/home">
            <button>REGISTER</button>
            </Link>

       <p className='myp'>Don't have an account? <Link className='link' to='/Login'> Login</Link></p>
       </form>
      </div>
    
    </div>
  )
}

export default Register


