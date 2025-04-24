import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-304px)] max-w-screen mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
