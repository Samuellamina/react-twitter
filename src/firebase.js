// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-0WORt1uoUVPgPmfeK04FjVJA1PX70eM",
  authDomain: "twitter-clone-cb2c9.firebaseapp.com",
  projectId: "twitter-clone-cb2c9",
  storageBucket: "twitter-clone-cb2c9.appspot.com",
  messagingSenderId: "368133012376",
  appId: "1:368133012376:web:c4666b5c731800923309ed",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

export default db;

// export default db;
