import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import SubBanner from "../components/SubBanner";
import CoffeeCard from "../components/CoffeeCard";
import { BsCup } from "react-icons/bs";
import tea1 from "../assets/cups/Rectangle 9.png";
import tea2 from "../assets/cups/Rectangle 10.png";
import tea3 from "../assets/cups/Rectangle 11.png";
import tea4 from "../assets/cups/Rectangle 12.png";
import tea5 from "../assets/cups/Rectangle 13.png";
import tea6 from "../assets/cups/Rectangle 14.png";
import tea7 from "../assets/cups/Rectangle 15.png";
import tea8 from "../assets/cups/Rectangle 16.png";
import Swal from "sweetalert2";
import Header from "../components/Header";

const Home = () => {
  const initialCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffee);

  const handelDeleteCoffee = (id) => {
    Swal.fire({
      title: "Do you want to delete the coffees?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-nine-gules.vercel.app/coffees/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingCoffee = coffees.filter(
                (coffee) => coffee._id !== id
              );
              setCoffees(remainingCoffee);
            }
          });

        Swal.fire("Delete!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not delete", "", "info");
      }
    });
  };

  return (
    <div>
      <Header />
      <SubBanner />
      <div className="mt-10 bg-[url(../src/assets/bg.png)] bg-cover  py-10">
        <div className="text-center">
          <p>--- Sip & Savor ---</p>
          <h2 className="text-3xl text-[#331A15] font-bold my-3">
            Our Popular Products
          </h2>
          <Link to="/add-coffee">
            <button className="flex items-center gap-3 btn bg-[#E3B577] font-bold text-xl text-white mx-auto">
              Add Coffee{" "}
              <span className="text-black">
                <BsCup size={24} />{" "}
              </span>
            </button>
          </Link>
        </div>
        {/* card coffee */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 mx-auto mt-10">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              handelDeleteCoffee={handelDeleteCoffee}
            />
          ))}
        </div>
      </div>
      {/* instagram */}
      <div className="py-12">
        <div className="text-center">
          <p>Follow Us Now</p>
          <h2 className="text-3xl text-[#331A15] font-bold my-3">
            Follow on Instagram
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto py-5">
            <img className="mx-auto" src={tea1} alt="coffee image" />
            <img className="mx-auto" src={tea2} alt="coffee image" />
            <img className="mx-auto" src={tea3} alt="coffee image" />
            <img className="mx-auto" src={tea4} alt="coffee image" />
            <img className="mx-auto" src={tea5} alt="coffee image" />
            <img className="mx-auto" src={tea6} alt="coffee image" />
            <img className="mx-auto" src={tea7} alt="coffee image" />
            <img className="mx-auto" src={tea8} alt="coffee image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
