import React from 'react'
import "./Dashbord.css"

// images 

import user from "../../assets/user (1).png"
import cart from "../../assets/shopping-cart (1).png"
import { Link } from 'react-router-dom'

const Dashbord = () => {
    return (
        <>
            <div className="navbar-container">
                <div className="nav-branding">
                    <h1 className='nav-branding1'>Nova</h1> <h1 className='nav-branding2'>Mart</h1>
                </div>
                <div className="nav-bar">
                    
                        <ul>
                            <Link to="/home" className='homebtn'> <li>Home</li> </Link>
                            <li>About</li>
                            <li>Contact us</li>
                        </ul>

                </div>

                <div className="profile">
                    <div className="inner-itesm">
                        <Link to="/profile">
                        <div className="img-div">
                            <img src={user} alt="" className='userprofileicon'/>
                        </div>
                        </Link>
                        
                    </div>
                </div>


            </div>
        </>
    )
}

export default Dashbord
