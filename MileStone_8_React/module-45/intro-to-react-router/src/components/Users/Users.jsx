import React from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h3>This is Users Page</h3>
    </div>
  );
};

export default Users;
