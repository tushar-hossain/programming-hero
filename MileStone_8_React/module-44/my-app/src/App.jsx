import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PricingCard from "./components/pricingCard/PricingCard";
import Recharts from "./components/StudentRecharts/Recharts";

const PricingData = fetch("public/pricingData.json").then((res) => res.json());

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <PricingCard PricingData={PricingData} />
      </Suspense>
      <Recharts />
    </>
  );
}

export default App;
