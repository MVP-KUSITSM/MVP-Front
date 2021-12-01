
import { Table } from 'react-bootstrap';
import NavMenu from "../NavMenu";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth, db, logout } from "../../scripts/firebase";
import { getDatabase,ref, get,set,update } from "firebase/database";
import "../Login.css";
import {map} from "react-bootstrap/ElementChildren";
import { connectStorageEmulator } from 'firebase/storage';


import "../corporation/LNB/LNB"
import LNB from '../corporation/LNB/LNB';

import UserLNB from './UserLNB';
import "../../assets/css/private/Mypage.css";


function Mypage(){
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [point,setPoint]=useState();
    const [betlog,setBetlog]=useState([]);
    const [getlog,setGetlog]=useState([]);
    const [List, setList]=useState([]);
    const [viewing,setViewing]=useState(false);
    const [title, setTitle] = useState("마이페이지");
    const [profit, setProfit]=useState(0);
    var list_all = new Array();
    const a="heejin"
    // const [addsum,setaddsum]=useState(0);
    // const [betsum,setbetsum]=useState(0);
    var addsum=0;
    var betsum=0;


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

    const pointCal = () => {
        List.map( point =>{ addsum=addsum+point.addPoint ; 
            betsum=betsum+point.betPoint ;       
            console.log(typeof(point.betPoint));   
            })
            
            setProfit(addsum/betsum*100);
    };


    useEffect(() => {
        if (loading) return;
        if (!user) return navigate('/', {replace: true});
        fetchUserName();
            get(ref(db, `users/${user.uid}/tm_info/point`)).then((snapshot)=>{
                if(snapshot.exists()){
                    setPoint(snapshot.val());}});
            get(ref(db, `users/${user.uid}/tm_info/betLogs`)).then((snapshot)=>{
                if(snapshot.exists()){
                    var auth = Object.keys(snapshot.val());
                    let today = new Date();
                    setList(Object.values(snapshot.val()));
                    
                    setViewing(true);
                }
            }) 
            console.log(point);
            pointCal();

    }, [user, loading, List]);

    
    

   
    return(
        <div className="M_flex">
            <UserLNB/>   
            <div className="mypage_mainpage">
                    <NavMenu name={name} title={title}/>
                    <hr/>
                    <div classNam="point">
                        <span className="mypage_name">{name} 님의 포인트 내역</span>
               
                        <div className="mypage_all">
                    <div className="mypage_box">
                        최고 Pt
                        <h5>128,000</h5> 
                    </div>
                    <div className="mypage_box">
                        잔여 pt
                        <h5>{point} </h5>
                    </div>
                    <div className="mypage_box">
                        총 수익률
                        <h5>{parseFloat(profit).toFixed(2)} %</h5>
                    </div>
                </div>
            
            
            <div className="List">
                <div className="mypage_line2"></div>
                <div className="mypage_table">
                <Table bordered >
                    
                    
                    <thead className="mypage_tabletitle">
                        <tr>
                        <th style={{width:50}}>배팅 날짜</th>
                        <th style={{width:50}}>배팅 포인트</th>
                        <th style={{width:50}}>획득 포인트</th>
                        <th style={{width:50}}>수익률</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                            List.map(
                            betlog => 
                            <tr>
                            <td> {betlog.date} </td>
                            <td> {betlog.betPoint} </td>
                            <td> {betlog.addPoint}</td>
                            <td> {betlog.profit} </td>
                            </tr>
                            )
                            }
                    </tbody>
                </Table>
                </div>
            </div></div>
            </div></div>


           
                           
    )
}

export default Mypage;