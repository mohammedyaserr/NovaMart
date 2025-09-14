import React, { useState } from 'react';
import "./Login.css"


// images 

import fb from "../../assets/facebook (1).png";
import ld from "../../assets/linkedin (1).png";
import google from "../../assets/social.png";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {

  
    const [email,setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const navigate = useNavigate();

    const handlelogin = () => {
      let Userlist = JSON.parse(localStorage.getItem("Userslist")) || [];
      const Usermatch = Userlist.find (
        (user) => user.email === email && user.password === password
      );

      if (Usermatch) {
      // alert(`Welcome back, ${Usermatch.name}!`);
      localStorage.setItem("currentUser", JSON.stringify(Usermatch));

      
      navigate("/home");  
    } else {
      toast.error("Invalid email or password!");
    }
  }

  return (
    <div>
      <div className="login-container">
        <div className="login-card">
          <div className="login-card-left">
            <div className="login-card-left-branding">
              <h1>Nova</h1> <h1 className='mart-color'>Mart</h1>
            </div>
            <div className="login-card-left-contents">
              <h1 className='heading'>Sign into Account</h1>
              <hr className='vara1'/>
              <div className="login-card-left-logo-container">
                <div className="logo-container">
                  <img src={fb} alt="" className='signinoptionslogos' />
                </div>
                <div className="logo-container">
                  <img src={ld} alt="" className='signinoptionslogos' />
                </div>
                <div className="logo-container">
                  <img src={google} alt="" className='signinoptionslogos' />
                </div>
              </div>
              <p className='afterlogotxt'>or use your email account</p>
              <input type="text" onChange={(e) =>setEmail(e.target.value)} placeholder='Username or email' className="login-inputbox" />
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className='login-inputbox' />
              <div className="login-card-left-rememberme">
                <div className="remembermewrap">
                <input type="checkbox" id="remember" name="remember" className='rememberme'/>
                <label >Remember Me</label>
                </div>
                <p>Forgotten Password?</p>
              </div>
              <input type="button" onClick={handlelogin} value="Sign in" className='singinbtn'/>
            </div>
          </div>
          <div className="login-card-right">
            <h1 className='login-right-heading'>Welcome Back!</h1>
            <hr className='vara2'/>
            <p className='login-right-para'>Don't have an account, Cick SignUp to Create account</p>
            <Link to={"/signup"} className='signupbtn'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className="sliding">
        
      </div>
    </div>
  )
}

export default Login
