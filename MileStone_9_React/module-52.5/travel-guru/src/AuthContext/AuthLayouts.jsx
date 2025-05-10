import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayouts = () => {
  return (
    <div className="text-black">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AuthLayouts;
