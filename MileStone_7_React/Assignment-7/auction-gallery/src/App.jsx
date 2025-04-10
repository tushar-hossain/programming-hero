import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Auctions from "./components/auctions/Auctions";
import Footer from "./components/footer/Footer";

function App() {
  const [item, setItem] = useState([]);
  const [amount, setAmount] = useState(0);

  const handleItem = (items) => {
    setItem([...item, items]);
    const itemAmount = parseInt(items.currentBidPrice);
    setAmount((prevAmount) => prevAmount + itemAmount);
  };

  const handleRemove = (id, price) => {
    const remainingItem = item.filter((product) => product.id !== id);
    setItem(remainingItem);
    setAmount((prevAmount) => prevAmount - price);
    
    const activeBtnRemove = document.getElementById(id);
    activeBtnRemove.style.color = "black";
    activeBtnRemove.style.cursor = "pointer";
    activeBtnRemove.disabled = false;
    toast("🦄 Item was Deleted Favorite list");
  };

  return (
    <>
      <Navbar item={item} />
      <Banner />
      <Auctions
        handleItem={handleItem}
        item={item}
        handleRemove={handleRemove}
        amount={amount}
      />
      <ToastContainer autoClose={3000} />
      <Footer />
    </>
  );
}

export default App;
