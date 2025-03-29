import React from "react";
import "./cart.css";

const Cart = ({ cart, handleRemoveCart }) => {
  return (
    <div className="cart-container">
      {cart.map((bottle) => (
        <div key={bottle.id}>
          <img src={bottle.img} alt="" />
          <button onClick={() => handleRemoveCart(bottle.id)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
