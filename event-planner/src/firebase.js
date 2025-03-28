// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQia0QJoK82Yd8WK992dvHi6OnDapvjOw",
  authDomain: "fir-4ffc3.firebaseapp.com",
  projectId: "fir-4ffc3",
  storageBucket: "fir-4ffc3.firebasestorage.app",
  messagingSenderId: "591797230316",
  appId: "1:591797230316:web:562e2c37a9e60c3bd523c9",
  measurementId: "G-3X11XL4LL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);