// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsjUP6Op5eC4jPmc6-7Ffc1aEJrg5hLeU",
  authDomain: "simple-ecommerce-4b6b8.firebaseapp.com",
  projectId: "simple-ecommerce-4b6b8",
  storageBucket: "simple-ecommerce-4b6b8.appspot.com",
  messagingSenderId: "769345800050",
  appId: "1:769345800050:web:012c6c303758fe4f753feb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;