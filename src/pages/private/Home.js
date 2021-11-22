import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {Container, Row, Col, Button} from "react-bootstrap";
import { auth, db, logout } from "../../scripts/firebase";
import { ref, get } from "firebase/database";

import NavMenu from "../NavMenu";

export default function Home() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
        var snapshot = await get(ref(db, 'users/' + user.uid));
        var data = snapshot.val();
        setName(data.name);
        } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate('/', {replace: true});
        fetchUserName();
    }, [user, loading]);

    return (
        <div>
            <NavMenu name={name}/>
            <Container fluid>
                <Row>
                    <h1>M.V.P</h1>
                </Row>
                <Row>
                    <Col>Pick Your Best!</Col>
                    <Col>Be The First!</Col>
                    <Col>Express Yourself!</Col>
                    <Col>Hunt It!</Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/bb">
                            <Button variant="secondary">배너 펀딩</Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/pt">
                            <Button variant="secondary">프로토타입 테스트</Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/survey">
                            <Button variant="secondary">설문조사 참여</Button>
                        </Link>
                    </Col>
                    <Col>
                        <Button variant="secondary">경품 추첨</Button>
                    </Col>
                </Row>
            </Container>
            <div className="menu_all">
                <div className="menu_one">
                    <div className="menu_title">
                    Pick Your Best!
                    </div>
                    <div className="menu_button">
                        <Link to="/bb">
                            <span>배너 펀딩</span>
                        </Link>
                    </div>
                </div>
                <div className="menu_one">
                    <div className="menu_title">
                    Be The First!
                    </div>
                    <div className="menu_button">
                        <Link to="/pt">
                            <span>프로토타입 테스트</span>
                        </Link>
                    </div>
                </div>
                <div className="menu_one">
                    <div className="menu_title">
                    Express Yourself!
                    </div>
                    <div className="menu_button">
                        <Link to="/survey">
                            <span>설문조사 참여</span>
                        </Link>
                    </div>
                </div>
                <div className="menu_one">
                    <div className="menu_title">
                    Hunt It!
                    </div>
                    <div className="menu_button">
                        <span>경품 추첨</span>
                    </div>
                </div>

            </div>
 
        </div>
    );
}