import React, { useState } from "react";
import "../../../assets/css/corporation/banner/detail.css";
import GNB from "../GNB/GNB";
import LNB from "../LNB/LNB";

function Detail() {

  return (
    <>
    <GNB />
    <LNB />
    <div class="Banner-Detail">
        <div class="title">
            <p>업로드한 배너</p>
        </div>
        <div class="banner-add">
          <div class="banner-add-text">
            <p>배너추가</p>
          </div>
        </div>
    </div>
    </>
  );
}

export default Detail;