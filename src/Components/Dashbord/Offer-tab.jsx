import React from 'react'
import "./Offer-tab.css"

// img
// import flashsaleimg from "../../assets/flashsale.jpg"

// video

import ad from "../../assets/bannervideo.mp4"

const Offertab = () => {
  return (
    <>

      <div className="offer-container">
        <video autoPlay muted loop className='banner-video'>
          <source src={ad} type='video/mp4' />
        </video>
      </div>

      <div className="text-off">
        <div className="products-heading">
          <hr />
          <h3>Top Brands</h3>
          <hr />
        </div>
        <div className="brands">


          
      </div>
      </div>
      
      
    </>
  )
}

export default Offertab
