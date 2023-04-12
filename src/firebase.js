import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyxjHctR8ZlT3bE8POJga_iCx_9n92y-o",
  authDomain: "snapchat-clone-c9f06.firebaseapp.com",
  projectId: "snapchat-clone-c9f06",
  storageBucket: "snapchat-clone-c9f06.appspot.com",
  messagingSenderId: "250730905768",
  appId: "1:250730905768:web:49c5e8c407d0d1438f029d",
  measurementId: "G-D2M7DJLZ7N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
