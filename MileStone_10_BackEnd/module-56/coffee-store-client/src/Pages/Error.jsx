import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import errorImg from "../assets/404/404.gif";
import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";

const Error = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-500px)]">
        <Link
          className="text-[#374151] font-bold flex justify-center items-center gap-3 my-5"
          to="/"
        >
          <span>
            <FaArrowLeftLong className="mx-auto" />
          </span>
          Back to home
        </Link>

        <img className="mx-auto" src={errorImg} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Error;
