import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflix-clone-app-mern-2edf9.firebaseapp.com",
  projectId: "netflix-clone-app-mern-2edf9",
  storageBucket: "netflix-clone-app-mern-2edf9.appspot.com",
  messagingSenderId: "912189318475",
  appId: "1:912189318475:web:cd3dc72c6b59fab09df4ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);