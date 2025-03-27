import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCotQn6sSr4zsCJjTwYaUD7kmZMHT6FQuc",
  authDomain: "ptac-3dbe8.firebaseapp.com",
  projectId: "ptac-3dbe8",
  storageBucket: "ptac-3dbe8.firebasestorage.app",
  messagingSenderId: "299862520258",
  appId: "1:299862520258:web:842822bce0c3f24970665b",
  measurementId: "G-YZ3YXLJKV8"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


export { auth };
