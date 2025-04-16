import React, { useState } from "react";

const Country = ({ contry, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(contry);
  };

  return (
    <div className="bg-rose-300 text-black rounded-lg p-3 space-y-2">
      <img
        className="w-[350px] h-[200px] mx-auto"
        src={contry.flags.png}
        alt="country flags picture"
      />
      <h3>Name: {contry.name.common}</h3>
      <h4>Capital: {contry.capital}</h4>
      <h4>Population: {contry.population}</h4>
      <h4>Area: {contry.area}</h4>
      <button onClick={handleVisited} className="btn bg-gray-100">
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
