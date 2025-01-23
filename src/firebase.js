import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSz6nvEfDr_0-UxqXG9w1uMj2FZlLgj1I",
  authDomain: "netflix-clone-92e76.firebaseapp.com",
  projectId: "netflix-clone-92e76",
  storageBucket: "netflix-clone-92e76.appspot.com",
  messagingSenderId: "229937125534",
  appId: "1:229937125534:web:9a96ae4bfa56ba1523038f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;