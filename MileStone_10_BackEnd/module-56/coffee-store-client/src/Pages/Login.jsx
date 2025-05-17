import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../AuthContext/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, setUsers } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handelLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    //   login user
    loginUser(email, password)
      .then((result) => {
        const userInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        // update user login time
        fetch("https://coffee-store-server-nine-gules.vercel.app/users", {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              setUsers(result.user);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login successful.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(location.state || "/");
            }
          });
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Please registration first.",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="py-15 px-5">
      <div className="card bg-base-300 mx-auto max-w-md shrink-0 shadow-2xl ">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Login</h1>
          <form onSubmit={handelLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Password"
            />
            <div>
              <Link to="/reset-password">Forgot password?</Link>
              <p className="mt-2">
                Don't have an account?{" "}
                <Link className="underline font-bold" to="/register">
                  Register
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

export default Login;
