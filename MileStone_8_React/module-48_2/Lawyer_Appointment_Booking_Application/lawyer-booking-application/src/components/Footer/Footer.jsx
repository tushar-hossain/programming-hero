import React from "react";
import footerImg from "../../assets/logo-footer.png";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-black text-base-content rounded p-10 mt-10">
      <div className="flex items-center gap-2">
        <img className="w-10" src={footerImg} alt="" />
        <h1 className="text-white text-3xl font-bold">Law.BD</h1>
      </div>
      <nav className="grid grid-flow-col gap-4 text-gray-300 text-[18px]">
        <ul className="flex gap-4 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline text-[#0EA106]" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bookings"
              className={({ isActive }) =>
                isActive ? "underline text-[#0EA106]" : ""
              }
            >
              Bookings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "underline text-[#0EA106]" : ""
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "underline text-[#0EA106]" : ""
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-white">
          social media img
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
