import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle, signInAnony } from "../scripts/firebase";
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
  }, [user, loading]);

  return (
    <div className="login">
      <div className="login__container">
        <h3>배너 베팅에 참여하세요.</h3>
        <p>*구글 로그인은 크롬에서만 가능합니다.</p>
        <button className="login__btn login__google" onClick={signInAnony}>
          Login Anonymously
        </button>

        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;