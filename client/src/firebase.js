// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "homerentals-6deab.firebaseapp.com",
  projectId: "homerentals-6deab",
  storageBucket: "homerentals-6deab.appspot.com",
  messagingSenderId: "772193814462",
  appId: "1:772193814462:web:48dad682b5fb5469989bef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);