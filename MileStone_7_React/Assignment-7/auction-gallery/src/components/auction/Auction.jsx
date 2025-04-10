import React from "react";

import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa6";

const Auction = ({ auctions, handleItem }) => {
  const handleClick = (item, id) => {
    handleItem(item);
    const activeBtn = document.getElementById(id);
    activeBtn.style.color = "red";
    activeBtn.style.cursor = "not-allowed";
    activeBtn.disabled = true;
    toast("🦄 Item added to your Favorite list");
  };
  return (
    <div>
      <table className="table-sm md:table text-left font-bold text-[#0E2954]">
        <thead>
          <tr>
            <th>Items</th>
            <th></th>
            <th>Current Bid</th>
            <th>Time Left</th>
            <th>Bid Now</th>
          </tr>
        </thead>

        <tbody>
          {auctions.map((auction) => (
            <tr key={auction.id}>
              <td>
                <img
                  className="w-[50px] sm:w-[80px] sm:h-[80px]"
                  src={auction.image}
                  alt=""
                />
              </td>
              <td>{auction.title}</td>
              <td>${auction.currentBidPrice}</td>
              <td>{auction.timeLeft}</td>
              <td>
                <button
                  id={auction.id}
                  onClick={() => handleClick(auction, auction.id)}
                >
                  <FaHeart className="md:text-2xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Auction;
