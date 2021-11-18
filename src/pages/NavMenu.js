import React, {useEffect, useState} from "react";
import { logout, changeName } from "../scripts/firebase";
import {Navbar, Container, Nav, Button} from "react-bootstrap";

export default function NavMenu({name, onChangeName}) {
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    setNickname(name);
  }, [name]);

  return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand>Image Betting</Navbar.Brand>
            <div className="row" style={{width:"500px"}}>
              <div className="col-6"><input className="float-end" type="text" value={nickname} onChange={e => setNickname(e.target.value)} style={{textAlign: "right"}}/></div>
              <div className="col-3"><Button onClick={() => {
                  changeName(nickname);
                  onChangeName(nickname);
                }}>이름 변경</Button></div>
              <div className="col-3"><Button onClick={logout}>Sign Out</Button></div>
            </div>
        </Container>
    </Navbar>
  );
}
