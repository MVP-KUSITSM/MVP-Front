import React from "react";
import { logout } from "../scripts/firebase";
import { Link } from "react-router-dom";
import Search from "../assets/css/search.svg";
import Bell from "../assets/css/bell.svg";
import "../assets/css/private/NavMenu.css";
import "../assets/css/basic.css";
import Logo from "../assets/css/logo.png";

export default function NavMenu({name, title}) {
  return (
   
    <div className="Nav_all">
      <h3 className="Nav_left">{title}</h3>
      <div className="Nav_right">
          <div className="Nav_user">
            <span id="yellow">다이아 등급</span> {name} 님 환영합니다.
          </div>
          <span><img src={Search} width="30px"/></span>
          <span><img src ={Bell} width="30px" /></span>
          <Link to="../mypage" style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <div className="nav_button">
            관리
          </div>
          </Link>
        <div className="nav_button" onClick={logout}>
          로그아웃
        </div>
        </div>
      </div>   
   
  );
}
