import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCsPHajSnJ4YGtphTnL9XG7UW3lc7EZucQ",
  authDomain: "react-realtime-db-30bcb.firebaseapp.com",
  databaseURL: "https://react-realtime-db-30bcb-default-rtdb.firebaseio.com",
  projectId: "react-realtime-db-30bcb",
  storageBucket: "react-realtime-db-30bcb.firebasestorage.app",
  messagingSenderId: "17980956090",
  appId: "1:17980956090:web:ca4677543332f8dd155183",
  measurementId: "G-2GLNKS5L0B"
};
export const app = initializeApp(firebaseConfig);