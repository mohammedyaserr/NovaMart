import React from 'react';
import "./New-arraival.css";
import { newarrived } from '../Dashbord/Product-list';
import { useStore } from '../StoreContext';

const Newarrival = () => {
  const { cartItems, addToCart, decreaseFromCart } = useStore();

  return (
    <div className="new-main-container">
      <div className="new-arraival-heading">
        <h3>New Arrivals</h3>
        <hr className='newarraivalvara' />
      </div>

      <div className="items-container">
        {newarrived.map((item) => {
          const cartItem = cartItems.find((i) => i.id === item.id);

          return (
            <div className="items" key={item.id}>
              <div className="na-img-sec">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="naprdtdetails">
                <h4>{item.name}</h4>
                <p>Mrp</p>
                <h4>₹ {item.price}</h4>

                {!cartItem ? (
                  <input
                    type="button"
                    value="Add to cart"
                    className='addtobtn'
                    onClick={() => addToCart(item)}
                  />
                ) : (
                  <div className="qty-controls">
                    <button onClick={() => decreaseFromCart(item)}>-</button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Newarrival;
