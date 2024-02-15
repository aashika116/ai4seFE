import React from 'react'
import '../Login/Login.scss'

const Login = () => {
  return (
    <div>
        <div>
            <h2>Login</h2>
            <form action="">
                <input type="text" placeholder='Enter Username/Email'/>
                <input type="password" placeholder='Enter Password'/>
            </form>
                <button>Login</button>
                <p>Don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login