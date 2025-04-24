import React from "react";
import { Link } from "react-router";
import errorImg from "../../assets/404.png";
import Navbar from "../../components/Navbar/Navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />;
      <div className=" flex justify-center items-center h-[70vh] mx-auto">
        <div className="space-y-3 text-center">
          <img
            className="w-40 md:w-60 lg:w-80 p-3 bg-gray-50 rounded-lg mx-auto"
            src={errorImg}
            alt="error image"
          />
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            404 Page Not Found
          </h1>
          <h3>Oops! The page you're looking for doesn't exist.</h3>
          <Link to="/">
            <button className="btn btn-primary">Go Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
