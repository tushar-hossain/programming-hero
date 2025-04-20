import React, { useEffect, useState } from "react";
import Phones from "../../Components/Phones/Phones";
import { getFavorites, removeFavorites } from "../../utils";

const Favorites = () => {
  const [displayPhones, setDisplayPhones] = useState([]);

  useEffect(() => {
    const favorites = getFavorites();
    setDisplayPhones(favorites);
  }, []);

  const handleDelete = (id) => {
    removeFavorites(id);
    setDisplayPhones(getFavorites);
  };

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayPhones.map((phone) => (
          <Phones
            key={phone.id}
            phone={phone}
            deletable={true}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
