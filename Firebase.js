// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuRC4XuMQ9NW-Y3j0LG0jQDLu7XiSc0eY",
    authDomain: "erica-learn-react.firebaseapp.com",
    projectId: "erica-learn-react",
    storageBucket: "erica-learn-react.appspot.com",
    messagingSenderId: "592066995585",
    appId: "1:592066995585:web:47288bca4ed842b02c3480",
    measurementId: "G-LMRPLS7GCL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notesCollection = collection(db, "notes");
const analytics = getAnalytics(app);
