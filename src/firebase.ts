import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4DVM9WWqbvGTJ8VgAdN8JAmZez0aNxzw",
  authDomain: "bookapp-7261c.firebaseapp.com",
  databaseURL:
    "https://bookapp-7261c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bookapp-7261c",
  storageBucket: "bookapp-7261c.appspot.com",
  messagingSenderId: "14524639532",
  appId: "1:14524639532:web:237b941b44ef9d9a6e2489",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export default firebaseApp;
