// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgm7kawHOG-E16xnG0xPRWjA3hoSrUY8s",
  authDomain: "startups-1b7ee.firebaseapp.com",
  projectId: "startups-1b7ee",
  storageBucket: "startups-1b7ee.firebasestorage.app",
  messagingSenderId: "149008536478",
  appId: "1:149008536478:web:26c351189269165e30bc8f",
  measurementId: "G-J5N729SQZB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // remove if you don't have/want analytics

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);