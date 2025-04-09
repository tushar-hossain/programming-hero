import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url(./assets/Banner-min.jpg)] lg:h-[80vh] bg-cover bg-center w-full ">
      <div className="w-11/12 mx-auto py-5">
        <div className="text-white pt-5 lg:pt-52 space-y-4 w-full ">
          <h1 className="text-3xl font-semibold">
            Bid on Unique Items from <br /> Around the World
          </h1>
          <p className="text-xl text-gray-300">
            Discover rare collectibles, luxury goods, and vintage <br />{" "}
            treasures in our curated auctions
          </p>
          <button className="btn rounded-full">Explore Auctions</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
