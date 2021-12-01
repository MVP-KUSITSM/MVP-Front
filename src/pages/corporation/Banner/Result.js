
import React, { useState,useEffect } from "react";
import {auth, db, storage} from "../../../scripts/firebase";
import { Navigate } from "react-router";
import { ref, onValue } from "firebase/database";

import * as fbStorage from "firebase/storage";
import "../../../assets/css/corporation/banner/result.css";
import LNB from "../LNB/LNB";
import GNB from "../GNB/GNB";
//import { FirebaseStorage } from "@firebase/storage-types";

import { PieChart } from 'react-minimal-pie-chart';
import {Bar} from 'react-chartjs-2';

import Chart from 'chart.js/auto';




function Result() {
    var category1;
    const [title,setTitle]= useState("Banner Result");   
    const [women, setwomen]=useState(0);
    const [men, setmen]=useState(0)
    const [it, setit]=useState(0)
    const [marketing, setmarketing]=useState(0)
    const [finance, setfinance]=useState(0)
    const [game, setgame]=useState(0)
    const [culture, setculture]=useState(0)
    const [beauty, setbeauty]=useState(0)
    const [sports, setsports]=useState(0)
    const [foods, setfoods]=useState(0)
    const [trip, settrip]=useState(0)
    const [medical, setmedical]=useState(0)
    const [fashion, setfashion]=useState(0)
    const [environment, setenvironment]=useState(0)
    const [etc, setetc]=useState(0) 
    const [student, setstudent]=useState(0)
    const [doctor, setdoctor]=useState(0)
    const [teenager, setteenager]=useState(0)
    const [worker, setworker]=useState(0)

    const [age10,setage10]=useState(0)
    const [age20,setage20]=useState(0)
    const [age30,setage30]=useState(0)
    const [age40,setage40]=useState(0)

    
/*    let it,marketing,finance,game,culture,beauty,sports,foods,trip,medical,fashion,environment,etc,student,doctor,teenager,worker;
    let men1;
    var job1;
    var a=100;*/

  useEffect(() => {
    var url = window.location.href;
    var bid = url.split('/')[6];
    let bannerId = bid.replace('%2F', '/');
    console.log(bannerId)
    

    var userIdRef = ref(db, `BannerCount/${bannerId}`);
    
    onValue(userIdRef, (snapshot) => {
      var data = snapshot.val();

      setwomen(data.sex.women)
      setmen(data.sex.men)
      setit(data.category.it);
      setmarketing(data.category.marketing);
      setfinance(data.category.finance);
      setgame(data.category.game);
      setculture(data.category.culture);
      setbeauty(data.category.beauty);
      setsports(data.category.sports);
      setfoods(data.category.foods);
      settrip(data.category.trip);
      setmedical(data.category.medical);
      setfashion(data.category.fashion);
      setenvironment(data.category.environment);
      setetc(data.category.etc);
      setstudent(data.job.student)
      setdoctor(data.job.doctor);
      setteenager(data.job.teenager);
      setworker(data.job.worker);

    })
    }, []); 

    const data = {
      labels: ["IT/컴퓨터","마케팅","금융","게임","문화/예술","뷰티","스포츠/레저","식품","여행","의료","패션의류","환경","기타"],
      datasets: [
        {
          label: '관심분야 별 득표수',
          backgroundColor: '#0A347F',
          borderColor: '#0A347F',
          hoverBackgroundColor: 'rgba(231,232,85,1)',
          hoverBorderColor: 'rgba(231,232,85,1)',
          data: [it,marketing,finance,game,culture,beauty,sports,foods,trip,medical,fashion,environment,etc]
        }
      ]
    };

  return (
  
    <div class="cont">
    <LNB />
    <div class="cont2">
      <GNB title={title}/>
          <div className="cont3">
          <p class="banner-statistic-text">참여자 통계</p>
           
            <div class="sex_age_area">
              <div class="sex_area">
                <p class="text">성별 통계</p>
                <div class="graph">
                        <PieChart style={{width:200, height:200}} class="basic-chart"
                            data={[
                              { title: 'One', value: women, color: '#0A347F' },
                              { title: 'Two', value: men, color: '#E7E855'}
                                                             
                            ]}
                            rounded={true}
                            lineWidth={20}
                            
                            label={({dataEntry})=>parseInt((dataEntry.value)/(men+women)*100)+"%"}
                            labelStyle={{fontSize:"10px"}}
                            labelPosition={70} />
                        <div class="detail">
                        <div class="block">
                          <p style={{marginRight:10 ,borderStyle:"solid",borderColor: '#0A347F', borderWidth:8, width:15, height:10}}></p>
                          <p class="text2">여자 : {parseInt(women/(women+men)*100)} % ({women}/{(women+men)}(표))</p>   
                            </div>
                          <div class="block">
                          <p style={{marginRight:10 ,borderStyle:"solid",borderColor: '#E7E855', borderWidth:8, width:15, height:10}}></p>
                            
                          <p class="text2">남자 : {parseInt(men/(women+men)*100)} % ({men}/{(women+men)}(표))</p> 
                          </div>
                        </div>
                </div>  
              </div>
              <div class="age_area">
              <p class="text">나이 통계</p>
              <div class="graph">
                        <PieChart style={{width:200, height:200}} class="basic-chart"
                            data={[
                              { title: 'one', value: 12, color: '#0A347F' },
                              { title: 'Two', value: 13, color: '#E7E855' },
                              { title: 'Three', value: 4, color: '#FFFFB6' },
                              { title: 'Three', value: 6, color: '#C13C37' },                               
                            ]}
                            rounded={true}
                            lineWidth={20}
                            
                            label={({dataEntry})=>parseInt((dataEntry.value)/(12+13+4+6)*100)+"%"}
                            labelStyle={{fontSize:"7px"}}
                            labelPosition={70} />
                        <div class="detail">
                        <div class="block">
                          <p style={{marginRight:10 ,borderStyle:"solid",borderColor: '#0A347F', borderWidth:8, width:15, height:10}}></p>
                          <p class="text2">10대 : {parseInt(12/(12+13+4+6)*100)} % ({12}/{(12+13+4+6)}(표))</p>   
                        </div>
                        <div class="block">
                          <p style={{marginRight:10 ,borderStyle:"solid",borderColor: '#E7E855', borderWidth:8, width:15, height:10}}></p> 
                          <p class="text2">20대 : {parseInt(13/(12+13+4+6)*100)} % ({13}/{(12+13+4+6)}(표))</p> 
                        </div>
                        <div class="block">
                          <p style={{marginRight:10 ,borderStyle:"solid",borderColor: '#FFFFB6', borderWidth:8, width:15, height:10}}></p>
                          <p class="text2">30대 : {parseInt(4/(12+13+4+6)*100)} % ({4}/{(12+13+4+6)}(표))</p>   
                        </div>
                        <div class="block">
                          <p style={{marginRight:10 ,borderStyle:"solid",borderColor: '#C13C37', borderWidth:8, width:15, height:10}}></p> 
                          <p class="text2">40대 이상 : {parseInt(6/(12+13+4+6)*100)} % ({6}/{(12+13+4+6)}(표))</p> 
                        </div>
                       
                        </div>
                </div> 
              </div>
            </div>

            

              <div class="job_area">
                <p class="text">직업 통계</p>
                <div class="graph">
                <PieChart style={{width:200, height:200}} class="basic-chart"
                    data={[
                      { title: 'one', value: student, color: '#0A347F' },
                      { title: 'Two', value: teenager, color: '#E7E855' },
                      { title: 'Three', value: worker, color: '#FFFFB6' },
                      { title: 'Three', value: doctor, color: '#C13C37' },
                    ]}
                    lineWidth={20}
                    rounded={true}
                    label={({dataEntry})=>parseInt((dataEntry.value)/(student+teenager+worker+doctor)*100)+"%"}
                    labelStyle={{fontSize:"7px"}}
                    labelPosition={70}
                  />
                        <div class="detail">
                          <div class="block">
                            <p style={{marginRight:10 ,borderStyle:"solid",borderColor: '#0A347F', borderWidth:8, width:15, height:10}}></p>
                            <p class="text2">초중고생: {parseInt(teenager/(student+teenager+worker+doctor)*100)} % ({student}/{(student+teenager+worker+doctor)}(표))</p>   
                          </div>
                          <div class="block">
                            <p style={{marginRight:10 ,borderStyle:"solid",borderColor: '#E7E855', borderWidth:8, width:15, height:10}}></p>
                            <p class="text2">대학/대학원생 : {parseInt(student/(student+teenager+worker+doctor)*100)} % ({teenager}/{(student+teenager+worker+doctor)}(표))</p> 
                          </div>
                            
                        </div>


                        <div class="detail">
                          <div class="block">
                            <p style={{marginRight:10 ,borderStyle:"solid",borderColor: '#FFFFB6', borderWidth:8, width:15, height:10}}></p>
                            <p class="text2">회사원(직장인) : {parseInt(worker/(student+teenager+worker+doctor)*100)} % ({worker}/{(student+teenager+worker+doctor)}(표))</p>   
                           </div>
                          <div class="block">
                            <p style={{marginRight:10 ,borderStyle:"solid",borderColor: '#C13C37', borderWidth:8, width:15, height:10}}></p>
                            <p class="text2">연구원 : {parseInt(doctor/(student+teenager+worker+doctor)*100)} % ({doctor}/{(student+teenager+worker+doctor)}(표))</p> 
                         </div>
                       
                </div> 
              </div>
          </div>
              <div class="field_area2">
                  <p class="text">관심분야 별 통계</p>
                  <Bar
                    data={data}
                  />
              </div>

              </div>
            </div>
    </div>
  );
}


export default Result;  
