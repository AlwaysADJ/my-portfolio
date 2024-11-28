// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc3tVacE5_WMEwU9eybcCnkSKbKUoxEaQ",
  authDomain: "joshua-adenuga.firebaseapp.com",
  projectId: "joshua-adenuga",
  storageBucket: "joshua-adenuga.firebasestorage.app",
  messagingSenderId: "10183075996",
  appId: "1:10183075996:web:2c473fe4ee01c71c532559",
  measurementId: "G-9QHRQ53K19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);