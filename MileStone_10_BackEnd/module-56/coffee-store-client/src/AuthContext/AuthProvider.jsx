import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { auth } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // create user
  const createUsers = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logOut user
  const logOutUser = () => {
    return signOut(auth)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "LogOut successful..",
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
  };

  // reset password
  const ResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // update user profile
  const updateUserProfile = (userObj) => {
    return updateProfile(auth.currentUser, userObj);
  };

  // on stage user auth
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
      setIsLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    isLoading,
    setIsLoading,
    users,
    setUsers,
    createUsers,
    loginUser,
    logOutUser,
    ResetPassword,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
