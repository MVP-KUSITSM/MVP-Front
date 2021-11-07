import React, { useState } from "react";
import "../../assets/css/user/login.css";
import { Button } from 'react-bootstrap';
import { Link,Route } from "react-router-dom";
import Bottomnav from "../mvp/bottomnav";

function Login() {

  return (
    <>
      <div className="all_login">
          <div>로그인</div>
          <div className="login">
            <div>아이디 또는 이메일</div>
            <input></input>

            <div className="login_else">
              <div>아이디 or 이메일을 잊으셨나요? <Link to ="/main">아이디찾기</Link></div>
              <div>계정이 아직 없으신가요? <Link to ="/registerg">회원가입</Link></div>
            </div>
            <Button>다음</Button>
          </div>
      </div>
    </>
  );
}

function Password(){

  return(
    <>
      <div className="password">
        <div>패스워드</div>
        <input></input>
      </div>
    </>
  );
}

export default Login;