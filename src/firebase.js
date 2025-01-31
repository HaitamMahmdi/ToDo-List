// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGRzyl3Xc-r6NQwAT3nEXK2jhWiW8ppu8",
  authDomain: "todo-list-68ecf.firebaseapp.com",
  projectId: "todo-list-68ecf",
  storageBucket: "todo-list-68ecf.firebasestorage.app",
  messagingSenderId: "282030562344",
  appId: "1:282030562344:web:ffb3aa539d7bc9c694a91d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
