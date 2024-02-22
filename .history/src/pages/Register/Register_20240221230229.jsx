import React, { useState } from 'react'
import '../Register/Register.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = () => {

    const [inputs,setInputs]=useState({
        name:"",
        email:"",
        password:"",
        password_verify:""


    })
    const handleChange=(e)=>{
        setInputs(prev=>({
            ...prev, [e.target.name]:e.target.value }))


    }
    const handleClick=async (e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/user-info/register",inputs)

        }catch(err){
        }


    }

  return (
    <div className='register'>
        <div className='left-panel'>
        <div className='container'>
                <h1>Register</h1>
                <input type="text" name='name' placeholder='Enter Name' onChange={handleChange}/>
                <input type="text" name='email' placeholder='Enter Email' onChange={handleChange}/>
                <input type="password" name='password' placeholder='Create Password' onChange={handleChange}/>
                <input type="password" name='password_verify' placeholder='Verify Password' onChange={handleChange}/>
                <button onClick={handleClick}>Register</button>
                
        </div>
        <div className='info'>
            <p>Forgot Password?</p>
            <p style={{"margin-top":"8%"}}>Already have an account? <Link to="/login">Login</Link></p>
        </div>
        </div>
        <div className='right-panel'>
            <h2>This is sample bg</h2>

            
        </div>
    </div>

  )
}

export default Register