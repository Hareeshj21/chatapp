
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
import { getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-b5bde.firebaseapp.com",
  projectId: "reactchat-b5bde",
  storageBucket: "reactchat-b5bde.appspot.com",
  messagingSenderId: "731549835850",
  appId: "1:731549835850:web:5610fc16aebabf6856bcb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth()
export const db = getFirestore()
export const storage =getStorage()