import React, { use, useState } from "react";
import Country from "../country/Country";

const Countries = ({ countries }) => {
  const [newCountry, setNewCountry] = useState([]);
  const country = use(countries);

  const handleVisitedCountries = (country) => {
    let visitedCountry = [...newCountry];
    setNewCountry([...visitedCountry, country]);
  };

  return (
    <div className="w-11/12 mx-auto space-y-2">
      <h1 className="text-2xl text-center font-bold py-4">Countries App</h1>
      
      <h3 className=" text-xl">All Countries: {country.length}</h3>
      <h3 className=" text-xl">Visited Countries: {newCountry.length}</h3>

      <div className="grid grid-cols-3 gap-4 ">
        {country.map((contry) => (
          <Country
            key={contry.cca3}
            handleVisitedCountries={handleVisitedCountries}
            contry={contry}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
