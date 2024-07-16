// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgH1CSsTHA66U8TillLAHjzvrwj3uUeaU",
    authDomain: "ema-john-firebase-auth-23b70.firebaseapp.com",
    projectId: "ema-john-firebase-auth-23b70",
    storageBucket: "ema-john-firebase-auth-23b70.appspot.com",
    messagingSenderId: "827716880769",
    appId: "1:827716880769:web:30b546026c6221d4414080",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
