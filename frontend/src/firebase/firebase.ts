// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf6J5nsW6ypYzcWdbAjCJ8sFFmc2MAmhc",
  authDomain: "vite-contact-fcb9f.firebaseapp.com",
  projectId: "vite-contact-fcb9f",
  storageBucket: "vite-contact-fcb9f.firebasestorage.app",
  messagingSenderId: "1055586190629",
  appId: "1:1055586190629:web:a1986f87b5d5946d7806cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };