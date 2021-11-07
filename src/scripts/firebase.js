import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDFMMpu-eTGrbpW3Ruu-G2ZMfwaioRCsYw",
  authDomain: "image-betting.firebaseapp.com",
  databaseURL: "https://image-betting-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "image-betting",
  storageBucket: "image-betting.appspot.com",
  appId: "image-betting"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;

    set(ref(db, 'users/' + user.uid), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
    })
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// const signInWithEmailAndPassword = async (email, password) => {
//   try {
//     await auth.signInWithEmailAndPassword(email, password);
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    set(ref(db, 'users/' + user.uid), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "local",
        email: user.email,
    })
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// const sendPasswordResetEmail = async (email) => {
//   try {
//     await auth.sendPasswordResetEmail(email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};