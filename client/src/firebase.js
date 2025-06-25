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
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCDrfS1_Ma33lu8vO4yYQNVIoK5NBhnFKM",
//   authDomain: "homerentals-dfbe0.firebaseapp.com",
//   projectId: "homerentals-dfbe0",
//   storageBucket: "homerentals-dfbe0.firebasestorage.app",
//   messagingSenderId: "911933362449",
//   appId: "1:911933362449:web:6cca059231a3b03ea97cb0",
//   measurementId: "G-MZNWY95QYN"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);