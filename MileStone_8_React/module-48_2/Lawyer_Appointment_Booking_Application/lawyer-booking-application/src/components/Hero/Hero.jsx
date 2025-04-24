import React from "react";

const Hero = () => {
  return (
    <div className="h-[250px] md:h-[350px] lg:h-[500px] bg-[url(./assets/banner-img-1.png)] bg-cover bg-center rounded-lg flex items-center justify-center">
      <div className="text-white text-center px-1">
        <h1 className="text-sm lg:text-4xl md:text-3xl font-bold">
          It avoids subjective claims or <br /> exaggeration that might raise
          red <br /> flags legally
        </h1>
        <p className="text-sm mt-5">
          Whether you're facing a legal challenge or simply seeking expert
          advice, our network of verified lawyers across all major practice
          areas is here to help.
        </p>
      </div>
    </div>
  );
};

export default Hero;
