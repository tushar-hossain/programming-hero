import React, { use } from "react";
import AuthContext from "../AuthContext/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const ResetPassword = () => {
  const { ResetPassword } = use(AuthContext);
  const navigate = useNavigate();

  const handelReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    ResetPassword(email)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Password reset email sent!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
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
    <div className="py-12 w-11/12 mx-auto">
      <form
        onSubmit={handelReset}
        className="fieldset card-body w-2/3 md:w-2/4 mx-auto"
      >
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input w-full"
          placeholder="Email"
        />
        <button className="btn btn-neutral mt-4">Reset</button>
      </form>
    </div>
  );
};

export default ResetPassword;
