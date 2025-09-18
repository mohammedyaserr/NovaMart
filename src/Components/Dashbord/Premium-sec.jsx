import React from 'react'
import "./Premium-sec.css"
import { topselling } from './Product-list'

// import test from "../../assets/e6e6c262de67d0745efff1c75ac27808.png"

const Premiumsec = () => {
    return (
        <>
            <div className="Premium-sec">
                <div className="premium-products-heading">
                    <hr className='line' />
                    <h3>Top Selling</h3>
                    <hr className='line' />
                </div>

                <div className="products">

                    {topselling.map((item) => (
                            <div className="products-item">
                                <div className="product-img-sec">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="pdt-details-area">
                                    <h4>{item.name}</h4>
                                    <p>Mrp</p>
                                    <h5>₹12,999 (incl. of all taxes)</h5>
                                    <input type="button" value="Add to cart" className='addtobtn' />
                                </div>
                            </div>
                        ) )
                    }
                    
                </div>
            </div>
        </>
    )
}

export default Premiumsec
