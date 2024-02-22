import React from 'react'
import '../Register/Register.scss'

const Register = () => {
    const handleChange=()=>{
        setInputs(prev=>({
            ...prev, [e.target.name]:e.target.value }))


    }
  return (
    <div className='register'>
        <div className='left-panel'>
        <div className='container'>
                <h1>Register</h1>
                <input type="text" placeholder='Enter Name' onChange={handleChange}/>
                <input type="text" placeholder='Enter Email' onChange={handleChange}/>
                <input type="text" placeholder='Create Username' onChange={handleChange}/>
                <input type="password" placeholder='Create Password' onChange={handleChange}/>
                <input type="password" placeholder='Verify Password' onChange={handleChange}/>
                <button>Register</button>
                
        </div>
        <div className='info'>
            <p>Forgot Password?</p>
            <p style={{"margin-top":"8%"}}>Don't have an account? Register</p>
        </div>
        </div>
        <div className='right-panel'>
            <h2>This is sample bg </h2>
            
        </div>
    </div>

  )
}

export default Register