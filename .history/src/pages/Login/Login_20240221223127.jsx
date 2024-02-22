import React from 'react'
import '../Login/Login.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [inputs,setInputs]=useState({
        email:"",
        password:"",
        password_verify:""


    })
    const handleChange=(e)=>{
        setInputs(prev=>({
            ...prev, [e.target.name]:e.target.value }))

    }
    const handleClick=async(e)=>{
        try{
            await axios.post("http://localhost:8000/user-info/login",inputs)

        }catch(err){
        }

    }
  return (
    <div className='login'>
        <div className='left-panel'>
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
            <p style={{"margin-top":"8%"}}>Don't have an account? <Link>Register</Link></p>
        </div>
        </div>
    </div>

  )
}

export default Login