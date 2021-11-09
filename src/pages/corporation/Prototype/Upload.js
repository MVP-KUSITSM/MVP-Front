import React, { useState } from "react";
import "../../../assets/css/corporation/prototype/upload.css";
import GNB from "../GNB/GNB";
import LNB from "../LNB/LNB";

function Upload() {

  return (
    <>
    <GNB />
    <LNB />
    <div class="Prototype-Upload">
        <p class="title">프로토타입 업로드</p>
        <p class="description">
        출시 전 사용자들의 반응을 알아볼 서비스의 프로토타입 파일을 업로드 하세요.
        </p>
        <div class="file-select">
          <button class="file-select-btn">파일 선택 버튼</button>
          <p class="file-select-description">또는 파일을 여기에 드래그 앤 드롭 하세요.</p>
        </div>
        <div class="line"></div>
        <p class="prototype-description-text">프로토타입 설명</p>
        <input class="prototype-description" placeholder="프로토타입에 대한 간단한 설명을 입력하세요."></input>
    </div>
    </>
  );
}

export default Upload;