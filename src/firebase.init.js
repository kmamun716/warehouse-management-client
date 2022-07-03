// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFJ3EFPMM3UtRm9FvBliW8zlgu6nn_y-8",
  authDomain: "warehouse-1f362.firebaseapp.com",
  projectId: "warehouse-1f362",
  storageBucket: "warehouse-1f362.appspot.com",
  messagingSenderId: "1076756764638",
  appId: "1:1076756764638:web:50758d78a148421f426f4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;