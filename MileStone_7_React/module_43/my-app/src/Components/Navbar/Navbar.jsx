import React, { useState } from "react";

const Navbar = ({ cart }) => {
  const [cartList, setCartList] = useState(false);
  // const [ietm, setItem] = useState([]);

  return (
    <div className=" bg-base-100 shadow-sm">
      <div className=" flex justify-between items-center w-11/12 mx-auto py-5">
        <div>
          <a className=" text-3xl font-bold cursor-pointer">Desi Food</a>
        </div>
        <div className="flex gap-5 text-xl font-bold cursor-pointer">
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
        </div>

        <div
          onClick={() => {
            setCartList(!cartList);
          }}
          className="flex flex-col"
        >
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{" "}
              </svg>
              <span className="badge badge-sm indicator-item">
                {cart.length}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            size={50}
          />
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product List  */}
      <div className="mt-5 flex gap-2">
        {cartList
          ? cart.map((item) => (
              <div className="flex" key={item.idMeal}>
                <img className="w-[100px]" src={item.strMealThumb} alt="" />
                <button className="btn text-end">X</button>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Navbar;
