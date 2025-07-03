import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:  import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:  import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket:  import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId:  import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId:  import.meta.env.VITE_FIREBASE_APPID,
  databaseURL:  import.meta.env.VITE_FIREBASE_DATABASEURL,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);