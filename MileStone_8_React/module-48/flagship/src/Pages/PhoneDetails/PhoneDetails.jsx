import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../../Components/ui/Button";
import { BookmarkPlus, ShoppingCart } from "lucide-react";
import { addFavorites, addToCart, getCart } from "../../utils";
import { CartContexts } from "../../providers/Contexts";


const PhoneDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const { setCart } = useContext(CartContexts);

  const singlePhones = data.find((phone) => phone.id === parseInt(id));

  const { brand, image, camera_info, description, model, name } =
    singlePhones || {};

  const handleClick = () => {
    addFavorites(singlePhones);
  };

  const handleCart = () => {
    addToCart(singlePhones);
    setCart(getCart());
  };

  return (
    <div className="py-12 space-y-4">
      <img className="mx-auto  mb-8" src={image} alt="" />
      <div className="flex justify-between items-center">
        <h1 className="text-6xl font-thin mb-8">{name}</h1>
        <div className="flex gap-4">
          <Button onClick={handleCart} label={<ShoppingCart />} />
          <Button onClick={handleClick} label={<BookmarkPlus />} />
        </div>
      </div>
      <h1>Details: </h1>
      <p>
        <span className="font-bold">Brand: </span>
        {brand}
      </p>
      <p>
        <span className="font-bold">Model: </span>
        {model}
      </p>

      <p>
        <span className="font-bold">Camera Info: </span>
        {camera_info}
      </p>
      <p>
        <span className="font-bold">Description: </span>
        {description}
      </p>
    </div>
  );
};

export default PhoneDetails;
