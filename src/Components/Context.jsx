import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addtocart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <StoreContext.Provider value={{ cart, addtocart }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
