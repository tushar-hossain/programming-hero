import React from "react";
import img1 from "../assets/icons/1.png";
import img2 from "../assets/icons/2.png";
import img3 from "../assets/icons/3.png";
import img4 from "../assets/icons/4.png";

const SubBanner = () => {
  return (
    <div className="bg-[#ECEAE3]">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 gap-5">
        <div>
          <img src={img1} alt="" />
          <h1 className="text-2xl font-bold text-[#331A15] my-3">
            Awesome Aroma
          </h1>
          <p className="text-[#1B1A1A]">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>

        <div>
          <img src={img2} alt="" />
          <h1 className="text-2xl font-bold text-[#331A15] my-3">
            High Quality
          </h1>
          <p className="text-[#1B1A1A]">
            We served the coffee to you maintaining the best quality
          </p>
        </div>

        <div>
          <img src={img3} alt="" />
          <h1 className="text-2xl font-bold text-[#331A15] my-3">
            Pure Grades
          </h1>
          <p className="text-[#1B1A1A]">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>

        <div>
          <img src={img4} alt="" />
          <h1 className="text-2xl font-bold text-[#331A15] my-3">
            Proper Roasting
          </h1>
          <p className="text-[#1B1A1A]">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
