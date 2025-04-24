import React, { useEffect, useState } from "react";
import Lawyer from "../Lawyer/Lawyer";
import LawService from "../LawService/LawService";

const Lawyers = ({ lawyers }) => {
  const [AllLawyers, setLawyers] = useState(lawyers);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setLawyers(lawyers);
    } else {
      setLawyers(lawyers.slice(0, 6));
    }
  }, [lawyers, showAll]);

  return (
    <div className="py-12">
      <div className="text-center">
        <h1 className="font-bold text-2xl lg:text-3xl">Our Best Lawyers</h1>
        <p className="text-gray-600 mt-4">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          <br />
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-12">
        {AllLawyers.map((lawyer) => (
          <Lawyer key={lawyer.id} lawyer={lawyer} />
        ))}
      </div>
      
      <div className="flex items-center justify-center">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="btn bg-[#0EA106] text-white rounded-full"
        >
          {showAll ? "Show Less Lawyer" : "Show All Lawyer"}
        </button>
      </div>

      <LawService />
    </div>
  );
};

export default Lawyers;
