import React, { useState } from "react";

import "../../../assets/css/corporation/gnb.css"
import Search from "../../../assets/css/search.svg";
import Bell from "../../../assets/css/bell.svg";

import { logout } from "../../../scripts/firebase";


function GNB({title}) {
  return (
    <div className="GNB_Main_part">
        <h3>{title}</h3>
        <div className="left_float_GNB">
            <span><img width ="30"src={Search}></img></span>
            <span><img width="30"src={Bell}></img></span>
        <div className="logout_GNB" onClick={logout}>로그아웃</div>
        </div>
    </div>
  );
}

export default GNB;