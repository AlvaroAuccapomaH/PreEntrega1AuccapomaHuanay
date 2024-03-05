// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVKDnXaSracRyL0d7eAG-Wt60zj9uHM7s",
    authDomain: "farmaciacurita-4420a.firebaseapp.com",
    projectId: "farmaciacurita-4420a",
    storageBucket: "farmaciacurita-4420a.appspot.com",
    messagingSenderId: "599208988538",
    appId: "1:599208988538:web:8a73b96d93cab1c9d410c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);