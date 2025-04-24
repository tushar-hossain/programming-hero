import React from "react";
import { AiOutlineTrademarkCircle } from "react-icons/ai";
import { Link } from "react-router";

const Lawyer = ({ lawyer }) => {
  const {
    image_url,
    available,
    experience_years,
    name,
    expertise,
    license_no,
  } = lawyer || {};

  return (
    <div className="border border-gray-300 shadow px-6 py-3 rounded-lg md:flex md:flex-col lg:flex-row gap-4">
      <div>
        <img
          className="w-48 h-48 rounded-lg p-2 bg-gray-200 mx-auto mb-3 md:mb-0"
          src={image_url}
          alt="lawyer image"
        />
      </div>
      <div className="space-y-1">
        <div className="md:flex text-center gap-4 mb-2">
          <p className="bg-[#09982F1A] py-1 px-3 rounded-full text-[#09982F]  mb-2 md:mb-0">
            {available ? "Available" : "Not Available"}
          </p>
          <p className="bg-[#176AE51A] py-1 px-2 rounded-full text-[#176AE5]">
            {experience_years} Years Experience
          </p>
        </div>
        <h1 className="text-xl font-bold">{name}</h1>
        <h3 className=" text-[#0F0F0F99]"> {expertise} </h3>
        <p className="flex items-center gap-3 text-[#0F0F0F99]">
          <span>
            <AiOutlineTrademarkCircle />
          </span>
          license No: {license_no}
        </p>

        <Link to={`/lawyers-details/${license_no}`}>
          <button className="btn rounded-full w-full text-[#176AE5]">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Lawyer;
