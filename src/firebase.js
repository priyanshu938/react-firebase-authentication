import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBq_DUNZkzPuVCY11NjFDgg_2rLXWzF5rc",
    authDomain: "react-authentication-57d9d.firebaseapp.com",
    projectId: "react-authentication-57d9d",
    storageBucket: "react-authentication-57d9d.appspot.com",
    messagingSenderId: "884003555063",
    appId: "1:884003555063:web:4112568b874528ce1475f2",
    measurementId: "G-B3NBC7822B"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
