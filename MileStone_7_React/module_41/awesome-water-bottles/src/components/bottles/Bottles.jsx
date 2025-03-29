import React, { use, useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./bottles.css";
import { addLocalStorage, getLocalStorage, removeCart } from "../../utilites/licalSorage";
import Cart from "../../cart/Cart";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (bottle) => {
    setCart((cart) => [...cart, bottle]);
    addLocalStorage(bottle.id);
  };

  const handleRemoveCart = (id) => {
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeCart(id)
  };

  // useEffect
  useEffect(() => {
    const storedCardIds = getLocalStorage();
    const storedCart = [];
    for (const id of storedCardIds) {
      const cartBottle = bottles.find((bottle) => bottle.id === id);
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }
    setCart(storedCart);
  }, [bottles]);

  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <p>Added to Cart: {cart.length}</p>
      <Cart cart={cart} handleRemoveCart={handleRemoveCart} />
      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
