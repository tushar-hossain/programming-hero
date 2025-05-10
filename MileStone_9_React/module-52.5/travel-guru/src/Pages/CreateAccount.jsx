import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { NavLink } from "react-router";

const CreateAccount = () => {
  const { createUser, setUser } = use(AuthContext);

  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    //   create user
    createUser(email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-20">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <form onSubmit={handelSubmit}>
          {/* email field */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full mb-3"
            placeholder="Email"
          />

          {/* password field */}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="Password"
          />
          <button
            type="submit"
            className="btn btn-neutral mt-4 w-full bg-[#F9A51A]"
          >
            Create an account
          </button>
          <p className="mt-3">
            Already have an account?{" "}
            <NavLink to="/auth/login" className="text-[#F9A51A]">
              Login
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
