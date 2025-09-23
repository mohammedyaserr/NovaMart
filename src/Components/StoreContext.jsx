import React, { createContext, useContext, useState } from "react";

// Create context
const StoreContext = createContext();

// Provider component
export const StoreProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Toggle cart open/close
  const toggleCart = () => setCartOpen(!cartOpen);
  const closeCart = () => setCartOpen(false);

  // ✅ Add item (if exists, increase qty)
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // ✅ Decrease item quantity (remove if qty = 0)
  const decreaseFromCart = (item) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  // ✅ Remove item completely
  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  // (Optional) Wishlist - only works if you declare state
  const [wishList, setWishList] = useState([]);
  const addToWishlist = (item) =>
    setWishList((prev) => [...prev, item]);

  return (
    <StoreContext.Provider
      value={{
        cartOpen,
        toggleCart,
        closeCart,
        cartItems,
        addToCart,
        decreaseFromCart,
        removeFromCart,
        wishList,
        addToWishlist
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

// Custom hook for easy access
export const useStore = () => useContext(StoreContext);
