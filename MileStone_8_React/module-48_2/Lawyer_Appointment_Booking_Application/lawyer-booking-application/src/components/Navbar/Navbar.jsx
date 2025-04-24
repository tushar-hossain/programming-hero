import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm p-0 max-w-screen mx-auto px-8 md:px-12 lg:16 xl:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
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
                  isActive ? "underline text-[#0ea106]" : ""
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <img className="w-6 lg:w-10" src={logo} alt="brand image" />
          <h1 className="text-xl lg:text-3xl font-bold">Law.BD</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex text-[18px]">
        <ul className="menu menu-horizontal px-1">
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
      </div>
      <div className="navbar-end ">
        <a className="bg-[#0EA106] rounded-full text-white font-bold hidden lg:inline-block px-4 py-2 cursor-pointer">
          Contact Now
        </a>
      </div>
    </div>
  );
};

export default Navbar;
