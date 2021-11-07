import React, { useState } from "react";
import "../../assets/css/user/registerc.css";
import GNB from "../corporation/GNB/GNB";
import LNB from "../corporation/LNB/LNB";

function RegisterC() {

  return (
    <>
    <GNB />
    <div class="Register-Corporation">
      <LNB />
      <div class="title">기업 회원가입</div>
      <div class="promise">
        <svg class="rec1" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_2:54)">
          <rect x="4.5" y="0.5" width="14" height="14" stroke="black" shape-rendering="crispEdges"/>
          </g>
          <defs>
          <filter id="filter0_d_2:54" x="0" y="0" width="23" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2:54"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2:54" result="shape"/>
          </filter>
          </defs>   
        </svg>
        <p class="p1">
          이용약관 동의
        </p>
        <svg class="rec2" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_2:54)">
          <rect x="4.5" y="0.5" width="14" height="14" stroke="black" shape-rendering="crispEdges"/>
          </g>
          <defs>
          <filter id="filter0_d_2:54" x="0" y="0" width="23" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2:54"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2:54" result="shape"/>
          </filter>
          </defs>   
        </svg>
        <p class="p2">
          개인정보 수집 및 이용 동의
        </p>
        <svg class="rec3" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_2:54)">
          <rect x="4.5" y="0.5" width="14" height="14" stroke="black" shape-rendering="crispEdges"/>
          </g>
          <defs>
          <filter id="filter0_d_2:54" x="0" y="0" width="23" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2:54"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2:54" result="shape"/>
          </filter>
          </defs>   
        </svg>
        <p class="p3">
          이용약관, 개인정보 수집 및 이용에 대한 동의에 모두<br/>
          확인 및 동의합니다.
        </p>
      </div>
      <div class="id">
        <p class="id-text">아이디</p>
        <svg class="id-rec" width="578" height="42" viewBox="0 0 578 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_6:113)">
          <rect x="4.5" y="0.5" width="569" height="33" stroke="black" shape-rendering="crispEdges"/>
          </g>
          <defs>
          <filter id="filter0_d_6:113" x="0" y="0" width="578" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6:113"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6:113" result="shape"/>
          </filter>
          </defs>
        </svg>
      </div>
      <div class="pw">
        <p class="pw-text">비밀번호</p>
        <svg class="pw-rec" width="578" height="42" viewBox="0 0 578 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_6:113)">
          <rect x="4.5" y="0.5" width="569" height="33" stroke="black" shape-rendering="crispEdges"/>
          </g>
          <defs>
          <filter id="filter0_d_6:113" x="0" y="0" width="578" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6:113"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6:113" result="shape"/>
          </filter>
          </defs>
        </svg>
      </div>
      <div class="name">
        <p class="name-text">기업명</p>
        <svg class="name-rec" width="578" height="42" viewBox="0 0 578 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_6:113)">
          <rect x="4.5" y="0.5" width="569" height="33" stroke="black" shape-rendering="crispEdges"/>
          </g>
          <defs>
          <filter id="filter0_d_6:113" x="0" y="0" width="578" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6:113"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6:113" result="shape"/>
          </filter>
          </defs>
        </svg>
      </div>
    </div>
    </>
  );
}

export default RegisterC;