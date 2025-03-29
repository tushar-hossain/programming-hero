import "./App.css";

import { Suspense } from "react";
import Bottles from "./components/bottles/Bottles";

const bottlesPromise = async () => {
  const res = await fetch("../public/bottles.json");
  return res.json();
};

function App() {
  return (
    <>
      <h1>Bye Awesome Water Bottle</h1>
      <Suspense fallback={<h3>Data loading...</h3>}>
        <Bottles bottlesPromise={bottlesPromise()} />
      </Suspense>
    </>
  );
}

export default App;
