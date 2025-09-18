import React from 'react'
import "./Offer-tab.css"

// img
// import flashsaleimg from "../../assets/flashsale.jpg"

import brand1 from "../../assets/branslogo (1).png"
import brand2 from "../../assets/branslogo (2).png"
import brand3 from "../../assets/branslogo (3).png"
import brand4 from "../../assets/branslogo (4).png"



// video
import ad from "../../assets/bannervideo.mp4"

const Offertab = () => {
  return (
    <>

      <div className="offer-container">
        <video autoPlay muted loop className='banner-video'>
          <source src={ad} type='video/mp4' />
        </video>

        <div className="overly-text">
          <h1 className='video-txt'>Crafted for those who value every moment.</h1>
      </div>

      </div>
      

      <div className="text-off">
        <div className="products-heading">
          <hr />
          <h3>Supporting Brands</h3>
          <hr />
        </div>
        <div className="brands">
          <div className="brandlogo-container">
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
          </div>
      </div>
      </div>
      
      
    </>
  )
}

export default Offertab
