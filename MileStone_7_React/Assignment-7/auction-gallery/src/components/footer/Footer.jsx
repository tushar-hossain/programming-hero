import React from "react";

const Footer = () => {
  return (
    <div className="py-20 text-center space-y-4">
      <div className="cursor-pointer">
        <a className="text-2xl font-bold">
          <span className="text-blue-600">Auction</span>
          <span className="text-[#FFD337]">Gallery</span>
        </a>
      </div>
      <div className="cursor-pointer">
        <a className="flex gap-4 items-center justify-center">
          <span>Bid.</span>
          <span>Win.</span>
          <span>Own.</span>
        </a>
      </div>

      <div>
        <ul className="flex items-center justify-center gap-4 cursor-pointer">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Auctions</a>
          </li>
          <li>
            <a>Categories</a>
          </li>
          <li>
            <a>How to works</a>
          </li>
        </ul>
      </div>

      <p>© 2025 AuctionHub. All rights reserved.</p>
    </div>
  );
};

export default Footer;
