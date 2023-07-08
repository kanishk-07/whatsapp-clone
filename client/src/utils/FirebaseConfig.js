import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA91YVYyL4KYvvlRodGTzqDjMSQ1umEjRI",
  authDomain: "whatsapp-clone-14796.firebaseapp.com",
  projectId: "whatsapp-clone-14796",
  storageBucket: "whatsapp-clone-14796.appspot.com",
  messagingSenderId: "486636709823",
  appId: "1:486636709823:web:474d14028a577f30c7630a"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)