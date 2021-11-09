import React, { useState } from "react";
import "../../../assets/css/corporation/banner/result.css";
import GNB from "../GNB/GNB";
import LNB from "../LNB/LNB";

function Result() {
  return (
    <>
    <GNB />
    <div class="Banner-Result">
    <LNB />
        <p class="title">펀딩결과</p>
        <div class="line2"></div>
        <div class="banner-favor">
            <p class="banner-favor-text">배너 선호도</p>
            <img class="banner-img"></img>
            <p class="favor-scale"></p>
        </div>
        <div class="line3"></div>
        <div class="banner-statistic">
            <p class="banner-statistic-text">참여자 통계</p>
            <div class="basic-chart">
                <div class="gender-chart"></div>
                <div class="age-chart"></div>
            </div>
            <div class="job-chart"></div>
            <div class="field-chart"></div>
        </div>
    </div>
    </>
  );
}

export default Result;