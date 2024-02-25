//Aashika M suresh, Shruti Khule

import React from 'react'
import '../Login/Login.scss'
import '../Register/Register.jsx'

const Login = () => {
  return (
    <div className='login'>
        <div className='left-panel'>
            <h2>This is a sample bg </h2>
        </div>
        <div className='right-panel'>
        <div className='container'>
            <h1>Login</h1>
            <input type="text" placeholder='Enter email'/>  
            <input type="password" placeholder='Enter password'/>

            <button>Login</button>
                
        </div>
        <div className='info'>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"> Forgot Password</a>
          <p>Don't have an account?
          <a href={window.location.origin + '/register'} target="_blank" rel="noopener noreferrer"> Register</a> </p>
        </div>
        </div>
    </div>

  )
}

export default Login