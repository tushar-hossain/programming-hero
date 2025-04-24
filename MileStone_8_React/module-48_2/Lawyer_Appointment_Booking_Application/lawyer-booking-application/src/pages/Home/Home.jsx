import React from "react";
import Hero from "../../components/Hero/Hero";
import Lawyers from "../../components/Lawyers/Lawyers";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="">
      <Hero />
      <Lawyers lawyers={data} />
    </div>
  );
};

export default Home;
