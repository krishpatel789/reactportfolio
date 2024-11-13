// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDioV3kNdnV5J8R2rQGqsNKcsBvZev3yC8",
  authDomain: "portfolio-7cfa0.firebaseapp.com",
  databaseURL: "https://portfolio-7cfa0-default-rtdb.firebaseio.com",
  projectId: "portfolio-7cfa0",
  storageBucket: "portfolio-7cfa0.firebasestorage.app",
  messagingSenderId: "114301718666",
  appId: "1:114301718666:web:3bfb0ce13b1a4e7d6e5d73",
  measurementId: "G-Q4NJP38P04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics=getAnalytics(app);

export {app,analytics};