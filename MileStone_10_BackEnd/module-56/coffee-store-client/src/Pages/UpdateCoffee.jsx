import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { id } = useParams();
  const [coffees, setCoffees] = useState(coffee);

  const handelUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const coffeeData = Object.fromEntries(new FormData(form).entries());

    Swal.fire({
      title: "Do you want to update the coffees?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Update",
      denyButtonText: `Don't update`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //   update coffees data server
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(coffeeData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              coffeeData._id = data.modifiedCount;
              setCoffees(data);
            }
          });
        Swal.fire("Update!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not update", "", "info");
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
            Update Existing Coffee Details
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
            onSubmit={handelUpdateCoffee}
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
                  defaultValue={coffees.name}
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
                  defaultValue={coffees.price}
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
                  defaultValue={coffees.supplier}
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
                  defaultValue={coffees.taste}
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
                  defaultValue={coffees.category}
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
                  defaultValue={coffees.details}
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
                defaultValue={coffees.photo}
                placeholder="Enter photo URL"
                className="w-full rounded-md p-2 bg-base-100"
              />
            </div>

            <input
              className="p-2 bg-[#D2B48C] rounded-lg w-full cursor-pointer mt-5"
              type="submit"
              value="Update Coffee Details"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
