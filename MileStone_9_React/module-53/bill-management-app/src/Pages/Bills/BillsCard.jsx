import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { SiTicktick } from "react-icons/si";
import { getBill } from "../../utils/utils";

const BillsCard = ({ bill }) => {
  const { id, bill_type, icon, organization, amount, bill_icon } = bill || {};
  const [paidBill, setPaidBill] = useState([]);

  useEffect(() => {
    setPaidBill(getBill());
  }, [id]);

  return (
    <div className="md:flex gap-10 bg-base-100 p-5 rounded-lg shadow">
      <div className="bg-gray-200 p-2 rounded-lg relative">
        <img
          className="w-30 h-30 mx-auto rounded-lg"
          src={icon}
          alt="bill card icon"
        />
        <div className="absolute right-0 bottom-0 ">
          <img
            className="w-10 h-10 p-2 bg-red-300 rounded-lg"
            src={bill_icon}
            alt="bill type icon"
          />
        </div>
      </div>

      <div className="text-center md:flex items-center justify-between gap-3 w-full py-2">
        <div>
          {paidBill.map((pbill) => {
            if (pbill.id === bill.id) {
              return (
                <div key={pbill.id}>
                  <p className="text-bold md:flex gap-2 text-green-500 font-bold">
                    {" "}
                    <SiTicktick size={20} className="mx-auto" /> Bill Paid
                  </p>
                </div>
              );
            }
          })}
        </div>
        <h2 className="text-xl font-semibold">{organization}</h2>
        <p>{bill_type}</p>
        <p>
          Amount: <span className="font-bold">{amount}</span>
        </p>
        <p>Due Date: {new Date(bill["due-date"]).toLocaleDateString()}</p>

        <Link
          to={`/bill-details/${id}`}
          className="btn btn-accent px-10"
          id="billId"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default BillsCard;
