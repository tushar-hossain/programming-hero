import React from "react";
import "./bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { img, name, price, seller, stock } = bottle;
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>Brand Name: {name}</h3>
      <h3>Price: ${price}</h3>
      <h3>Seller: {seller}</h3>
      <h3>Stock: {stock}</h3>
      <button
        onClick={() => {
          handleAddToCart(bottle);
        }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Bottle;
