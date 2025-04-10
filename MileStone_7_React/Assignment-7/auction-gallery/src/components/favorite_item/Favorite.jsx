import React from "react";

import { FaRegHeart } from "react-icons/fa";

const Favorite = ({ item, handleRemove, amount }) => {
  return (
    <div>
      <h1 className="flex items-center justify-center gap-3 text-2xl font-bold">
        <span>
          <FaRegHeart />
        </span>
        <span>Favorite Items</span>
      </h1>
      <hr className="border border-[#DCE5F3] mt-4" />

      {item.length === 0 ? (
        <div className="text-center py-5">
          <h3 className="text-xl font-medium">No favorites yet</h3>
          <p className="backdrop-opacity-80 mt-4">
            Click the heart icon on any item <br /> to add it to your favorites
          </p>
        </div>
      ) : (
        item.map((value) => {
          return (
            <div
              key={value.id}
              className=" flex items-center gap-4 border rounded-lg p-2 mt-4"
            >
              <div>
                <img
                  className="w-[80px] h-[50px] border rounded-lg p-1"
                  src={value.image}
                  alt=""
                />
              </div>
              <div className="text-sm">
                <h1 className="font-bold">{value.title}</h1>
                <p>{value.currentBidPrice}</p>
                <p>Bids: {value.bidsCount}</p>
              </div>
              <div>
                <button
                  onClick={() => handleRemove(value.id, value.currentBidPrice)}
                  className="btn bg-red-100"
                >
                  X
                </button>
              </div>
            </div>
          );
        })
      )}
      <hr className="border border-[#DCE5F3] mt-4" />
      <div className="flex items-center justify-between text-xl font-bold mt-4">
        <h2>Total bids Amount</h2>
        <h2>${amount}</h2>
      </div>
    </div>
  );
};

export default Favorite;
