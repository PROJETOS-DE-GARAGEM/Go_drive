import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.API_KEY_SECRET,
  authDomain: "godrive-2827a.firebaseapp.com",
  projectId: "godrive-2827a",
  storageBucket: "godrive-2827a.firebasestorage.app",
  messagingSenderId: "690237672967",
  appId: "1:690237672967:web:e78bbecff66164f85464a2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
