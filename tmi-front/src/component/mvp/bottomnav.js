import React, { useState } from "react";

import { Button } from 'react-bootstrap';
import {Link, Route} from 'react-router-dom';

function Bottomnav(){
    let username = "강밀리";
    return(
        <>
            <div className="bottom">
                <span>이미지</span>
                <p>
                    { username } 님이 입장하셨습니다
                </p>
            </div>
        </>
    );
}

export default Bottomnav;