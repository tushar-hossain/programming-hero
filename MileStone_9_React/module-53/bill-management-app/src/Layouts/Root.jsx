import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-148px)] w-11/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
