// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFTXKGCUZ-Ft2M66vbJjboezxlQv8Xz_g",
  authDomain: "auth-integration-1499a.firebaseapp.com",
  projectId: "auth-integration-1499a",
  storageBucket: "auth-integration-1499a.firebasestorage.app",
  messagingSenderId: "842460827211",
  appId: "1:842460827211:web:9e1584f2a387096d07c7ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
