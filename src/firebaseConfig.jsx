import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeRRPLvRcW0wjCxrgm7Ll0i3QeV7AIPyo",
  authDomain: "ecommerce1-template.firebaseapp.com",
  projectId: "ecommerce1-template",
  storageBucket: "ecommerce1-template.appspot.com",
  messagingSenderId: "439663434240",
  appId: "1:439663434240:web:abcf8197982ee68b2296e5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    setUser(user);
  } catch (error) {
    console.error(error.message);
  }
};

export { auth, provider, signInWithGoogle };
