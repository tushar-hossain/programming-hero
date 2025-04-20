import React, { useState } from "react";
import Hero from "../../Components/Hero/Hero";
import PhonesContainer from "../../Components/PhonesContainer/PhonesContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const [phones, setPhones] = useState(data);

  const handleSearch = (e, text) => {
    e.preventDefault();
    if (text === " ") return setPhones(data);

    const searchedPhones = data.filter(
      (phone) =>
        phone?.name?.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        phone?.brand?.toLowerCase().split(" ").includes(text.toLowerCase())
    );

    setPhones(searchedPhones);
  };

  return (
    <div>
      <Hero handleSearch={handleSearch} />
      <PhonesContainer phones={phones} />
    </div>
  );
};

export default Home;
