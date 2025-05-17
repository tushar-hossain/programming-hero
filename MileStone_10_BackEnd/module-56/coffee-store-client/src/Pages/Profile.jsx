import React from "react";
import { use } from "react";
import { useEffect } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { useState } from "react";

const Profile = () => {
  const { users } = use(AuthContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(
      `https://coffee-store-server-nine-gules.vercel.app/users/${users.email}`
    )
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [users.email]);

  const { address, email, name, phone, photo } = user || {};

  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="flex flex-col justify-center max-w-xs mx-auto p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
        <img
          src={photo}
          alt="user photo"
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              <span className="font-bold">E-mail:</span> {email}
            </p>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              <span className="font-bold">Address:</span> {address}
            </p>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              <span className="font-bold">Phone:</span> {phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
