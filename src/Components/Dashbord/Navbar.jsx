import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

import mainlogotans from "../../assets/M&co-logo-transparent.png"
import user from "../../assets/user (1).png"
import cartIcon from "../../assets/shopping-cart (1).png"
import wishlist from "../../assets/e-commerce.png"
import searchicon from "../../assets/search-icon.png"

import Cart from './Cart'
import { useStore } from '../StoreContext'



const Navbar = () => {
  const { toggleCart } = useStore()  // access context

  return (
    <>
      <Cart />

      <div className="navbar-container">
        <div className="nav-branding">
          <img src={mainlogotans} alt="logo" />
        </div>

        <div className="nav-bar-search-box">
          <input type="text" placeholder='Search items'  className='search-box' />
          <img src={searchicon} alt="search" className='srchiconimg' />
        </div>

        <div className="profile">
          <div className="inner-items">
            <Link to="/profile">
              <div className="img-div">
                <img src={wishlist} alt="wishlist" className='userprofileicon' />
              </div>
            </Link>

            <div className="img-div" onClick={toggleCart}>
              <img src={cartIcon} alt="cart" className='userprofileicon' />
            </div>

            <Link to="/profile">
              <div className="img-div">
                <img src={user} alt="user" className='userprofileicon' />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="under-nav-options">
        <ul>
          <li><Link to="/home" className='homebtn'>Home</Link></li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
