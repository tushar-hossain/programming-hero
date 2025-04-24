import React from "react";
import manImg from "../../assets/success-doctor.png";
import reviewImg from "../../assets/success-review.png";
import patientImg from "../../assets/success-patients.png";
import staffsImg from "../../assets/success-staffs.png";
import CountUp from "react-countup";

const LawService = () => {
  return (
    <div className="mt-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold">We Provide Best Law Services</h1>
        <p className="text-[#0F0F0F] mt-4">
          Get expert legal help when you need it — trusted lawyers, clear
          advice, fast appointments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        <div className="bg-[#0F0F0F26] p-6 rounded-lg space-y-2">
          <img src={manImg} alt="man image" />
          <p className="text-2xl font-bold">
            <CountUp end={199} enableScrollSpy={true} scrollSpyDelay={100} />+
          </p>
          <p>Total Lawyer</p>
        </div>

        <div className="bg-[#0F0F0F26] p-6 rounded-lg space-y-2">
          <img src={reviewImg} alt="review image" />
          <p className="text-2xl font-bold">
            <CountUp end={467} enableScrollSpy={true} scrollSpyDelay={100} />+
          </p>
          <p>Total Reviews</p>
        </div>

        <div className="bg-[#0F0F0F26] p-6 rounded-lg space-y-2">
          <img src={patientImg} alt="patient image" />
          <p className="text-2xl font-bold">
            <CountUp end={1900} enableScrollSpy={true} scrollSpyDelay={100} />+
          </p>
          <p>Cases Initiated</p>
        </div>

        <div className="bg-[#0F0F0F26] p-6 rounded-lg space-y-2">
          <img src={staffsImg} alt="staff image" />
          <p className="text-2xl font-bold">
            <CountUp end={300} enableScrollSpy={true} scrollSpyDelay={100} />+
          </p>
          <p>Total Stuffs</p>
        </div>
      </div>
    </div>
  );
};

export default LawService;
