// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl40EoLxyfLu_7ABxOJFDmnOZSF3mvJoQ",
  authDomain: "crown-clothing-ecd28.firebaseapp.com",
  projectId: "crown-clothing-ecd28",
  storageBucket: "crown-clothing-ecd28.appspot.com",
  messagingSenderId: "62557093929",
  appId: "1:62557093929:web:9ed8ba4c20f7b7c9329c38",
  measurementId: "G-VDWJPVFFPN"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
