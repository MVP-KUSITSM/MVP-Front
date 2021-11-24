
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
import UserLNB from './UserLNB';
import "../../assets/css/private/Mypage.css";

function Mypage(){
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [point,setPoint]=useState(0);
    const [betlog,setBetlog]=useState([]);
    const [getlog,setGetlog]=useState([]);
    const [List, setList]=useState([]);
    const [viewing,setViewing]=useState(false);
    const [title, setTitle] = useState("마이페이지");
    var list_all = new Array();
    const a="heejin"


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
            get(ref(db, `users/${user.uid}/tm_info/point`)).then((snapshot)=>{
                if(snapshot.exists()){
                    setPoint(snapshot.val());}});
            get(ref(db, `users/${user.uid}/tm_info/betLogs`)).then((snapshot)=>{
                if(snapshot.exists()){
                    var auth = Object.keys(snapshot.val());
                    let today = new Date();
                    setList(Object.values(snapshot.val()));
                    // for (var i = 0; i < auth.length; i++) {
                    //     get(ref(db, `users/${user.uid}/tm_info/betLogs/${auth[i]}`)).then((ss) => {
                    //         if (ss.exists()) {
                    //             //setList(Object.values(ss.val()));
                    //             var authRef = Object.keys(ss.val());
                    //             var authDetail = Object.values(ss.val());
                    //             var addPoint = authDetail[0];
                    //             var betPoint = authDetail[1];
                    //             var list = [addPoint, betPoint, today.toLocaleString()];
                    //             var data = {
                    //                 num: i,
                    //                 date: today.toLocaleString(),
                    //                 addPoint: addPoint,
                    //                 betPoint: betPoint
                    //             }
                    //             list_all.push(data);
                                
                    //          }
                    //     })
                    // }
                    setViewing(true);
                }
            }) 
        

    }, [user, loading]);

   
    return(
        <>
            <div className="flex">
                <UserLNB/>
                <div className="Mypage_Main_part">
                    <NavMenu name={name} title={title}/>
                    <hr/>
                    <div classNam="point">

                        <span>{name} 님의 포인트 내역</span>
                        <div className="row">
                            <div className="col-md-4">
                                최고 Pt
                                <h5>20,000</h5> 
                            </div>
                            <div className="col-md-4">
                                잔여 pt
                                <h5>{point}</h5>
                            </div>
                            <div className="col-md-4">
                                전일  수익
                                <h5>20,000</h5>
                            </div>
                        </div>
                    </div>
                    <div className="List">
                        <div>
                            카테코리 필터 2021.07.12.2021
                        </div>
                        <Table striped bordered hover size="sm">
                            
                            
                            <thead className="tablest">
                                <tr>
                                <th>배팅 날짜</th>
                                <th>배팅 포인트</th>
                                <th>획득 포인트</th>
                                <th>수익률</th>
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

                            <li>

                            </li>
                        </Table>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Mypage;