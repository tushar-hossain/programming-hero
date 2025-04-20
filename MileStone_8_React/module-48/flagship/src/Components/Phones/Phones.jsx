import React from "react";
import { Link } from "react-router";
import Button from "../ui/Button";
import { Trash2 } from "lucide-react";

const Phones = ({
  phone,
  deletable,
  handleDelete,
  deletableCart,
  handleCartDelete,
}) => {
  const { id, name, description, image } = phone || {};

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`phone-details/${id}`}>
            <Button label="viewDetails" />
          </Link>
        </div>
      </div>
      {deletable && (
        <button
          onClick={() => {
            handleDelete(id);
          }}
          className="absolute -top-2 -right-2 p-2 bg-gray-400 group rounded-full text-gray-100 cursor-pointer  hover:bg-gray-300"
        >
          <Trash2 className="group-hover:text-gray-900 " />
        </button>
      )}

      {deletableCart && (
        <button
          onClick={() => handleCartDelete(id)}
          className="absolute -top-2 -right-2 p-2 bg-gray-400 group rounded-full text-gray-100 cursor-pointer  hover:bg-gray-300"
        >
          <Trash2 className="group-hover:text-gray-900 " />
        </button>
      )}
    </div>
  );
};

export default Phones;
