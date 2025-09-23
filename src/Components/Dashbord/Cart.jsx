import React from "react";
import "./Cart.css";
import { useStore } from "../StoreContext";

import clsbtn from "../../assets/clsbtnsvg.svg";

const Cart = () => {
  const {
    cartOpen,
    closeCart,
    cartItems,
    addToCart,
    decreaseFromCart,
    removeFromCart,
  } = useStore();

  // ✅ Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={`cart-continer ${cartOpen ? "show" : ""}`}>
      <div className="cart-right">
        <div className="cart-top-sec">
          <h1>Cart</h1>
          <img src={clsbtn} alt="close cart" onClick={closeCart} />
        </div>

        <div className="cart-item-sec">
          {cartItems.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cartItems.map((item, idx) => (
              <div className="cart-products" key={idx}>
                <div className="product-img-div">
                  <img src={item.img} alt="product" />
                </div>
                <div className="product-details">
                  <h4>{item.name}</h4>
                  <h3>₹ {item.price}</h3>
                  <div className="add-remove-box">
                    <input
                      type="button"
                      value="-"
                      onClick={() => decreaseFromCart(item)}
                    />
                    <p>{item.quantity}</p>
                    <input
                      type="button"
                      value="+"
                      onClick={() => addToCart(item)}
                    />
                  </div>
                  {/* <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button> */}
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-bottom">
            <div className="sub-total">
              <h4>Sub-Total</h4>
              <h4>₹ {subtotal}</h4>
            </div>
            <div className="btn-container">
              <input
                type="button"
                className="chckbtn"
                value="Proceed to Pay"
              />
              <p>Include 18% GST</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
