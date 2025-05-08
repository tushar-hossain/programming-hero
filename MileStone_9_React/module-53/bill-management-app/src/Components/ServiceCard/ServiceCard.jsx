import React from "react";

const ServiceCard = ({ card }) => {
  const { bill_type, description, icon } = card || {};
  return (
    <div className="space-y-5 bg-base-200 text-black rounded-lg py-5 px-3">
      <img className="w-30 h-30 mx-auto" src={icon} alt="card image" />
      <h2 className="text-2xl font-bold">{bill_type}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
