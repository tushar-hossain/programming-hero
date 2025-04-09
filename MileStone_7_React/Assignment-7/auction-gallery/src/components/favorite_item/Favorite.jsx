import React from "react";

import { FaRegHeart } from "react-icons/fa";

const Favorite = () => {
  return (
    <div>
      <h1 className="flex items-center justify-center gap-3 text-2xl font-bold">
        <span>
          <FaRegHeart />
        </span>
        <span>Favorite Items</span>
      </h1>
      <hr className="border border-[#DCE5F3] mt-4" />
      <div className="text-center py-5">
        <h3 className="text-xl font-medium">No favorites yet</h3>
        <p className="backdrop-opacity-80 mt-4">
          Click the heart icon on any item <br /> to add it to your favorites
        </p>
      </div>
      <hr className="border border-[#DCE5F3] mt-4" />
      <div className="flex items-center justify-between text-xl font-bold mt-4">
        <h2>Total bids Amount</h2>
        <h2>$0000</h2>
      </div>
    </div>
  );
};

export default Favorite;
