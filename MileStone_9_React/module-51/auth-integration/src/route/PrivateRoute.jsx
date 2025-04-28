import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <p className="text-center">
        <span className="loading loading-bars loading-lg"></span>
      </p>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login" />;
  }
  return children;
};

export default PrivateRoute;
