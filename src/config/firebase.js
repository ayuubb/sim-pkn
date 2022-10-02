// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhpLAc9nr_nZhHFjvF6cueN31IO4j7pzc",
  authDomain: "sim-pkn.firebaseapp.com",
  projectId: "sim-pkn",
  storageBucket: "sim-pkn.appspot.com",
  messagingSenderId: "501182557899",
  appId: "1:501182557899:web:044ebc631883b5c0b0f54e",
  measurementId: "G-3DEMQSVWE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);