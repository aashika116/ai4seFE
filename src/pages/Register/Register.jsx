//Aashika M suresh, Shruti Khule

import React from 'react'
import '../Register/Register.scss'

const Register = () => {
  return (
    <div className='register'>
        <div className='left-panel'>
        <div className='container'>
                <h1>Register</h1>
                <input type="text" placeholder='Enter Name'/>
                <input type="text" placeholder='Enter Email'/>
                <input type="password" placeholder='Create Password'/>
                <input type="password" placeholder='Verify Password'/>
                <button>Register</button>
                
        </div>
        <div className='info'>
        <p>Already have an account?
          <a href={window.location.origin + '/login'} target="_blank" rel="noopener noreferrer"> Login</a> </p>
        </div>
        </div>
        <div className='right-panel'>
            <h2>This is a sample bg </h2>
            
        </div>
    </div>

  )
}

export default Register