// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// database imports
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentfromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log("userDocRef: ", userDocRef);
  const userSnapshop = await getDoc(userDocRef);
  console.log("userSnapshop: ", userSnapshop);
  console.log("userSnapshop: ", userSnapshop.exists());
  if (!userSnapshop.exists()) {
    // if user data does not exist
    // create user data
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user: ", error.message);
    }
  }

  // if user data exists
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  const res = await createUserWithEmailAndPassword(auth, email, password);
  return res;
};
