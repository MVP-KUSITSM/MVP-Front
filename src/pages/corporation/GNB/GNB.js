import React, { useState } from "react";

import "../../../assets/css/corporation/gnb.css"
import Search from "../../../assets/css/search.svg";
import Bell from "../../../assets/css/bell.svg";

import { logout } from "../../../scripts/firebase";


function GNB() {
  return (
    <div className="Main_part_GNB">
        <h3>Dash Board</h3>
        <div className="left_float_GNB">
            <span><img width ="30"src={Search}></img></span>
            <span><img width="30"src={Bell}></img></span>
        <div className="logout_GNB" onClick={logout}>로그아웃</div>
        </div>
    </div>
  );
}

export default GNB;