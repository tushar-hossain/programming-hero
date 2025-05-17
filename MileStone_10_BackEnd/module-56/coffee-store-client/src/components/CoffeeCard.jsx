import React from "react";
import { Link } from "react-router";
import { IoEyeSharp } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee, handelDeleteCoffee }) => {
  const { _id, photo, name, price, supplier } = coffee || {};

  return (
    <div className="bg-[#F5F4F1] rounded-lg flex items-center gap-5 py-10">
      <div>
        <img src={photo} alt="coffee image" />
      </div>
      <div className="flex items-center justify-between w-full px-10">
        <div>
          <p>
            <span className="font-bold">Name: </span> {name}
          </p>
          <p>
            <span className="font-bold">Supplier: </span> {supplier}
          </p>
          <p>
            <span className="font-bold">Price: </span> {price} Taka
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to={`coffee-details/${_id}`}
            className="btn bg-[#D2B48C] rounded-lg text-white"
          >
            <IoEyeSharp size={24} />{" "}
          </Link>
          <Link
            to={`/coffee-update/${_id}`}
            className="btn bg-[#3C393B] rounded-lg text-white"
          >
            <MdModeEdit size={24} />{" "}
          </Link>
          <Link
            onClick={() => handelDeleteCoffee(_id)}
            className="btn bg-[#EA4744] rounded-lg text-white"
          >
            <MdDelete size={24} />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
