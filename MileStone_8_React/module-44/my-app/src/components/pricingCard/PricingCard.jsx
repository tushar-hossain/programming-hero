import React, { use } from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ PricingData }) => {
  const pricingFetch = use(PricingData);

  return (
    <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {pricingFetch.plans.map((pricing) => {
        const { id, name, price, billing, features } = pricing;
        return (
          <div
            key={id}
            className="flex flex-col bg-amber-700 border border-gray-400 p-4 rounded-lg space-y-4"
          >
            {/* card header */}
            <div className="flex justify-between text-2xl font-bold">
              <h1>{name}</h1>
              <h1>
                ${price}/{billing}
              </h1>
            </div>

            {/* card body */}
            <div className="bg-amber-900 p-3 rounded-lg flex-1">
              {features.map((feature, ind) => (
                <PricingFeature key={ind} feature={feature} />
              ))}
            </div>
            <button className="btn btn-primary">Subscription</button>
          </div>
        );
      })}
    </div>
  );
};

export default PricingCard;
