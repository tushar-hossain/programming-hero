import React, { useContext, useEffect, useState } from "react";
import Phones from "../../Components/Phones/Phones";
import { getCart, removeCart } from "../../utils";
import { CartContexts } from "../../providers/Contexts";

const Carts = () => {
  const [displayCart, setDisplayCart] = useState([]);
  const { setCart } = useContext(CartContexts);

  useEffect(() => {
    const cart = getCart();
    setDisplayCart(cart);
  }, []);

  const handleCartDelete = (id) => {
    removeCart(id);
    setDisplayCart(getCart);
    setCart(getCart);
  };

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayCart.map((phone) => (
          <Phones
            key={phone.id}
            phone={phone}
            deletableCart={true}
            handleCartDelete={handleCartDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Carts;
