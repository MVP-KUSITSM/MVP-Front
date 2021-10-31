import React, { useState } from "react";
import "../../../assets/css/corporation/banner/result.css";
import GNB from "../GNB/GNB";
import LNB from "../LNB/LNB";

function Result() {

  return (
    <>
    <GNB />
    <LNB />
    <div class="Banner-Result">
        <div class="title">
            <p>펀딩결과</p>
        </div>
        <div class="banner-favor">
            <p class="banner-favor-text">배너추가</p>
            <img class="banner-img"></img>
            <p class="favor-scale"></p>
        </div>
        <div class="banner-statistic">
            <p class="banner-statistic-text">참여자 통계</p>
            <div class="basic-chart">
                <div class="gender-chart"></div>
                <div class="gender-chart"></div>
            </div>
            <div class="gender-chart"></div>
            <div class="gender-chart"></div>
        </div>
    </div>
    </>
  );
}

export default Result;