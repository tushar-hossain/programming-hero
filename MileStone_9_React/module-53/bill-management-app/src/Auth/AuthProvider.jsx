import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firbase.config";
import { toast } from "react-toastify";

// google provider
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(10000);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google create user
  const createGoogleUser = () => {
    return signInWithPopup(auth, provider);
  };

  // user profile update
  const userProfileUpdate = (userObj) => {
    return updateProfile(auth.currentUser, userObj);
  };

  // reset user email password
  const userResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // logout user
  const userLogOut = () => {
    signOut(auth)
      .then(() => {
        toast("LogOut successful");
      })
      .catch(() => {
        toast("Please try again");
      });
  };

  // state observer and get user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    createUser,
    loginUser,
    user,
    setUser,
    loading,
    setLoading,
    createGoogleUser,
    userProfileUpdate,
    userResetPassword,
    amount,
    setAmount,
    userLogOut,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
