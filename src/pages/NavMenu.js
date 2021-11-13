import React from "react";
import { logout } from "../scripts/firebase";
import {Navbar, Container, Nav, Button} from "react-bootstrap";

export default function NavMenu({name}) {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand>M.V.P</Navbar.Brand>
            <div className="row" style={{width:"500px"}}>
              <div className="col"><p className="float-end">{name}님 환영합니다.</p></div>
              <div className="col-md-3"><Button onClick={logout}>Sign Out</Button></div>
            </div>
        </Container>
    </Navbar>
  );
}
