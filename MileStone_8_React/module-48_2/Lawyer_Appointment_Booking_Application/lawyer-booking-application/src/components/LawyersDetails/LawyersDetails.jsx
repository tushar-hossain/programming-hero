import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { AiOutlineTrademarkCircle } from "react-icons/ai";
import { TbAlertSquareRounded } from "react-icons/tb";
import { addLawyer } from "../../utils/LocalStorage";
import LawyersNotFound from "../LawyerNotFound/LawyersNotFound";

const LawyersDetails = () => {
  const { license } = useParams();
  const data = useLoaderData();

  const foundLawyers = data.find((lawy) => lawy.license_no.includes(license));

  if (!foundLawyers) return <LawyersNotFound license={license} />;

  const lawyer = data.find((law) => law.license_no === license);
  const {
    profile_details,
    image_url,
    experience_years,
    name,
    expertise,
    availability_days,
    consultation_fee_tk,
    license_no,
  } = lawyer || {};

  const handelBooking = () => {
    addLawyer(lawyer);
  };

  return (
    <div className="py-12">
      <div className="text-center bg-[#0F0F0F26] rounded-lg py-12">
        <h1 className="text-xl lg:text-3xl font-bold mb-4">
          Lawyer’s Profile Details
        </h1>
        <p className="text-[#141414B3]">{profile_details}</p>
      </div>

      <div className="p-5 border border-gray-200 mt-5 rounded-lg md:flex gap-8 items-center">
        <div>
          <img
            className="w-50 h-50 p-2 bg-gray-300 rounded-lg mx-auto mb-3 lg:mb-0"
            src={image_url}
            alt="lawyer image"
          />
        </div>
        <div className="space-y-2">
          <p className="text-[#176AE5] bg-[#176AE51A] rounded-full py-1 px-3 text-center w-fit">
            {experience_years} Years Experience{" "}
          </p>
          <h1 className="md:text-2xl font-bold">{name}</h1>
          <div className="flex items-center gap-4 text-[#14141499]">
            <p>{expertise}</p>
            <p className="flex items-center gap-4">
              <AiOutlineTrademarkCircle />
              {license_no}
            </p>
          </div>

          <div className="md:flex gap-4">
            <span>Availability </span>
            {availability_days.map((day, ind) => (
              <p className="mt-3" key={ind}>
                <span className="bg-[#FFA00033] rounded-full py-1 px-4 text-center text-[#FFA000]">
                  {day}
                </span>
              </p>
            ))}
          </div>
          <h3>
            Consultation Fee:
            <span className="text-[#0EA106] text-xl font-bold">
              Taka : {consultation_fee_tk}
            </span>
          </h3>
        </div>
      </div>

      <div className="p-5 border border-gray-200 mt-5 rounded-lg space-y-2">
        <h1 className="font-bold text-xl lg:text-2xl text-center ">
          Book an Appointment
        </h1>
        <hr className="border border-dashed mb-5 border-[#14141433]" />
        <div className="flex justify-between items-center">
          <h3 className="font-bold">Availability</h3>
          <h3 className="bg-[#09982F1A] rounded-full py-1 px-3 text-center text-[#09982F]">
            Lawyer Available Today
          </h3>
        </div>
        <p className=" flex items-center gap-2 bg-[#FFA00033] rounded-full py-1 px-3 text-center text-[#FFA000] w-fit">
          <TbAlertSquareRounded size={25} />
          We appreciate your understanding and cooperation.
        </p>

        <Link to="/bookings">
          <button
            onClick={() => handelBooking()}
            className="btn w-full bg-[#0EA106] text-white rounded-full mt-5"
          >
            Book Appointment Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LawyersDetails;
