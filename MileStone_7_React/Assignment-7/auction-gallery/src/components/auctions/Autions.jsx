import React, { useEffect, useState } from "react";
import Aution from "../aution/Aution";
import Favorite from "../favorite_item/Favorite";

const Autions = () => {
  const [autions, setAutions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((data) => {
        setAutions(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  }, []);

  const loadingMessage = <p className="text-xl">Loading...</p>;
  const errorMessage = <p className="text-xl">Bad request...</p>;

  return (
    <div className="bg-[#EBF0F5]">
      <div className="w-11/12 mx-auto py-4 lg:py-10">
        <h1 className="text-2xl text-[#0E2954] font-medium">Active Auctions</h1>
        <p className="opacity-80 mt-4">
          Discover and bid on extraordinary items
        </p>

        {isLoading && loadingMessage}
        {error && errorMessage}

        <div className="lg:flex gap-4">
          <div className="bg-white p-4 rounded-lg mt-8 w-full">
            <Aution autions={autions} />
          </div>
          <div className="bg-white p-4 rounded-lg mt-8 lg:w-[40%]">
            <Favorite />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autions;
