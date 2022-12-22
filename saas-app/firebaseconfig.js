

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAQwg-ch302fNsxOKtZwgJazQonkRzbj2c",
  authDomain: "react-3a5d6.firebaseapp.com",
  projectId: "react-3a5d6",
  storageBucket: "react-3a5d6.appspot.com",
  messagingSenderId: "249081876892",
  appId: "1:249081876892:web:8657a1beecd80e7f3b3859",
  measurementId: "G-0LYV5QGNF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

export { auth, db };

