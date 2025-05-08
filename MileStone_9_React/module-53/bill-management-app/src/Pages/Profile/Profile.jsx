import React, { use, useState } from "react";
import { AuthContext } from "../../Auth/AuthContext";
import { MdModeEdit } from "react-icons/md";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, userProfileUpdate, setUser } = use(AuthContext);
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState({
    displayName: user.displayName,
    photoURL: user.photoURL,
  });

  const handelUpDateProfile = (e) => {
    e.preventDefault();
    userProfileUpdate(profile)
      .then(() => {
        toast.success("Profile update successful");
        setUser((prev) => {
          if (profile.displayName) {
            prev.displayName = profile.displayName;
          }
          if (profile.photoURL) {
            prev.photoURL = profile.photoURL;
          }

          return { ...prev };
        });
      })
      .catch(() => {
        toast.error("Update failed");
      });
  };

  return (
    <div className="py-12 flex flex-col items-center justify-center">
      <div tabIndex={0} role="button" className="avatar relative">
        <div className="w-40 rounded-full">
          <img src={user.photoURL} />
        </div>
        <div
          onClick={() => setEdit(!edit)}
          className="p-3 bg-green-600 rounded-full w-15 h-15 text-white cursor-pointer absolute -right-5 bottom-2"
        >
          <MdModeEdit className="mx-auto" size={30} />
        </div>
      </div>
      <h2 className="font-bold mt-5">{user.displayName}</h2>

      {edit && (
        <div>
          <div>
            <form onSubmit={handelUpDateProfile} className="space-y-3">
              <label htmlFor="username" className="block">
                User Name
              </label>
              <input
                type="text"
                name="name"
                value={profile.displayName}
                onChange={(e) => {
                  setProfile({ ...profile, displayName: e.target.value });
                }}
                placeholder="User Name"
                className="w-full px-4 py-3 rounded-md 
              dark:border-gray-300
              dark:bg-gray-50
              dark:text-gray-800  focus:dark:border-violet-600"
              />
              <label htmlFor="password" className="block">
                PhotoURL
              </label>
              <input
                type="text"
                name="photo"
                value={profile.photoURL}
                onChange={(e) => {
                  setProfile({ ...profile, photoURL: e.target.value });
                }}
                placeholder="PhotoURL"
                className="w-full px-4 py-3 rounded-md 
              dark:border-gray-300
              dark:bg-gray-50
              dark:text-gray-800  focus:dark:border-violet-600"
              />
              <button
                type="submit"
                className="block w-full p-3 text-center rounded-sm bg-violet-600 cursor-pointer text-white"
              >
                Submit
              </button>
            </form>
            <button
              onClick={() => setEdit(false)}
              type="submit"
              className="block w-full p-3 text-center rounded-sm bg-violet-600 cursor-pointer text-white mt-3"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
