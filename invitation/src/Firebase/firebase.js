import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDudKw_rctgymxbTDLuDO4062_2PBksC_Y",
  authDomain: "quaterlytechreboot.firebaseapp.com",
  projectId: "quaterlytechreboot",
  storageBucket: "quaterlytechreboot.firebasestorage.app",
  messagingSenderId: "296388551087",
  appId: "1:296388551087:web:45bd3a5964a87482e0cf5a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
