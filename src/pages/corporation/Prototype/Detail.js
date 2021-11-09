import React, { useState } from "react";
import "../../../assets/css/corporation/prototype/detail.css";
import GNB from "../GNB/GNB";
import LNB from "../LNB/LNB";

function Detail() {

  return (
    <>
    <GNB />
    <LNB />
    <div class="Prototype-Detail">
        <div class="title">
            <p>업로드한 프로토타입</p>
        </div>
        <div class="prototype-add">
          <div class="prototype-add-text">
            <p>프로토타입 추가</p>
          </div>
        </div>
    </div>
    </>
  );
}

export default Detail;