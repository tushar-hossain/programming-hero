import React from "react";
import { Link, useLoaderData } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";

const CoffeeDetails = () => {
  const coffee = useLoaderData();

  const { photo, name, price, supplier, taste, category, details } =
    coffee || {};
  return (
    <div className="py-12 bg-[url(../src/assets/11.png)] bg-cover">
      <Link
        className="text-[#374151] font-bold flex items-center gap-3 w-11/12 mx-auto"
        to="/"
      >
        {" "}
        <span>
          <FaArrowLeftLong />
        </span>
        Back to home
      </Link>

      <div className="py-12 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 items-center bg-base-300 px-12 rounded-lg mt-10">
        <div>
          <img src={photo} alt="" />
        </div>
        <div>
          <p>
            <span className="font-bold">Name: </span> {name}
          </p>
          <p>
            <span className="font-bold">Price: </span> {price} Taka
          </p>
          <p>
            <span className="font-bold">Supplier: </span> {supplier}
          </p>
          <p>
            <span className="font-bold">Taste: </span> {taste}
          </p>
          <p>
            <span className="font-bold">Category: </span> {category}
          </p>
          <p>
            <span className="font-bold">Details: </span> {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
