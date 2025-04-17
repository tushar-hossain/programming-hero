import React, { Suspense } from "react";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner />
      <Suspense fallback={<span>Loading...</span>}>
        <Books data={data} />
      </Suspense>
    </div>
  );
};

export default Home;
