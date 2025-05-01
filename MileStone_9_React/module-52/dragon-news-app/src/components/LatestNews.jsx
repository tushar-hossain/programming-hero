import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 p-3 bg-base-200">
      <p className="bg-secondary text-base-100 p-2">Latest</p>
      <Marquee speed={50} pauseOnHover={true}>
        <p className="font-bold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
