import { useState } from "react";
import "./App.css";
import Category from "./Components/category/Category";
import Categories from "./Components/Food_Categories/Categories";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [category, setCategory] = useState("");
  const [cart, setCart] = useState([]);

  const handelCart = (value) => {
    setCart([...cart, value]);
  };

  return (
    <>
      <Navbar cart={cart} />
      <Categories setCategory={setCategory} />

      <Category category={category} handelCart={handelCart} />
    </>
  );
}

export default App;
