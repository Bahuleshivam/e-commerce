import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCl_StxEzDQKuc4GdLMS3UanlIrE8bAY1Q",
  authDomain: "e-commerce-3e500.firebaseapp.com",
  projectId: "e-commerce-3e500",
  storageBucket: "e-commerce-3e500.appspot.com",
  messagingSenderId: "408148775819",
  appId: "1:408148775819:web:d634652d6ba3ac1a09158e",
  measurementId: "G-KVN5Y6BQX1"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;