// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAurc5XSpW2ustSwuHLdSr4fCYRJZ7K_uA",
  authDomain: "rickymorty-app.firebaseapp.com",
  projectId: "rickymorty-app",
  storageBucket: "rickymorty-app.appspot.com",
  messagingSenderId: "1014563485508",
  appId: "1:1014563485508:web:7d4d3f35dbb10c186c8911"
};


// Initialize Firebase

const FirebaseApp = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)