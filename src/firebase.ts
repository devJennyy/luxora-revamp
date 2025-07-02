import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCckaLPIyPOzYzaWDVZxS5OOBUGtlvulss",
  authDomain: "luxora-by-devjenny.firebaseapp.com",
  projectId: "luxora-by-devjenny",
  storageBucket: "luxora-by-devjenny.firebasestorage.app",
  messagingSenderId: "220615920242",
  appId: "1:220615920242:web:54ba7d8cc093f2d4fa10eb",
  databaseURL: "https://luxora-by-devjenny-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);