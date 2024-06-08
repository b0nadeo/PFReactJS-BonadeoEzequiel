import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcg40Naam-eykgV24aeFTduQ2sRL88O0U",
  authDomain: "reactjs-bonadeoezequiel.firebaseapp.com",
  projectId: "reactjs-bonadeoezequiel",
  storageBucket: "reactjs-bonadeoezequiel.appspot.com",
  messagingSenderId: "954454068405",
  appId: "1:954454068405:web:91a5217ba855e1246882fc"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()

export default db