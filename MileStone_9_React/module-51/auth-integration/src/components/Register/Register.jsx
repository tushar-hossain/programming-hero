import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-8 shrink-0 shadow-2xl">
      <div className="card-body space-y-2">
        <h1 className="text-3xl font-bold">Register now!</h1>
        <form onSubmit={handelRegister} className="space-y-2">
          <label className="label">Name</label>
          <input type="text" className="input" name="name" placeholder="Name" />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
          />
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>
          Already have an account? Please{"  "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
