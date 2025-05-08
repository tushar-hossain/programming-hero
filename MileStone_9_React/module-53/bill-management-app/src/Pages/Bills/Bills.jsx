import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import BillsCard from "./BillsCard";

const Bills = () => {
  const [bills, setBills] = useState([]);
  const [billType, setBillType] = useState([]);
  const [selected, setSelected] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    fetch("/bill_typeData.json")
      .then((res) => res.json())
      .then((data) => setBills(data));
    if (billType.length === 0) {
      setBillType(data);
    } else {
      const filterBill = data.filter((bill) => bill.bill_type === selected);
      setBillType(filterBill);
    }
  }, [data, selected]);

  return (
    <div className="py-12">
      <h1 className="text-xl md:text-3xl font-bold text-center mb-8">
        My Bill
      </h1>

      {/* selected bill */}
      <div className="md:flex items-center gap-5 text-center">
        <h1 className="text-xl md:text-3xl font-bold mb-5 md:mb-0">
          Select your Bill:
        </h1>
        <label htmlFor="bill">
          <select
            name="bill-type"
            id="bill-type"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="border px-3 py-2 rounded-md text-sm md:text-xl"
          >
            <option value="">-- Choose an option --</option>
            {bills.map((type) => (
              <option key={type.id} value={type.bill_type}>
                {type.bill_type}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* All bill card */}
      <div className="grid grid-cols-1 gap-5 py-10">
        {billType.map((bill) => (
          <BillsCard key={bill.id} bill={bill} />
        ))}
      </div>
    </div>
  );
};

export default Bills;
