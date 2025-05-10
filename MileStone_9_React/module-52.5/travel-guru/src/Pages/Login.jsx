import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";

const Login = () => {
  const { logInUser, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    //   login user
    logInUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-20">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Login</h1>
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
          <div className="flex items-center justify-between mt-3">
            <label className="label">
              <input type="checkbox" className="checkbox" />
              Remember me
            </label>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="btn btn-neutral mt-4 w-full bg-[#F9A51A]"
          >
            Login
          </button>
          <p className="mt-3">
            Don’t have an account?{" "}
            <NavLink to="/auth/create-account" className="text-[#F9A51A]">
              Create an account
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
