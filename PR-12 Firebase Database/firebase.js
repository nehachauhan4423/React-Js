// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCupaFVzkE5JRiZLTIlT26aY9d7VMJj8bM",
  authDomain: "pr-12-firebase-database-97cce.firebaseapp.com",
  databaseURL: "https://pr-12-firebase-database-97cce-default-rtdb.firebaseio.com",
  projectId: "pr-12-firebase-database-97cce",
  storageBucket: "pr-12-firebase-database-97cce.firebasestorage.app",
  messagingSenderId: "571526755292",
  appId: "1:571526755292:web:965524533b34435b8f5519",
  measurementId: "G-HYNRR929KH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);