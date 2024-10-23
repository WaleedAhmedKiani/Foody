import React, { useState } from 'react'
import './LoginMessage.css'
import { assets } from '../../assets/assets'

const LoginMessage = ({setshowLogin}) => {
    const [currState, setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
        
        <form action="" className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{currState}</h2>
                <img onClick={()=> setshowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
                
                <input type="email" placeholder='Your email' required/>
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currState==="sign Up"?"Create account":"Login"} </button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            
            {currState==="Login"?<p className='p-last'>Create a new account? &nbsp;<span className='click-reg' onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
            <p className='p-last'>Already have an account? &nbsp;<span className='click-reg' onClick={()=>setCurrState("Login")}>Login here</span> </p>}
            
            
        </form>
    </div>
  )
}

export default LoginMessage