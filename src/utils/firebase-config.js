import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflix-clone-app-5e92c.firebaseapp.com",
  projectId: "netflix-clone-app-5e92c",
  storageBucket: "netflix-clone-app-5e92c.appspot.com",
  messagingSenderId: "174559455727",
  appId: "1:174559455727:web:29e9e15d34ec51c599ee1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);