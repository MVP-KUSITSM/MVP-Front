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
    <div className="width_option">
    {/* <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/home">M.V.P</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/bb">Banner-Betting</Nav.Link>
                <Nav.Link href="/pt">Prototype-Test</Nav.Link>
                <Nav.Link href="/survey">Survey</Nav.Link>
                <Button onClick={logout}>Sign Out</Button>
                <p style={{position: 'absolute', right: '30px', top: '15px'}}>
                    <Nav.Link href="/mypage">{name}님 환영합니다.</Nav.Link></p>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar> */}
    <div className="Nav_all">
      <Link to ="/home">
      <img src={Logo} className="Nav_Logo"/></Link>
      <div className="Nav_title">
        {title}
      </div>
      <div className="Nav_right">
        <div className="Nav_user">
          <span id="yellow">다이어 등급</span> {name} 님 환영합니다.
        </div>
        <img src={Search} width="30px"/>
        <img src ={Bell} width="30px" />
        <div className="nav_button">
          관리
        </div>
        <div className="nav_button" onClick={logout}>
          로그아웃
        </div>
      </div>    
      {/* <hr></hr> */}
    </div>

    </div>
  );
}
