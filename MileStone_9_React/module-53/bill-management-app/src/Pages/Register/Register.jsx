import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Auth/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const [eye, setEye] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const { createUser, setUser, createGoogleUser, userProfileUpdate } =
    use(AuthContext);
  const navigate = useNavigate();

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    setErrorMessage(false);

    if (password.length < 6) {
      return setErrorMessage("password at least 6 character");
    }

    if (name.length < 3) {
      return setErrorMessage("At least 3 character Username");
    } else if (photo.length < 1) {
      return setErrorMessage("Please provide photo url");
    } else if (emailRegex.test(email) === false) {
      return setErrorMessage("Invalid email");
    } else if (passwordRegex.test(password) === false) {
      return setErrorMessage(
        "Must be password 1 lowercase, 1 uppercase, 1 digits"
      );
    }

    // create user
    createUser(email, password)
      .then((result) => {
        // user profile update
        userProfileUpdate({ displayName: name, photoURL: photo })
          .then(() => {
            setUser(result.user);
            toast.success("Registration successful");
            navigate("/");
          })
          .catch(() => {
            toast.error("Please provide userName and photoURL");
          });
      })
      .catch(() => {
        toast.error("Email already exists");
      });
  };

  // google create user
  const handelGoogle = () => {
    createGoogleUser()
      .then((result) => {
        setUser(result.user);
        navigate("/");
        toast("Registration successful");
      })
      .catch(() => {
        toast("Email already exists");
      });
  };

  return (
    <div className="py-12">
      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-black text-white">
        <h1 className="text-2xl font-bold text-center">Registration</h1>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-3">{errorMessage}</p>
        )}
        <form onSubmit={handelRegister} className="space-y-6">
          {/* name */}
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block">
              Name
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Enter name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          {/* photo */}
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block">
              PhotoURL
            </label>
            <input
              type="text"
              required
              name="photo"
              placeholder="Enter photo URL"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          {/* email */}
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block">
              E-mail
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Enter email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            {/* password */}
            <label htmlFor="password" className="block">
              Password
            </label>
            <div className="relative">
              <input
                type={eye ? "text" : "password"}
                required
                name="password"
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <p
                onClick={() => setEye(!eye)}
                className=" absolute text-black top-4 right-4"
              >
                {eye ? <FaEyeSlash /> : <FaEye />}
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600 cursor-pointer"
          >
            Register
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm ">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          {/* google */}
          <button
            onClick={handelGoogle}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 ">
          Don't have an account?{" "}
          <Link className=" underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
