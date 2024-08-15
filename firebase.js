// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnFE5qnll1IZ2Dpxa2l1DrgHHeKQrCZn8",
  authDomain: "flashcardsaas-c2759.firebaseapp.com",
  projectId: "flashcardsaas-c2759",
  storageBucket: "flashcardsaas-c2759.appspot.com",
  messagingSenderId: "874878181122",
  appId: "1:874878181122:web:c89dc30aa2bcb8c8456c1b",
  measurementId: "G-GN9L117QZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);