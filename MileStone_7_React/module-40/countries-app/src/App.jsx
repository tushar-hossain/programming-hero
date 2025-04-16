import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/countries";

function App() {
  const countries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    return response.json();
  };

  return (
    <>
      <Suspense fallback={<h3>Data is Loading...</h3>}>
        <Countries countries={countries()} />
      </Suspense>
    </>
  );
}

export default App;
