import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3 py-5 px-2">
      <img src={logo} alt="news logo image" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="font-bold">
        <span>{format(new Date(), "EEEE,")}</span>
        <span className="text-accent">
          {format(new Date(), " MMMM MM, yyyy")}
        </span>
      </p>
    </div>
  );
};

export default Header;
