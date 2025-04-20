import React, { useEffect, useState } from "react";
import Phones from "../Phones/Phones";
import Button from "../ui/Button";

const PhonesContainer = ({ phones }) => {
  const [displayPhones, setDisplayPhones] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayPhones(phones);
    } else {
      setDisplayPhones(phones.slice(0, 6));
    }
  }, [phones, showAll]);

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayPhones.map((phone) => (
          <Phones key={phone.id} phone={phone} />
        ))}
      </div>

      <Button
        onClick={() => {
          setShowAll((prev) => !prev);
          if (showAll) {
            window.scrollTo(0, 800);
          }
        }}
        label={showAll ? "Show Less" : "Show All"}
      />
    </div>
  );
};

export default PhonesContainer;
