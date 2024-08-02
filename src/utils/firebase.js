// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.FIREBASE,
  authDomain: "blog-e934d.firebaseapp.com",
  projectId: "blog-e934d",
  storageBucket: "blog-e934d.appspot.com",
  messagingSenderId: "260510111051",
  appId: "1:260510111051:web:507640ad421c62dcc5c4ce"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);