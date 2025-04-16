import React, { useState } from "react";
import { navbarData } from "./Data";
import { Menu, X } from "lucide-react";
const navData = navbarData;

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-11/12 mx-auto flex justify-between flex-1 items-center py-4">
      <div className="flex items-center flex-col">
        <div
          onClick={() => setToggle(!toggle)}
          className="md:hidden cursor-pointer"
        >
          {toggle ? (
            <div className="flex flex-col relative">
              <div className="flex items-center">
                <X className="mr-3" />
                <h1 className="text-3xl font-medium ">GYM</h1>
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <Menu className="mr-3" />
              <h1 className="text-3xl font-medium">GYM</h1>
            </div>
          )}
        </div>
        <div
          className={`bg-amber-800 p-2 rounded-lg absolute ${
            toggle ? "top-15" : "-top-60"
          } duration-1000 ease-in`}
        >
          <ul>
            {navData.map((nav) => (
              <li className="hover:bg-amber-600 p-2 rounded-lg" key={nav.id}>
                <a href={nav.path}>{nav.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex gap-4 ">
          <h1 className="text-3xl font-medium hidden md:block">GYM</h1>
          {navData.map((navItem) => (
            <li
              className="hover:bg-amber-600 p-2 hidden md:block rounded-lg"
              key={navItem.id}
            >
              <a href={navItem.path}>{navItem.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="btn btn-warning ">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
