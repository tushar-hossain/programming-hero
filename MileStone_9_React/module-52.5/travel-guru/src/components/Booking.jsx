import { useLoaderData, useParams } from "react-router";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Booking = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [placeNames, setPlaceName] = useState([]);

  useEffect(() => {
    const findPlace = data.find((place) => place.id === parseInt(id));
    setPlaceName(findPlace);
  }, [id, data]);

  const { placeName, description } = placeNames || {};

  return (
    <div>
      <Navbar />
      <div className="w-11/12 mx-auto flex py-12">
        <div className="text-base-100 ">
          <h1 className="text-3xl font-bold">{placeName}</h1>
          <p className="w-2/3">{description}</p>
        </div>

        <div>
          <section className="p-6 bg-gray-300">
            <form>
              <div className=" space-y-5">
                {/* Origin */}
                <div>
                  <label htmlFor="Origin" className="text-sm">
                    Origin
                  </label>
                  <input
                    id="Origin"
                    type="text"
                    placeholder="Enter your place "
                    className="w-full rounded-md focus:ring 
                      bg-base-300 focus:ring-opacity-75 focus:dark:ring-violet-600 p-2"
                  />
                </div>
                {/* Destination */}
                <div>
                  <label htmlFor="Destination" className="text-sm">
                    Destination
                  </label>
                  <input
                    id="Destination"
                    type="email"
                    placeholder="Enter your destination"
                    className="w-full rounded-md focus:ring 
                      bg-base-300 focus:ring-opacity-75 focus:dark:ring-violet-600 p-2"
                  />
                </div>

                <div className="flex gap-5">
                  {/* Form */}
                  <div>
                    <label htmlFor="Form" className="text-sm">
                      Form
                    </label>
                    <input
                      id="Form"
                      type="date"
                      placeholder=""
                      className="w-full rounded-md focus:ring 
                      bg-base-300 focus:ring-opacity-75 focus:dark:ring-violet-600 p-2"
                    />
                  </div>
                  {/* To */}
                  <div>
                    <label htmlFor="To" className="text-sm">
                      To
                    </label>
                    <input
                      id="To"
                      type="date"
                      placeholder=""
                      className="w-full rounded-md focus:ring 
                      bg-base-300 focus:ring-opacity-75 focus:dark:ring-violet-600 p-2"
                    />
                  </div>
                </div>
              </div>
            </form>
            <button className="btn w-full bg-amber-500 py-6 rounded-lg mt-5 text-xl">Start Booking</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Booking;
