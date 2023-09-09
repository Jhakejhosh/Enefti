import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

// Enefti-web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwBTImIcgtuVGRwrH12-laiT4xUHUrEu8",
  authDomain: "enefti-fa3c2.firebaseapp.com",
  projectId: "enefti-fa3c2",
  storageBucket: "enefti-fa3c2.appspot.com",
  messagingSenderId: "699455956606",
  appId: "1:699455956606:web:b0395b75cd39c8a005da2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)