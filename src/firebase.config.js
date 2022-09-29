// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkdsEvUCfQYVmrvocC-8FeRH89-0v13qA",
  authDomain: "house-marketplace-app-c1d1f.firebaseapp.com",
  projectId: "house-marketplace-app-c1d1f",
  storageBucket: "house-marketplace-app-c1d1f.appspot.com",
  messagingSenderId: "1073446628823",
  appId: "1:1073446628823:web:74f29089d3d9cb333def92",
  measurementId: "G-3KVSLC0R9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()