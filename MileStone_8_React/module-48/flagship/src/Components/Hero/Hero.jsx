import React, { useState } from "react";
import bannerImg from "../../assets/banner.png";
import Button from "../ui/Button";

const Hero = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="py-12">
      <img className="w-full mx-auto md:mx-w-md" src={bannerImg} alt="" />
      <div className="text-center space-y-4">
        <h1 className="font-thin text-7xl text-gray-600">
          Browse, Search, View, Buy
        </h1>
        <p className="text-gray-500">
          Best place to browse, search, view details and purchase of top
          flagship phones <br /> of the current time - FlagshipFaceOff
        </p>
        <form
          onSubmit={(e) => {
            handleSearch(e, searchText);

            setSearchText(" ");
          }}
          className="flex flex-col md:flex-row justify-center items-center md:gap-4 mb-4 md:px-24"
        >
          <input
            type="text"
            className="w-2/3 h-12 mb-3 md:mb-0 px-4 bg-white border border-gray-300 rounded shadow-md focus:outline-none focus:shadow-outline"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Phone By Name"
          />

          <Button type="submit" label="Search" />
        </form>
      </div>
    </div>
  );
};

export default Hero;
