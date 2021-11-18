import React, { useState } from "react";
import { storage, storageRef, db } from "../../../scripts/firebase";
import "../../../assets/css/corporation/banner/upload.css";
import GNB from "../GNB/GNB";
import LNB from "../LNB/LNB";
import firebase from "firebase/compat";

function Upload() {
  const [image, setImage] = useState('');
  const upload = () => {
      if (image == null)
          return;
      storageRef.child(`/images/${image.name}`).put(image).on("state_changed", alert("success"), alert);
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
        {/*<div class="file-select">*/}
        {/*    <form onSubmit={onsubmit}>*/}
        {/*        <input onChange={onchange} type="text" placeholder="게시글을 써주세요." maxLength={120}/>*/}
        {/*        <input type="file" accept="image/*" onChange={onFileChange} value={file}/>*/}
        {/*        <input type="submit" value="제출하기" />*/}
        {/*        {attachment && (*/}
        {/*            <div>*/}
        {/*                <img src={attachment} width="50px" height="50px" alt="attachment"/>*/}
        {/*                <button onClick={onClearAttachment}>Clear</button>*/}
        {/*            </div>*/}
        {/*        )}*/}
        {/*    </form>*/}
        {/*</div>*/}
        <div className="file-select">
            <center>
                <input type="file" onChange={(e) => {setImage(e.target.files[0])}}/>
                <button onClick={upload}>Upload</button>
            </center>
        </div>
        <div class="line"></div>
        <p class="banner-description-text">배너 설명</p>
        <input class="banner-description" placeholder="배너에 대한 간단한 설명을 입력하세요."></input>
    </div>
    </>
  );
}

export default Upload;