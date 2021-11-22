import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import {Container, Row, Col, Button} from "react-bootstrap";
import { auth, db, logout } from "../../scripts/firebase";
import { ref, get } from "firebase/database";
import { Link } from "react-router-dom";

import "../../assets/css/corporation/corphome.css";
import GNB from "./GNB/GNB";
export default function CorpHome(){
		const [user, loading, error] = useAuthState(auth);
		const [corpname,setCorpname] = useState("");
		const navigate = useNavigate();

		const fetchCorpName = async () =>{
			try{
				var snapshot = await get(ref(db,'users/',+user.uid));
				var data = snapshot.val();
				if (data != null){
					if (data.ROLE_CORP != null){
						setCorpname(data.ROLE_CORP.info.name);
					}
				}
			} catch(err){
				console.error(err);
				alert("An error occured while fetching user data");
			}
		};

		useEffect(()=>{
			if (loading ) return;
			if (!user) return navigate('/', {replace: true});
			fetchCorpName();
		},[user,loading]);


	return(
		<>
        <GNB></GNB>
            <Container fluid>
                <Row>
                    <h1>기업 회원 MVP</h1>
                </Row>
            </Container>
            <div className="menu_all">
                <div className="menu_one">
                    <div className="menu_title">
                        Statisticssss
                    </div>
                    <div className="menu_button">
                        <Link to="/corporation/dashboard">
                            <span>대시보드</span>
                        </Link>
                    </div>
                </div>
                <div className="menu_one">
                    <div className="menu_title">
                        Banner Setting
                    </div>
                    <div className="menu_button">
                        <Link to="/corporation/banner/main">
                            <span>배너 관리</span>
                        </Link>
                    </div>
                </div>
                <div className="menu_one">
                    <div className="menu_title">
                        Prototype Setting
                    </div>
                    <div className="menu_button">
                        <Link to="/corporation/prototype/main">
                            <span>프로토타입 <br/>관리</span>
                        </Link>
                    </div>
                </div>
                <div className="menu_one">
                    <div className="menu_title">
                        Statistics
                    </div>
                    <div className="menu_button">
                        <span>타제품 <br/>통계자료</span>
                    </div>
                </div>

            </div>
            <Button>전문가 컨설팅 바로가기</Button>
    	</>
	);
}