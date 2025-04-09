import React from "react";

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const Aution = ({ autions }) => {
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
          {autions.map((aution) => (
            <tr key={aution.id}>
              <td>
                <img
                  className="w-[50px] sm:w-[80px] sm:h-[80px]"
                  src={aution.image}
                  alt=""
                />
              </td>
              <td>{aution.title}</td>
              <td>{aution.currentBidPrice}</td>
              <td>{aution.timeLeft}</td>
              <td>
                <button className="text-center">
                  <FaHeart className="md:text-2xl  text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Aution;

{
  /* <tr>Items</tr>
          <tr>Current Bid</tr>
          <tr>Time Left</tr>
          <tr>Bid Now</tr> */
}
