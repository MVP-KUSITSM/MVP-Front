import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import {Container, Row, Col, Button} from "react-bootstrap";
import { auth, db, logout } from "../../scripts/firebase";
import { ref, get } from "firebase/database";
import Logo from "../../assets/css/logo.png";
import NavMenu from "../NavMenu";
import "../../assets/css/corporation/corphome.css";
import "../../assets/css/basic.css";
export default function Home() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [title,setTitle] = useState("Home");
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

    const MovetoBannerBetting = (e) => {
        window.location.replace('/bb');
    };
    // const MovetoBannerdetail = (e) => {
    //     window.location.replace('/corporation/banner/detail');
    // };
    // const MovetoBannerdetail = (e) => {
    //     window.location.replace('/corporation/banner/detail');
    // };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate('/', {replace: true});
        fetchUserName();
    }, [user, loading]);

    return (
        <div className="width_option">
            {/* <NavMenu name={name} title={title}/> */}
            
            <div className="Home_title">
                <h5>개인 회원 MVP</h5>
            </div>
            <div className="Home_box">
                <div className="menu_all">
                    <div className="menu_one">
                        <div className="menu_title">
                        Pick Your Best!
                        </div>
                        <div className="menu_button" onClick={MovetoBannerBetting}>
                            <span>배너 펀딩</span>
                        </div>
                    </div>
                    <div className="menu_one">
                        <div className="menu_title">
                        Be The First!
                        </div>
                        <div className="menu_button">
                            <span>프로토타입 테스트</span>
                    </div>
                    </div>
                    <div className="menu_one">
                        <div className="menu_title">
                        Express Yourself!
                        </div>
                        <div className="menu_button">
                            <span>설문조사 참여</span>
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
 
        </div>
    );
}