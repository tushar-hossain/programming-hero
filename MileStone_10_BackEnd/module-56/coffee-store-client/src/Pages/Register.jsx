import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../AuthContext/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { createUsers, setUsers, updateUserProfile } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handelRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    // const formData = new FormData(form);
    const { email, password, ...userData } = Object.fromEntries(
      new FormData(form).entries()
    );

    //   create user
    createUsers(email, password)
      .then((result) => {
        const userInfo = {
          email,
          ...userData,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        // user create db
        fetch("https://coffee-store-server-nine-gules.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              // update user profile
              const { name, photo } = Object.fromEntries(
                new FormData(form).entries()
              );
              updateUserProfile({ displayName: name, photoURL: photo })
                .then(() => {
                  setUsers(result.user);
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Added new user successful.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                })
                .catch(() => {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Please try again.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                });
            }
          });
        navigate(location.state || "/");
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Please try again.",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="py-15 px-5">
      <div className="card bg-base-300 mx-auto max-w-md shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Registration</h1>
          <form onSubmit={handelRegister} className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Name"
            />
            {/* photo url */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Photo URL"
            />
            {/* phone */}
            <label className="label">Phone</label>
            <input
              type="text"
              name="phone"
              className="input w-full"
              placeholder="Phone"
            />
            {/* Address */}
            <label className="label">Address</label>
            <input
              type="text"
              name="address"
              className="input w-full"
              placeholder="Address"
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Password"
            />
            <div>
              <p className="mt-2">
                Already have an account?{" "}
                <Link className="underline font-bold" to="/login">
                  Login
                </Link>{" "}
              </p>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
