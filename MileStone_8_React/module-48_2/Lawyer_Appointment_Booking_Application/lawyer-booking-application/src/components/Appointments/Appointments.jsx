import React from "react";


const Appointments = ({ law, handelRemove }) => {
  const { license_no, name, consultation_fee_tk, expertise } = law || {};

  const handelDelete = (id) => {
    handelRemove(id);
  };

  return (
    <div>    
      {/* Appointments section */}
      <div className="py-8 border border-gray-300 mt-8 p-4 rounded-lg">
        <p>{name}</p>
        <div className="flex justify-between text-[#14141499] mt-4">
          <p>{expertise}</p>
          <p>Appointment Fee : {consultation_fee_tk} Taka</p>
        </div>
        <button
          onClick={() => handelDelete(license_no)}
          className="btn btn-outline text-[#FF0000] rounded-full w-full mt-4"
        >
          Cancel Appointment
        </button>
      </div>
    </div>
  );
};

export default Appointments;
