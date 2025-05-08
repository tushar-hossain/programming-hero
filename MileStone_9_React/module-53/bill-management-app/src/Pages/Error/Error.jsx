import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import errorImg from "../../assets/error.png";

const Error = () => {
  return (
    <div className="h-[100vh]">
      <div className="py-12">
        <h1 className="text-2xl lg:text-4xl font-bold text-center mb-10">
          Oops... Page not found!
        </h1>
        <img className="w-full mx-auto" src={errorImg} alt="" />
      </div>
    </div>
  );
};

export default Error;
