import React, { useState } from "react";

import { Button } from 'react-bootstrap';
import {Link, Route} from 'react-router-dom';
import "../../assets/css/mvp/mainpage.css";
function Mainpage(){
    return(
        <>
            <div className="title">
                M.V.P
            </div>
            <div className="menubar">
                <div className="menu">
                    <p>Pick Your Best!</p>
                    <Link to ="/banner/funding">
                        <div className="menu_click">
                            배너 펀딩
                        </div>
                    </Link>
                </div>
                <div className="menu">
                    <p>Be The First</p>
                    <Link to ="/banner/funding">
                        <div className="menu_click">
                            프로토타입 테스트
                        </div>
                    </Link>
                </div>
                <div className="menu">
                    <p>Express Yourself</p>
                    <Link to ="/banner/funding">
                        <div className="menu_click">
                            설문조사 참여
                        </div>
                    </Link>
                </div>
                <div className="menu">
                    <p>Hunt it!</p>
                    <Link to ="/banner/funding">
                        <div className="menu_click">
                            경품 추첨
                        </div>
                    </Link>
                </div>


            </div>
        </>

    );
}

export default Mainpage;