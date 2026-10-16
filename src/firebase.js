import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoh83pnb4LIWhzAkrfD7T_Wf2tcwzsg",
  authDomain: "ecoconnect-db.firebaseapp.com",
  projectId: "ecoconnect-db",
  storageBucket: "ecoconnect-db.firebasestorage.app",
  messagingSenderId: "455096219302",
  appId: "1:455096219302:web:5ee6b6f7573b37e45a6667",
  measurementId: "G-DCBYMLV5VS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
