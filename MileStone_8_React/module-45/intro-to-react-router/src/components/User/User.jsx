import React, { use, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";

const User = ({ userPromise }) => {
  const user = use(userPromise);
  const [visitHome, setVisitHome] = useState(false);

  const navigate = useNavigate();

  if (visitHome) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>This is User Page</h2>
      {user.map((users) => {
        const { id, name, email, phone } = users;
        return (
          <div key={id} style={{ border: "1px solid white", margin: "10px" }}>
            <h4>Name: {name}</h4>
            <p>E-mail: {email}</p>
            <p>
              <small>Phone: {phone}</small>
            </p>
            <button onClick={() => navigate(`/user/${id}`)}>
              Read more...
            </button>
            <button onClick={() => setVisitHome(true)}>visit home </button>
          </div>
        );
      })}
    </div>
  );
};

export default User;
