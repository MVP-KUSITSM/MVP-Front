import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import "../../assets/css/user/registerg.css"


function RegisterG() {

  return (
    <>
      <div className ="all">
        <h5>개인 회원가입</h5>
        <div className="registerbox">
          <div>이름</div>
          <input></input>
          <div>아이디</div>
          <input></input>
          <div>비밀번호</div>
          <input></input>
        </div>
        <Button>생성하기</Button>
      </div>
    </>
  );
}

export default RegisterG;