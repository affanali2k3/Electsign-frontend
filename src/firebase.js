import {
  FacebookAuthProvider,signInWithPopup
} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ62lzTdcM0A2PMKBztJ1r01jwt1Gu3RY",
  authDomain: "electsign.firebaseapp.com",
  projectId: "electsign",
  storageBucket: "electsign.appspot.com",
  messagingSenderId: "679317530923",
  appId: "1:679317530923:web:0b0738ef79c06a1f28fd6e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
























// import { app } from "./init";

const fbAuthProvider = new FacebookAuthProvider(); // facebook authentication

export const FacebookAuth = async () => {
  try {
    const fbAuth = signInWithPopup(auth, fbAuthProvider);
    return fbAuth;
  } catch (error) {
    console.log(error);
  }
}
