import React from "react";

const Header = () => {
  return (
    <div className="bg-[url(../src/assets/header.png)] h-[500px] bg-center bg-cover">
      <div className="grid grid-cols-2">
        <div></div>
        <div className="mt-[30%] lg:mt-[30%] space-y-5 px-5">
          <h1 className="text-white text-2xl font-bold">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-base-300">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn bg-[#E3B577]">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
