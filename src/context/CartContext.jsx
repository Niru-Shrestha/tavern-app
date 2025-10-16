import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const cartTotal = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
