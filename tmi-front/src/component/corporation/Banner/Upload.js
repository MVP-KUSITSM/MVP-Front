import React, { useState } from "react";
import "../../../assets/css/corporation/banner/upload.css";
import GNB from "../GNB/GNB";
import LNB from "../LNB/LNB";

function Upload() {
  const [selectFile, setSelectFile] = useState(null);

  const handleSelectFile = (e) => {
    setSelectFile(e.target.files[0]);
  }

  return (
    <>
    <GNB />
    <LNB />
    <div class="Banner-Upload">
        <p class="title">배너 업로드</p>
        <p class="description">
          배너 펀딩에 참여하여 사용자들의 선호도를 알아볼 배너 이미지 파일을 업로드 하세요.
        <br/>
        파일은 최대 n개까지 업로드할 수 있어요.</p>
        <div class="file-select">
          <input type="file" onChange={handleSelectFile} class="file-select-btn" />파일 선택 버튼
          <p class="file-select-description">또는 파일을 여기에 드래그 앤 드롭 하세요.</p>
        </div>
        <div class="line"></div>
        <p class="banner-description-text">배너 설명</p>
        <input class="banner-description" placeholder="배너에 대한 간단한 설명을 입력하세요."></input>
    </div>
    </>
  );
}

export default Upload;