// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-26O1-1EjpR-yXZaL1721X_imJ2yEz_4",
  authDomain: "travel-guru-108cc.firebaseapp.com",
  projectId: "travel-guru-108cc",
  storageBucket: "travel-guru-108cc.firebasestorage.app",
  messagingSenderId: "433464178818",
  appId: "1:433464178818:web:095837038a0c851de2dc9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
