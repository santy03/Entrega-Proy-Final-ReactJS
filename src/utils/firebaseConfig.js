// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXdvbZGBrvFNueI4oUR_tWk19ULq7kbdA",
  authDomain: "react-js-proyecto-final.firebaseapp.com",
  projectId: "react-js-proyecto-final",
  storageBucket: "react-js-proyecto-final.appspot.com",
  messagingSenderId: "969784391375",
  appId: "1:969784391375:web:3ee145128bfb834eb1e9ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
