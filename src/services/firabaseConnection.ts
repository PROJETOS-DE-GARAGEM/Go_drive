import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


const firebaseConfig = {
  apiKey: "AIzaSyDgtqQJqO6-mCNFOtHUlbxevGvMrDC_k14",
  authDomain: "godrive-2827a.firebaseapp.com",
  projectId: "godrive-2827a",
  storageBucket: "godrive-2827a.firebasestorage.app",
  messagingSenderId: "690237672967",
  appId: "1:690237672967:web:e78bbecff66164f85464a2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Inicializa o Firebase Auth com persistência em memória
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { db, auth };
