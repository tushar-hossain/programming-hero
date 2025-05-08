import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logo.png";
import { AuthContext } from "../../Auth/AuthContext";

const Navbar = () => {
  const { user, amount, userLogOut } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/bills">Bills</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact-Us</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar p-0 w-11/12 mx-auto border-b border-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost p-0 mr-5 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-3">
          <img className="w-13" src={logoImg} alt="brand logo image" />
          <h1 className="text-xl md:text-2xl font-bold hidden lg:block">
            {" "}
            Bill Management
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* login & register */}

        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} referrerPolicy="no-referrer" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <h2 className="font-bold justify-between">
                  {user?.displayName}
                </h2>
                <p className="text-gray-600">{user?.email}</p>
              </li>
              <li>
                <hr className="border border-base-200" />
              </li>
              <li>
                <p>{amount}</p>
              </li>
              <li>
                <button
                  onClick={() => {
                    userLogOut();
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        )}

        {/*  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Navbar;
