
import { initializeApp} from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2pm3NCafJ322jIFrYlW5huKo6Sr16NTg",
  authDomain: "gustavo-ifal-513.firebaseapp.com",
  projectId: "gustavo-ifal-513",
  storageBucket: "gustavo-ifal-513.appspot.com",
  messagingSenderId: "1091432343778",
  appId: "1:1091432343778:web:2971a72d63b078299456bb",
  measurementId: "G-Y367L4G5WX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app)

export { app, db, auth }