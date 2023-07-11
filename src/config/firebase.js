// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl8kz3O4Shi0q-x3Sb2z_3rWOqVqcFSNo",
  authDomain: "disney-plus-7b0db.firebaseapp.com",
  projectId: "disney-plus-7b0db",
  storageBucket: "disney-plus-7b0db.appspot.com",
  messagingSenderId: "493027605923",
  appId: "1:493027605923:web:df08d308d1b020c2c72e16",
  measurementId: "G-8GLM8XT3XS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, db };
// const analytics = getAnalytics(app);
