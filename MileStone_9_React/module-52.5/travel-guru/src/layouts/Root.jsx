import React from "react";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="bg-[url(../../src/assets/Rectangle1.png)] bg-center bg-cover min-h-screen z-10">
      <div className="h-screen bg-linear-to-t from-[#0000008c] to-[#0000008c] z-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
