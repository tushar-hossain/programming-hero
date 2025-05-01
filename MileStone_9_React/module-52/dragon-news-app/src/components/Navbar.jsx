import React from "react";
import { NavLink } from "react-router";
import userImg from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5 items-center">
        <img src={userImg} alt="login user image" />
        <button className="text-base-100 bg-primary px-10 py-2 cursor-pointer">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
