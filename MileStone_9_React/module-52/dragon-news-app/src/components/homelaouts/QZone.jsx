import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";
import AdImg from "../../assets/bg.png";

const QZone = () => {
  return (
    <div className="bg-base-300 px-3 py-5">
      <h1 className="font-bold">Q-Zone</h1>
      <div className="space-y-5 mt-5">
        <img src={swimmingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playImg} alt="" />
        <img src={AdImg} alt="" />
      </div>
    </div>
  );
};

export default QZone;
