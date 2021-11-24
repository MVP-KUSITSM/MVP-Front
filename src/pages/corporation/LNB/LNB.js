import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/corporation/lnb.css"

import Proto from "../../../assets/prototype.png";
import Banner from "../../../assets/banner.png";
import Static from "../../../assets/statistics.png";
import User from "../../../assets/User.png";
import Board from "../../../assets/Categorize.png";

function LNB() {
  const MovetoDashboard = (e) => {
    window.location.replace('/corporation/dashboard');
  };
  const MovetoBannerdetail = (e) => {
    window.location.replace('/corporation/banner/detail');
  };
  const MovetoPrototype = (e) => {
    window.location.replace('/corporation/prototype/main');
  };

  return (
    <div class="Left-Menu">
      <Link to="/corporation/main">
        <div class="logo">
          <img src="https://s3-alpha-sig.figma.com/img/a4b7/2304/22ff2e085a67c44934bdf03cb04b9fe6?Expires=1638144000&Signature=MPjMGXUlptXWlQTI08Rt2F1E2gNdZfkzaxlThqMAP5Vogyv0MM8-j7BcYciOoSPX8l6tVsaU4jaYJ1FenH~Cwz~AVqGvMRNEwrELfknFEf9JYp~L6iTiNCF1bvXzGC8GY2XR0P5XSqyKYYpZCEdyzvkfBmV4qAGtptd-GhJqmkX47hIWndLivstMpLCTbzjamTxSNS~qWavkGLnTsOPtZ2M1SA1PUe1TCB1b1gmxlV0iVY7Vl6CmGtvl6rOu65VxULoHhrj0ehlcXnUMDCHfDHY34CZQrEBMJfcoLMjyWCb8dR3bPbIzhilMz1VI6taaJ5Gg08YY3vFv-0A44dZIiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" width="100"></img>
        </div>
      </Link>
      <div className="content-menu">
        <div class="menu1" onClick={MovetoDashboard}>  &nbsp; &nbsp;<img src={Board} width="30"></img>대시보드</div>
        <div class="menu2" onClick={MovetoBannerdetail}>&nbsp; &nbsp;<img src={Banner} width="30"/>배너 관리</div>
        <div class="menu3" onClick={MovetoPrototype}>&nbsp; &nbsp;<img src={Proto} width="30"></img>프로토타입 관리</div>
        <div class="menu4" onClick={MovetoDashboard}>&nbsp; &nbsp;<img src={Static} width="30"></img>타제품 통계 자료</div>
        <div class="menu5"onClick={MovetoDashboard}>&nbsp; &nbsp;<img src={User} width="30"></img>전문가 컨설팅</div>
      </div>
    </div>
  );
}

export default LNB;