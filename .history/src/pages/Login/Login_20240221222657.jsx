import React from 'react'
import '../Login/Login.scss'

const Login = () => {
    const handleChange=()=>{

    }
    const handleClick=()=>{

    }
  return (
    <div className='login'>
        <div className='left-panel'>
            <h2>This is sample bg </h2>
        </div>
        <div className='right-panel'>
        <div className='container'>
            <h1>Login</h1>
            
                <input type="text" placeholder='Enter Username/Email'/>
                <input type="password" placeholder='Enter Password'/>
            
                <button onClick={handleClick}>Login</button>
                
        </div>
        <div className='info'>
            <p>Forgot Password?</p>
            <p style={{"margin-top":"8%"}}>Don't have an account? Register</p>
        </div>
        </div>
    </div>

  )
}

export default Login