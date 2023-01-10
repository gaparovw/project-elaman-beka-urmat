import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAs4Ii9vAm65qMJUG_KqFm7dwA1yEOioKg",
    authDomain: "beka-ff3a4.firebaseapp.com",
    projectId: "beka-ff3a4",
    storageBucket: "beka-ff3a4.appspot.com",
    messagingSenderId: "764465277640",
    appId: "1:764465277640:web:fa3a1b4c925bc67f1113fd",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
