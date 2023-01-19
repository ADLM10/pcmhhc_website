import { getStorage } from "@firebase/storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvTN1GzYHYRXN6_USUrlmS3gPTr_cO7So",
  authDomain: "pchhmc-website.firebaseapp.com",
  projectId: "pchhmc-website",
  storageBucket: "pchhmc-website.appspot.com",
  messagingSenderId: "764101601877",
  appId: "1:764101601877:web:e2a9577f4b788694ec42dc",
  measurementId: "G-XG3B8TC75R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
