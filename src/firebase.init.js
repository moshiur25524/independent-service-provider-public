// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnKEfs9yeDh5MfwBjRHrjlnOw4w5xp2SA",
  authDomain: "home-tutor-f78f7.firebaseapp.com",
  projectId: "home-tutor-f78f7",
  storageBucket: "home-tutor-f78f7.appspot.com",
  messagingSenderId: "45535583324",
  appId: "1:45535583324:web:090dc4d3c2eef55c059a99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;