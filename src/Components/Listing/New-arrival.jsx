import React from 'react'
import "./New-arraival.css"
import { newarrived } from '../Dashbord/Product-list'

const Newarrival = () => {
    return (
        <>
            <div className="new-main-container">
                <div className="new-arraival-heading">
                    <h3>New Arrivals</h3>
                    <hr className='newarraivalvara' />
                </div>


                <div className="items-container">


                    {newarrived.map((item) => (

                        <div className="items" key={item.id}>
                            <div className="na-img-sec">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="naprdtdetails">
                                <h4>{item.name}</h4>
                                <p>Mrp</p>
                                <h4>₹ 12,000 </h4>
                                <input type="button" value="Add to cart" className='addtobtn' />
                            </div>
                        </div>
                    )

                    )}
                </div>

            </div>
        </>
    )
}

export default Newarrival
