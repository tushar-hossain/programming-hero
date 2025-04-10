import React from "react";

const Navbar = ({ item }) => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="flex items-center justify-between w-11/12 mx-auto py-3">
        <div className="cursor-pointer">
          <a className="text-3xl font-bold">
            <span className="text-blue-600">Auction</span>
            <span className="text-[#FFD337]">Gallery</span>
          </a>
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center gap-4 text-xl font-medium">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Auctions</a>
            </li>
            <li>
              <a href="">Categories</a>
            </li>
            <li>
              <a href="">How to works</a>
            </li>
          </ul>
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator text-xl">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge-sm indicator-item text-xl">
                  {item.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            ></div>
          </div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
