import React, { useState } from "react";
import GNB from "../GNB/GNB";
import LNB from "../LNB/LNB";

import "../../../assets/css/corporation/prototype/main.css";

import Plus from "../../../assets/plus.svg";
function Main() {
  const [title,setTitle]= useState("Prototype Setting");  
  return (
    <>
    <div className="flex">
      <LNB/>
      <div className="Proto_Main_all">
        <GNB title={title}/>
        <div className="Proto-inside">
            <div><span className="title_style">프로토타입 업로드</span></div>
        <div className="proto-add">
                        <div className="proto-add-icon">
                            <img src ={Plus}></img>
                        </div>
                    </div>
        </div>
        <div className="Proto-Example">
            
            <div className="Prototype_detail">
              <img src="https://s3-alpha-sig.figma.com/img/11af/7559/bb038da144aa5a197b90f7e58893c499?Expires=1638144000&Signature=LHnzVrksAuFEohF-wrzcDtpSphQMjqWrKEyU~AH0JRf33Msde964hfAZDL0FkyXvOGOPWZo~iLbTvr7qBwfvdtKtPcqz09iSfYspHrWm2kP1Pt8jCwTf4EF3we8RgEsYAsa48tAiMSzDLe9wXDkALSPSRWY2QWVu8~Vhy~ko80B1nfXHKILXO7cwSkEiaGY9nGgJio06CNp371ys~kIJ7tQTZHlbnst015KFnsQtzM2VvmtHUO4uarH69xG-~o6k2HPIr8UvTkqZWfToQC4pAchDRNIOjyk27I1vfax5TC7fvlVx3hUmza7Yy4qkotDcI~~IlGiAVxuUxUdUp97q5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" width="384"className="Prototype_img"/>
              <div className="Prototype_review">
                <div className="Prototype_average">평균 별점 
                  <h3> 4.8 </h3>
                  </div>
                  <div className="border">
                    <h5>큐밀리1</h5>
                    <span>❤❤❤❤❤</span>
                    <span>2021.11.01</span>
                    
                    <div>
                      오늘도 좋은 말씀 너무 잘 들었습니다. 
                      벌써 날이 추워지네요.
                      다들 따뜻하게 입고 다니시고 좋은 한 해로 마무리하셨으면 좋겠습니다. ㅎㅎ
                
                    </div>
                    </div>
                  <div className="border">
                    <h5>큐밀리1</h5>
                    <span>❤❤❤❤❤</span>
                    <span>2021.11.01</span>
                    
                    <div>
                      큐시즘 여러분~ 다들 학술제 준비하시느라 수고가 많으시죠?ㅎㅎ
                      항상 뒤에서 응원하고 있습니다! 화이팅!!!
                    </div>
                  </div>
                  </div>
            </div>
          </div>
      </div>
    </div>
    </>
  );
}

export default Main;