// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCF5S9lEaiV8Cdr_q_M4xwSeDYYFv4oTJM",
  authDomain: "netflix-clone-app-mern.firebaseapp.com",
  projectId: "netflix-clone-app-mern",
  storageBucket: "netflix-clone-app-mern.appspot.com",
  messagingSenderId: "1087919380286",
  appId: "1:1087919380286:web:87663fb02c36174321fe6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);