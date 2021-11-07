import React, { useState } from "react";

import { Button } from 'react-bootstrap';
import {Link, Route} from 'react-router-dom';
import "../../assets/css/mvp/bottomnav.css";

function Bottomnav(){
    let username = "강밀리";
    return(
        <>
            <div className="bottom">
                
                <p>
                    <span>이미지</span>
                    { username } 님이 입장하셨습니다
                </p>
            </div>
        </>
    );
}

export default Bottomnav;