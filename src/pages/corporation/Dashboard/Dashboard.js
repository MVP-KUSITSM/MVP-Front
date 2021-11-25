import React, { useEffect, useState } from "react";

import LNB from "../LNB/LNB";
import GNB from "../GNB/GNB";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth, db, storage,logout } from "../../../scripts/firebase";
import { ref, get,refFromURL} from "firebase/database";
import { Link } from "react-router-dom";
import * as fbStorage from "firebase/storage";

import Search from "../../../assets/css/search.svg";
import Bell from "../../../assets/css/bell.svg";

import "../../../assets/css/corporation/Dashboard.css";
import "../../../assets/css/basic.css"
function Dashboard() {
  //DB 가져오기
  const [user, loading, error] = useAuthState(auth);
  const [corpname, setCorpname] = useState("");
  const [bannercount,setBannercount] = useState(0);
  const [title,setTitle]= useState("Dashboard");  
  let [분야,분야변경] = useState('분야');
  let [참여인원,참여인원변경] = useState('N');

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
          setCorpname(data.ROLE_CORP.Info.name);
          setBannercount(data.ROLE_CORP.count);
          if (data.ROLE_CORP.banner != null){
            bannerImg = data.ROLE_CORP.banner[0];
            vote_count(bannerImg);
          }else{
            bannerImg = "Haneul/1601126211274-1.jpg"; //기본 배너 이미지
          }
          
          분야변경(data.ROLE_CORP.Info.category);

          FetchBanner();
        }else{
          //기본 정보
          alert("잘못된 접근입니다.");
          setCorpname("테서터");
        }
      }
    } catch(err){
      console.error(err);
      alert("An error occured while fetching user data. 콘솔창을 확인해주세요.");
    }
  };

  const vote_count = async (bannerImg) => {
    try{
      var vote = bannerImg.split('/');
      var vote_Ref = ref(db,'vote/'+vote[0]);
      var vote_snapshot = await get(vote_Ref);
      var vote_data = vote_snapshot.val();
      console.log("testete"+vote_data);
      // 참여인원변경(vote_data.vote[1]);
      // console.log("dae"+참여인원);
    }catch(err){
      console.error(err);
      alert("N명 오류");
    }
  };

  function FetchBanner(){
    fbStorage.getDownloadURL(fbStorage.ref(storage,bannerImg))
    .then((url) =>{
      var img = document.getElementById('take');
      img.setAttribute('src',url);
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

  //대시보드 
  let [등록프로토수,등록프로토수변경] = useState(1);



  //프로토타입 리뷰
  let 평균별점 = 0.0
  return (
    <>
    <div class="flex">
      <LNB />
      <div className="Main_part">
          <div className="Dashboard_GNB">
            {/* <h3>Dash Board</h3>
            <div className="left_float">
              <span><img width ="30"src={Search}></img></span>
              <span><img width="30"src={Bell}></img></span>
            <div className="logout" onClick={logout}>로그아웃</div>
          </div>  */}
          <GNB title={title} />
          </div>
          <div className="row">
            <div className="Dashboard">
                <div className="Dashboard_corpname">
                  <h3>{ corpname } </h3>
                  <p id="category"> { 분야 }</p>
                  <div  className="button">구독 중인 플랜</div>
                </div>
                <div className="Dashboard_banner">
                  <p>등록한 배너 수</p>
                    <h3>{bannercount}</h3>
                </div>
                <div className="Dashboard_prototype">
                  <p>등록한 프로토타입 수</p>
                    <h3>{등록프로토수}</h3>
                </div>
            </div>
          </div>
          <div className="Banner">
          <div><span className="title_style">펀딩 진행 중인 배너</span>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/corporation/banner/detail"><span className="title_detail">상세 보기 &gt;</span></Link></div>
            <div className="Banner_detail">
              <Link to="/corporation/banner/detail"><img src=""className="Banner_img" id="take"/></Link>
              <div className="Banner_text">
                <p>{참여인원} 명 참여 중</p>
                <p>배너 A : n% <br/>배너 B : m%</p>
              </div>

            </div>
          </div>
          <div className="Prototype">
            <div><span className="title_style">프로토타입 리뷰</span><span className="title_detail">상세 보기 &gt;</span></div>
            
            <div className="Prototype_detail">
              <img src="https://s3-alpha-sig.figma.com/img/11af/7559/bb038da144aa5a197b90f7e58893c499?Expires=1638144000&Signature=LHnzVrksAuFEohF-wrzcDtpSphQMjqWrKEyU~AH0JRf33Msde964hfAZDL0FkyXvOGOPWZo~iLbTvr7qBwfvdtKtPcqz09iSfYspHrWm2kP1Pt8jCwTf4EF3we8RgEsYAsa48tAiMSzDLe9wXDkALSPSRWY2QWVu8~Vhy~ko80B1nfXHKILXO7cwSkEiaGY9nGgJio06CNp371ys~kIJ7tQTZHlbnst015KFnsQtzM2VvmtHUO4uarH69xG-~o6k2HPIr8UvTkqZWfToQC4pAchDRNIOjyk27I1vfax5TC7fvlVx3hUmza7Yy4qkotDcI~~IlGiAVxuUxUdUp97q5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" width="384"className="Prototype_img"/>
              <div className="Prototype_review">
                <div className="Prototype_average">평균 별점 
                  <h3> 4.8 </h3>
                  </div>
                  <div className="border">
                    <h5>큐밀리1</h5>
                    <span>❤❤❤❤❤</span>
                    <span>2021.11.01</span>
                    
                    <div>
                      오늘도 좋은 말씀 너무 잘 들었습니다. 
                      벌써 날이 추워지네요.
                      다들 따뜻하게 입고 다니시고 좋은 한 해로 마무리하셨으면 좋겠습니다. ㅎㅎ
                
                    </div>
                    </div>
                  <div className="border">
                    <h5>큐밀리1</h5>
                    <span>❤❤❤❤❤</span>
                    <span>2021.11.01</span>
                    
                    <div>
                      큐시즘 여러분~ 다들 학술제 준비하시느라 수고가 많으시죠?ㅎㅎ
                      항상 뒤에서 응원하고 있습니다! 화이팅!!!
                    </div>
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