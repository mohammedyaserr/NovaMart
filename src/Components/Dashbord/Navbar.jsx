import React from 'react'
import "./Navbar.css"

// images 

import mainlogotans from "../../assets/M&co-logo-transparent.png"

import user from "../../assets/user (1).png"
import cart from "../../assets/shopping-cart (1).png"
import wishlist from "../../assets/e-commerce.png"
import searchicon from "../../assets/search-icon.png"

import { Link } from 'react-router-dom'
// import Productslist from './Products-list'

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                <div className="nav-branding">
                    <img src={mainlogotans} alt="" />
                </div>
                <div className="nav-bar-search-box">

                    <input type="text" placeholder='Search items'  className='search-box' />

                    <img src={searchicon} alt="" className='srchiconimg' />



                </div>

                <div className="profile">
                    <div className="inner-itesm">

                        <Link to="/profile" >
                            <div className="img-div">
                                <img src={wishlist} alt="" className='userprofileicon' />
                            </div>
                        </Link>

                        <Link to="/cart">
                            <div className="img-div">
                                <img src={cart} alt="" className='userprofileicon' />
                            </div>
                        </Link>

                        <Link to="/profile">
                            <div className="img-div">
                                <img src={user} alt="" className='userprofileicon' />
                            </div>
                        </Link>




                    </div>
                </div>


            </div>

            <div className="under-nav-optins">
                <ul>
                    <Link to="/home" className='homebtn'> <li>Home</li> </Link>
                    <li>About</li>
                    <li>Contact us</li>
                </ul>
            </div>

        </>
    )
}

export default Navbar
