import React from 'react';
import "./Premium-sec.css";
import { topselling } from './Product-list';
import { useStore } from '../StoreContext';

const Premiumsec = () => {
    const { cartItems, addToCart, decreaseFromCart } = useStore();

    return (
        <div className="Premium-sec">
            <div className="premium-products-heading">
                <hr className='line' />
                <h3>Top Selling</h3>
                <hr className='line' />
            </div>

            <div className="products">
                {topselling.map((item) => {
                    const cartItem = cartItems.find((cart) => cart.id === item.id);

                    return (
                        <div className="products-item" key={item.id}>
                            <div className="product-img-sec">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="pdt-details-area">
                                <h4>{item.name}</h4>
                                <p>Mrp</p>
                                <h5>₹12,999 (incl. of all taxes)</h5>

                                {cartItem ? (
                                    <div className="qty-controls">
                                        <button onClick={() => decreaseFromCart(item)}>-</button>
                                        <p>{cartItem.quantity}</p> {/* ✅ show actual quantity */}
                                        <button onClick={() => addToCart(item)}>+</button>
                                    </div>
                                ) : (
                                    <input
                                        type="button"
                                        value="Add to cart"
                                        className="addtobtn"
                                        onClick={() => addToCart(item)}
                                    />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Premiumsec;
