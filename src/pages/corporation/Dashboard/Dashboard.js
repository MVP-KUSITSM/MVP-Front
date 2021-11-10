import React, { useState } from "react";

import GNB from "../GNB/GNB";
import LNB from "../LNB/LNB";
import { Button } from 'react-bootstrap';


function Dashboard() {
  //대시보드 
  let [기업명,기업명변경] = useState('기업명');
  let [분야,분야변경] = useState('분야');
  let [등록배너수,등록배너수변경] = useState(0);
  let [등록프로토수,등록프로토수변경] = useState(0);
  
  //펀딩 진행 중인 배너

  let [참여인원,참여인원변경] = useState('N');

  //프로토타입 리뷰
  let 평균별점 = 0.0
  return (
    <>
    <GNB />
    <LNB />
    <div>
        <div >
          <h4>대시보드</h4>
          <div className="Dashboard_corpname">
            <h3>{ 기업명 } </h3>
            <p>{ 분야 } </p>
            <Button variant="light">구독 중인 플랜</Button>
          </div>

          <div className="Dashboard_banner">
            <p>등록한 배너 수</p>
            <h3>{등록배너수}</h3>
          </div>

          <div className="Dashbord_protype">
            <p>등록한 프로토타입 수</p>
            <h3>{등록프로토수}</h3>

          </div>
        </div>
        <div>
          <h4>펀딩 진행 중인 배너</h4>
          <span>상세 보기 </span>
          <div>
            <img src="https://mblogthumb-phinf.pstatic.net/MjAyMTEwMTVfMTU2/MDAxNjM0Mjc4NDU4NTQ0.gHyVMgeVrmRzqcmB2EixWJrbdw73nFzvVob0oOmtt38g.82Y4efovOXj6WKH_Wl0ANSTP4c43LYxhmrNrr7OVyeMg.PNG.naverblog_blpick/Blog_Trend_trend1-1.png?type=w800" width="100"/>
            <p>{참여인원} 명 참여 중</p>
            <p>배너 A : n% <br/>배너 B : m%</p>
          </div>
        </div>
        <div>
          <h4>프로토타입 리뷰</h4>
          <span>상세 보기</span>
          <div>
            <img src="https://movie-phinf.pstatic.net/20210915_104/1631681279096sdjNA_JPEG/movie_image.jpg" width="100" />
            <p>평균 별점 {평균별점} </p>
            <p>
              리뷰
            </p>
            <p>
              리뷰
            </p>
          </div>
        </div>
    </div>
    </>
  );
}


export default Dashboard;