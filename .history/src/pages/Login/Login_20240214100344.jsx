import React from 'react'
import '../Login/Login.scss'

const Login = () => {
  return (
    <div className='login'>
        <div className='container'>
            <h2>Login</h2>
            
                <input type="text" placeholder='Enter Username/Email'/>
                <input type="password" placeholder='Enter Password'/>
            
                <button>Login</button>
                <p>Don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login