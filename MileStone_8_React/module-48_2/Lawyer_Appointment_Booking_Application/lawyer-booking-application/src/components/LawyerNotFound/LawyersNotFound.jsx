import React from "react";
import { Link } from "react-router";

const LawyersNotFound = ({ license }) => {
  return (
    <div className="space-y-3 text-center py-12">
      <h1 className="text-3xl font-bold">Lawyer Not Found</h1>
      <p>No Lawyer Found width this License No- </p>
      <h3 className="font-bold">License: {license}</h3>
      <Link to="/">
        <button className="btn btn-primary">Go Back Home</button>
      </Link>
    </div>
  );
};

export default LawyersNotFound;
