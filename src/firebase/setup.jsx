import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAlqtRIr_zUGOPj3GLiusqI5UcrXOWyWpQ",
  authDomain: "netflix-clone-d3260.firebaseapp.com",
  projectId: "netflix-clone-d3260",
  storageBucket: "netflix-clone-d3260.firebasestorage.app",
  messagingSenderId: "503841985346",
  appId: "1:503841985346:web:d937fb5b60dad6a220eedb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
