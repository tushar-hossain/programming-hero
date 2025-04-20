import React, { useEffect, useState } from "react";
import { CartContexts } from "./Contexts";
import { getCart } from "../utils";

const CartProviders = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // get cart local storage and setCart
    setCart(getCart);
  }, []);

  return (
    <CartContexts.Provider value={{ cart, setCart }}>
      {children}
    </CartContexts.Provider>
  );
};

export default CartProviders;
