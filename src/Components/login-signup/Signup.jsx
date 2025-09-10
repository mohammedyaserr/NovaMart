import React, { useState } from 'react';
import "./Signup.css";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    console.log(name, email, number, password, confirmPassword);


    const handleSignup = () => {
        // if (password !== confirmPassword) {
        //     alert("Passwords do not match!");
        //     return;
        // }

        if (!name || !email || !number || !password || !confirmPassword) {
            
        }
        const User = { name, email, number, password };
        let Userslist = JSON.parse(localStorage.getItem("Userslist")) || [];
        Userslist.push(User)
        localStorage.setItem("Userslist",JSON.stringify(Userslist));
        // alert("Account created successfully!");
        toast.success("Account Created Successfully");
    }; 

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="signup-card-left">
                    <h1 className='login-right-heading'>Hey, Welcome</h1>
                    <hr className='vara2' />
                    <p className='login-right-para'>Already have an account? Sign in now</p>
                    <Link to="/" className='signupbtn'>Sign in</Link>
                </div>

                <div className="signup-card-Right">
                    <div className="signup-card-right-branding">
                        <h1>Nova</h1> <h1 className='mart-color'>Mart</h1>
                    </div>
                    <div className="login-card-left-contents">
                        <h1 className='heading-signup'>Create an Account</h1>
                        <hr className='vara1' />

                        {password !== confirmPassword  &&(
                        <div className="signup-erros">
                            <p>Password didn't match</p>
                        </div>
                        )}

                        
                        <input
                            type="text"
                            placeholder='First Name'
                            className="login-inputbox"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder='Email'
                            className="login-inputbox"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder='Phone Number'
                            className="login-inputbox"
                            value={number}
                            onChange={(e) => {
                                // Allow only digits
                                const value = e.target.value.replace(/\D/g, "");
                                setNumber(value);
                            }}
                            maxLength={10}

                            
                        />
                        <input
                            type="password"
                            placeholder="Create a Password"
                            className='login-inputbox'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Re-enter your Password"
                            className='login-inputbox'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <input
                            type="button"
                            value="Create account"
                            onClick={handleSignup}
                            className='crtaccbtn'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
