import React from "react";
import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handelCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const coffeeData = Object.fromEntries(new FormData(form).entries());

    //   insert coffees data server
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "New coffee added successful.",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="py-12 bg-[url(../src/assets/11.png)] bg-cover">
      <Link
        className="text-[#374151] font-bold flex items-center gap-3 w-11/12 mx-auto"
        to="/"
      >
        {" "}
        <span>
          <FaArrowLeftLong />
        </span>
        Back to home
      </Link>
      <div className="bg-[url(../../src/assets/more/10.png)] my-5 py-5 w-11/12 mx-auto">
        <div className="px-24 text-center">
          <h1 className="text-[#331A15] text-3xl font-bold mb-3">
            Add New Coffee
          </h1>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div>
          <form
            onSubmit={handelCoffee}
            className="bg-base-300 py-8 px-15 rounded-lg mt-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="">
                <label htmlFor="username" className="text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="w-full rounded-md p-2 bg-base-100 active:bg-base-100"
                />
              </div>
              <div className="">
                <label htmlFor="username" className="text-sm">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Enter coffee price"
                  className="w-full rounded-md p-2 bg-base-100"
                />
              </div>
              <div className="">
                <label htmlFor="username" className="text-sm">
                  Supplier
                </label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                  className="w-full rounded-md p-2 bg-base-100"
                />
              </div>
              <div className="">
                <label htmlFor="username" className="text-sm">
                  Taste
                </label>
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                  className="w-full rounded-md p-2 bg-base-100"
                />
              </div>
              <div className="">
                <label htmlFor="username" className="text-sm">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  className="w-full rounded-md p-2 bg-base-100"
                />
              </div>
              <div className="">
                <label htmlFor="username" className="text-sm">
                  Details
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="w-full rounded-md p-2 bg-base-100"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="username" className="text-sm">
                Photo
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="w-full rounded-md p-2 bg-base-100"
              />
            </div>

            <input
              className="p-2 bg-[#D2B48C] rounded-lg w-full cursor-pointer mt-5"
              type="submit"
              value="Add Coffee"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
