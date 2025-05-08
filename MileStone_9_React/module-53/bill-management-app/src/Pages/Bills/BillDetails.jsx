import React, { use, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { AuthContext } from "../../Auth/AuthContext";
import { addBill } from "../../utils/utils";

const BillDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [payBills, setPayBills] = useState([]);
  const { setAmount } = use(AuthContext);
  const navigate = useNavigate();

  const { bill_type, icon, organization, amount, description, bill_icon } =
    payBills || {};

  useEffect(() => {
    const findBill = data.find((bill) => bill.id === parseInt(id));
    setPayBills(findBill);
  }, [data, id]);

  // pay bill
  const handelPayBill = (bill) => {
    addBill(bill);
    setAmount((prev) => prev - amount);
    navigate("/bills");
  };

  return (
    <div className="flex gap-10 bg-base-100 p-5 rounded-lg my-10">
      <div className="bg-gray-200 p-2 rounded-lg relative">
        <img
          className="w-30 h-30 mx-auto rounded-lg"
          src={icon}
          alt="bill icon"
        />
        <div className="absolute right-0 bottom-0 ">
          <img
            className="w-15 h-15 p-2 bg-red-200 rounded-lg"
            src={bill_icon}
            alt="bill type icon"
          />
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-semibold">{organization}</h2>
        <p>{bill_type}</p>
        <p>
          Amount: <span className="font-bold">{amount}</span>
        </p>
        <p>Due Date: {new Date(payBills["due-date"]).toLocaleDateString()}</p>
        <p>{description}</p>

        <button
          onClick={() => handelPayBill(payBills)}
          className="btn btn-accent px-10 mt-2"
        >
          Pay Bill
        </button>
      </div>
    </div>
  );
};

export default BillDetails;
