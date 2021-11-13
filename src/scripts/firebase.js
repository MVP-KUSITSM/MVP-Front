import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { getDatabase, ref, set, get, update } from "firebase/database";
import { getStorage } from "firebase/storage";

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
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;
    const userRef = ref(db, 'users/' + user.uid);

    var user_snapshot = await get(userRef);
    const user_data = user_snapshot.val();
    if(user_data == null){
      set((userRef), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        tm_info: { point: 0}
      });
    }
    else {
      update((userRef), {
        name: user.displayName
      });
    }
    
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const Kakao = window.Kakao;
const signInWithKakao = async () => {
  Kakao.Auth.createLoginButton({
    container: '#kakao-login-btn',
    success: function(authObj) {
      Kakao.API.request({
        url: '/v2/user/me',
        success: function(kakao_res) {
          const name = kakao_res.kakao_account.profile.nickname;

          auth.createCustomToken(kakao_res.id).then(token => {
            console.log(token);
          });
        },
        fail: function(error) {
          alert(
            'login success, but failed to request user information: ' +
              JSON.stringify(error)
          )
        },
      })
    },
    fail: function(err) {
      alert('failed to login: ' + JSON.stringify(err))
    },
  })
}

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
  storage,
  signInWithGoogle,
  signInWithKakao,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};