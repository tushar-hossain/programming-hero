import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <h2>This is Header</h2>

      {/* Navbar */}
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/user">User</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
