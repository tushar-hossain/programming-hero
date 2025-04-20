import React from "react";

const Button = ({ label, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="relative cursor-pointer inline-block px-4 py-2 font-medium group"
    >
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
      <span className="relative text-black group-hover:text-white">
        {label}
      </span>
    </button>
  );
};

export default Button;
