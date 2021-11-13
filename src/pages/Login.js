import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle, signInWithKakao } from "../scripts/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate('/bb', {replace:true});
    if(!window.Kakao.isInitialized()){
      window.Kakao.init('cedd3a9819d4376151e942e4b4810eb8');
      signInWithKakao();
    }
      

  }, [user, loading]);

  return (
    <div className="login">
      <div className="login__container">
        <div>
          <h3>배너 배팅을 시작하시려면 로그인 해주세요.</h3>
          <br/>
        </div>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <a id="kakao-login-btn"></a>
      </div>
    </div>
  );
}

export default Login;