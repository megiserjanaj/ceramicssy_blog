import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA6rcuAyPKnekP0XGqVMh-Z-s3Il96Ucdw",
  authDomain: "ceramicssy.firebaseapp.com",
  projectId: "ceramicssy",
  storageBucket: "ceramicssy.appspot.com",
  messagingSenderId: "929642886420",
  appId: "1:929642886420:web:fb962c2b531d6df1de7e01",
});

var db = firebaseApp.firestore();

export { db };
