import React from "react";
import { useLoaderData, useNavigate } from "react-router";
const UsersDetails = () => {
  const { name, email, phone, address } = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <h3>This is Users Details</h3>
      <div style={{ border: "2px dotted white" }}>
        <h3>{name}</h3>
        <h3>{email}</h3>
        <h3>{phone}</h3>
        <h3>{address.city}</h3>
      </div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default UsersDetails;
