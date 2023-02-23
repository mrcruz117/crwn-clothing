// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSPHLyAvNCoJhf-Ik_LLwh0tVGGq0uoV8",
  authDomain: "crwn-clothing-db-3e64c.firebaseapp.com",
  projectId: "crwn-clothing-db-3e64c",
  storageBucket: "crwn-clothing-db-3e64c.appspot.com",
  messagingSenderId: "868152736773",
  appId: "1:868152736773:web:eb5ce695c2cbd11218b06c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
