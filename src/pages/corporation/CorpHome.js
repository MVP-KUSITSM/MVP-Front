import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import {Container, Row, Col, Button} from "react-bootstrap";
import { auth, db, logout } from "../../scripts/firebase";
import { ref, get } from "firebase/database";

import Logo from "../../assets/css/logo.png";

import "../../assets/css/basic.css";
import "../../assets/css/corporation/corphome.css";
import GNB from "./GNB/GNB";
import { Link } from "react-router-dom";
export default function CorpHome(){
		const [user, loading, error] = useAuthState(auth);
		const [corpname,setCorpname] = useState("");
		const navigate = useNavigate();

        const MovetoDashboard = (e) => {
            window.location.replace('/corporation/dashboard');
        };
        const MovetoPrototype = (e) => {
            window.location.replace('/corporation/prototype/main');
        };
        const MovetoBannerdetail = (e) => {
            window.location.replace('/corporation/banner/detail');
        };


		useEffect(()=>{
			if (loading ) return;
			if (!user) return navigate('/', {replace: true});
		},[user,loading]);


	return(
		<div className="width_option">
        {/* <GNB></GNB> */}
            <div className="Home_title">
                <h5>기업 회원 MVP</h5><img src={Logo}></img>
            </div>
            <div className="Home_box">
                <div className="menu_all">
                    <div className="menu_one">
                        <div className="menu_title">
                            Dashboard
                        </div>
                            <div className="menu_button" onClick={MovetoDashboard}>
                                <span>대시보드</span>
                            </div>
                    </div>
                    <div className="menu_one">
                        <div className="menu_title">
                            Banner Setting
                        </div>
                            <div className="menu_button" onClick={MovetoBannerdetail}>
                                <span>배너 관리</span>
                            </div>
                    </div>
                    <div className="menu_one">
                        <div className="menu_title">
                            Prototype Setting
                        </div>
                            <div className="menu_button" onClick={MovetoPrototype} >
                                <span>프로토타입 <br/>관리</span>
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
                <div className="button_etc">
                    전문가 컨설팅 바로가기
                </div>
            </div>
            
    	</div>
	);
}