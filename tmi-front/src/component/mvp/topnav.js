import React from "react";

import { Button } from 'react-bootstrap';
import {Link, Route} from 'react-router-dom';

import "../../assets/css/mvp/topnav.css";

function Topnav(){
    let username = "강밀리";
    return(
        <>
            <div className="top">
                <p>
                    <span>이미지</span>
                    Best TMT { username } 님 환영합니다.
                </p>
            </div>
        </>
    );
}

export default Topnav;