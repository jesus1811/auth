import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBL-sPW1nJZ4Eb6Hn_V2ZPb6Wds9Hhdvxc",
  authDomain: "auth-27170.firebaseapp.com",
  projectId: "auth-27170",
  storageBucket: "auth-27170.appspot.com",
  messagingSenderId: "224578283854",
  appId: "1:224578283854:web:b5d37ade46f6f87f27161f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
