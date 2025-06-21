// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCM7BK5rrDBKaVtyECDRf8Y2jmviuCUD2k",
  authDomain: "bluestock-auth-d9f8a.firebaseapp.com",
  projectId: "bluestock-auth-d9f8a",
  storageBucket: "bluestock-auth-d9f8a.appspot.com",
  messagingSenderId: "181936208706",
  appId: "1:181936208706:web:ad9968a852ffd63093a6db"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
