import React from 'react'
import "./Dashbord.css"

// images 

import user from "../../assets/user (1).png"
import cart from "../../assets/shopping-cart (1).png"

const Dashbord = () => {
    return (
        <>
            <div className="navbar">
                <div className="nav-branding">
                    <h1 className='nav-branding1'>Nova</h1> <h1 className='nav-branding2'>Mart</h1>
                </div>

                <div className="navbar-items">

                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li></li>
                    <li></li>
                </div>
            </div>
        </>
    )
}

export default Dashbord
