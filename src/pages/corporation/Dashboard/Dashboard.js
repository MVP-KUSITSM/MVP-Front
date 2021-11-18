import React, { useEffect, useState } from "react";

import GNB from "../GNB/GNB";
import LNB from "../LNB/LNB";
import { Button } from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth, db, storage } from "../../../scripts/firebase";
import { ref, get,refFromURL} from "firebase/database";
import * as fbStorage from "firebase/storage";

import "../../../assets/css/corporation/Dashboard.css";
function Dashboard() {
  //DB 가져오기
  const [user, loading, error] = useAuthState(auth);
  const [corpname, setCorpname] = useState("");
  const [bannercount,setBannercount] = useState(0);
  var bannerImg;

  const navigate = useNavigate();
  const storage = fbStorage.getStorage();

  const fetchUserInfo = async () => {
    try {
      const userRef = ref(db, 'users/'+ user.uid);
      var snapshot = await get(userRef);
      var data =snapshot.val();
      if (data != null){
        if (data.ROLE_CORP != null){
          setCorpname(data.ROLE_CORP.info.name);
          setBannercount(data.ROLE_CORP.count);
          bannerImg = data.banner[0];
          FetchBanner();
        }else{
          alert("잘못된 접근입니다.");
          setCorpname("테서터");
          setBannercount("3");
        }

      }
    } catch(err){
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };



  function FetchBanner(){
    fbStorage.getDownloadURL(fbStorage.ref(storage,bannerImg))
    .then((url) =>{
      var img = document.getElementById('take');
      img.setAttribute('src',url);
      // alert(url);
    })
    .catch((err)=>{
      console.log(err);
    });
  };



  useEffect(()=> {
    if (loading) return;
    if (!user) return navigate('/', {replace: true});
    fetchUserInfo();

  }, [user,loading]);


  // 배너 가져오기

  // const setBanner = async (path) => {
  //   try {
  //     fbStorage
  //   }catch{

  //   }
  // }
  //대시보드 
  let [기업명,기업명변경] = useState('기업명');
  let [분야,분야변경] = useState('분야');
  let [등록배너수,등록배너수변경] = useState(0);
  let [등록프로토수,등록프로토수변경] = useState(1);
  
  
  //펀딩 진행 중인 배너

  let [참여인원,참여인원변경] = useState('N');

  //프로토타입 리뷰
  let 평균별점 = 0.0
  return (
    <>
    <GNB />
    <div class="flex">
      <LNB />
      <div className="Main_part">
          <div className="row">
            <h4>대시보드</h4>
            <div className="col-md-4">
              <h3>{ corpname } </h3>
              <p>{ corpname } </p>
              <Button variant="light" className="button">구독 중인 플랜</Button>
            </div>

            <div className="col-md-4">
              <p>등록한 배너 수</p>
              <h3>{bannercount}</h3>
            </div>

            <div className="col-md-4">
              <p>등록한 프로토타입 수</p>
              <h3>{등록프로토수}</h3>
            </div>
          </div>
          <div className="Banner">
            <h4>펀딩 진행 중인 배너</h4>
            <span>상세 보기 </span>
            <div className="Banner_detail">
              <img src="" width="300" className="Banner_img" id="take"/>
              <div className="Banner_text">
                <p>{참여인원} 명 참여 중</p>
                <p>배너 A : n% <br/>배너 B : m%</p>
              </div>

            </div>
          </div>
          <div className="Prototype">
            <h4>프로토타입 리뷰</h4>
            <span>상세 보기</span>
            <div className="Prototype_detail">
              <img src="https://movie-phinf.pstatic.net/20210915_104/1631681279096sdjNA_JPEG/movie_image.jpg" width="300" className="Prototype_img"/>
              <p className="Prototype_average">평균 별점 {평균별점} </p>
              <div className="Prototype_review">
                  <div className="border">
                    리뷰
                  </div>
                  <div className="border">
                    리뷰
                  </div>
              </div>

            </div>
          </div>
      </div>
    </div>
    </>
  );
}


export default Dashboard;