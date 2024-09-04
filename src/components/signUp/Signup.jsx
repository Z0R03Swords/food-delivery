// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Signup.css'
import { assets } from '../../assets/assets'

const Signup = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState("Login")

  return (
    <div className='LoginPop'>
        <form  className="loginPopcon">
            <div className="loginPopTitle">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="loginPopInput">
                {currentState==="Login"?<></>:<input type="text" name="" id="" placeholder='Your Name' required />}
                
                <input type="email" placeholder='E-mail' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
            <div className="loginPopCondition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currentState==="Login"
            ?<p>Create account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
        }
            
        </form>
    </div>
  )
}

export default Signup