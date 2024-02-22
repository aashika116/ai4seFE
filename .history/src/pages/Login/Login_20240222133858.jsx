import React from 'react'
import '../Login/Login.scss'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, } from 'react'

const Login = () => {
  const navigate= useNavigate()

    const [inputs,setInputs]=useState({
        email:"",
        password:"",

    })
    const handleChange=(e)=>{
        setInputs(prev=>({
            ...prev, [e.target.name]:e.target.value }))

    }
    const handleClick=async(e)=>{
        try{
            const response=await axios.post("http://localhost:8000/user-info/login",inputs)
            if (response.data && response.data.token){
                navigate("/homepage")
            }

        }catch(err){
        }

    }
  return (
    <div className='login'>
        <div className='left-panel'>
            <h2>This is sample bg</h2>
        </div>
        <div className='right-panel'>
        <div className='container'>
            <h1>Login</h1>
            
                <input type="text" name='email' placeholder='Enter Email' onChange={handleChange}/>
                <input type="password" name='password' placeholder='Enter Password' onChange={handleChange}/>
            
                <button onClick={handleClick}>Login</button>
                
        </div>
        <div className='info'>
            <p>Forgot Password?</p>
            <p style={{"margin-top":"8%"}}>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
        </div>
    </div>

  )
}

export default Login