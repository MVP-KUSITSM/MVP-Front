import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/corporation/lnb.css";
import "../../assets/css/basic.css";

function UserLNB() {
  const MovetoBannerBetting = (e) => {
    window.location.replace('/bb');
  };

  const MovetoMypage = (e) => {
    window.location.replace('/mypage');
  };

  return (
    <div class="Left-Menu">
      <Link to="/corporation/main">
        <div class="logo">
          <img src="https://s3-alpha-sig.figma.com/img/a4b7/2304/22ff2e085a67c44934bdf03cb04b9fe6?Expires=1638144000&Signature=MPjMGXUlptXWlQTI08Rt2F1E2gNdZfkzaxlThqMAP5Vogyv0MM8-j7BcYciOoSPX8l6tVsaU4jaYJ1FenH~Cwz~AVqGvMRNEwrELfknFEf9JYp~L6iTiNCF1bvXzGC8GY2XR0P5XSqyKYYpZCEdyzvkfBmV4qAGtptd-GhJqmkX47hIWndLivstMpLCTbzjamTxSNS~qWavkGLnTsOPtZ2M1SA1PUe1TCB1b1gmxlV0iVY7Vl6CmGtvl6rOu65VxULoHhrj0ehlcXnUMDCHfDHY34CZQrEBMJfcoLMjyWCb8dR3bPbIzhilMz1VI6taaJ5Gg08YY3vFv-0A44dZIiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" width="100"></img>
        </div>
      </Link>
      <div className="content-menu">
        <div class="menu1" onClick={MovetoBannerBetting}><span className="User-Span">&nbsp;</span>배너 배팅</div>
        <div class="menu2" onClick={MovetoBannerBetting}><span className="User-Span">&nbsp;</span>프로토타입 테스트</div>
        <div class="menu3" onClick={MovetoMypage}><span className="User-Span">&nbsp;</span>설문조사 참여</div>
        <div class="menu4" onClick={MovetoBannerBetting}><span className="User-Span">&nbsp;</span>경품 추천</div>
        <div class="menu5"onClick={MovetoMypage}><span className="User-Span">&nbsp;</span>포인트 내역</div>
      </div>
    </div>
  );
}

export default UserLNB;