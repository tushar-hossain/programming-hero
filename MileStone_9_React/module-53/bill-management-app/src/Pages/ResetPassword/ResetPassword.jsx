import React, { use } from "react";
import { AuthContext } from "../../Auth/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const ResetPassword = () => {
  const { userResetPassword } = use(AuthContext);
  const navigate = useNavigate();

  const handelResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    //   reset password
    userResetPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
        navigate("/login");
      })
      .catch(() => {
        toast.error("Please try again");
      });
  };

  return (
    <div className="flex items-center justify-center text-center text-base-200 h-[100vh]">
      <form
        onSubmit={handelResetPassword}
        className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg bg-gray-600"
      >
        <label htmlFor="username" className="self-start text-xs font-semibold">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="flex items-center h-12 px-4 mt-2 rounded dark:text-gray-50 border border-base-100 focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600"
          placeholder="Enter email"
        />

        <button
          type="submit"
          className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
