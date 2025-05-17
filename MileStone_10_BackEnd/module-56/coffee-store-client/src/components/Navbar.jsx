import React, { use } from "react";
import logoImg from "../assets/more/logo1.png";
import { Link, NavLink } from "react-router";
import AuthContext from "../AuthContext/AuthContext";

const Navbar = () => {
  const { users, logOutUser } = use(AuthContext);

  return (
    <div className="flex items-center justify-center gap-5 py-5 bg-base-100 shadow-sm bg-[url(../src/assets/15.jpg)]">
      <div>
        <img className="w-15 h-15 mx-auto" src={logoImg} alt="brand logo" />
      </div>
      <h1 className="text-xl font-bold lg:text-4xl text-white">
        Espresso Emporium
      </h1>

      <div className="text-xl font-bold text-white">
        <NavLink to="/">Home</NavLink>
      </div>

      {users ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={users.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link className="justify-between" to="/profile">
                Profile
              </Link>
              {/* profile */}
            </li>
            <li>
              <a onClick={() => logOutUser()}>Logout</a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="text-xl font-bold text-white">
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
