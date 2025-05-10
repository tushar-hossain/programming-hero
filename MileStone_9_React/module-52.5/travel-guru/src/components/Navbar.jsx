import React, { use } from "react";
import logoImg from "../assets/Group 1330.png";
import logoImg2 from "../assets/logo.png";
import { NavLink, useLocation, useNavigate } from "react-router";
import { CiSearch } from "react-icons/ci";
import { AuthContext } from "../AuthContext/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const { user, logOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      {user ? (
        <li>
          <NavLink
            onClick={() => {
              logOutUser();
              navigate("/");
            }}
          >
            LogOut
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="/auth/login">Login</NavLink>
        </li>
      )}
      <p className="text-white font-bold ml-5">{user ? user.email : ""}</p>
    </>
  );

  return (
    <div
      className={`${
        location.pathname === "/" ? "text-white" : "text-black"
      }  flex gap-50 items-center w-11/12 mx-auto py-5`}
    >
      <div className="flex items-center text-black">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
        <div>
          <NavLink to="/">
            <img
              className="w-[120px] h-[60]"
              src={location.pathname === "/" ? logoImg : logoImg2}
              alt=""
            />
          </NavLink>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">
          {location.pathname === "/" ? (
            <div className="flex items-center relative">
              <span className=" absolute left-3">
                <CiSearch size={24} />
              </span>
              <input
                className="w-[370px] p-2 rounded-lg border border-base-200 px-10"
                type="text"
                placeholder="Search your Destination..."
              />
            </div>
          ) : (
            ""
          )}

          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
