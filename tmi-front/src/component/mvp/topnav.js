import React, { useState } from "react";

import { Button } from 'react-bootstrap';
import {Link, Route} from 'react-router-dom';

function Topnav(){
    let username = "강밀리";
    return(
        <>
            <div className="top">
                <span>이미지</span>
                <p>
                    Best TMT { username } 님 환영합니다.
                </p>
            </div>
        </>
    );
}

export default Topnav;