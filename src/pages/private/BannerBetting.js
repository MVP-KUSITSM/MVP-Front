import Modal from "../Modal";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { Button} from "react-bootstrap";
import { auth, db, storage } from "../../scripts/firebase";
import { ref, get, set, update, onValue, child } from "firebase/database";
import * as fbStorage from "firebase/storage";

import Popup from 'reactjs-popup';

import "../../assets/css/private/BannerBetting.css";
import "../../assets/css/basic.css";
import Refresh from "../../assets/css/rotate-cw.svg";


import NavMenu from '../NavMenu';
import UserLNB from "./UserLNB";

export default function BannerBetting() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [point, setPoint] = useState(0);
    const [select, setSelect] = useState(null);
    const [betPoint, setBetPoint] = useState(0);
    const [imageMap, setImageMap] = useState(null);
    const [title,setTitle] = useState("BannerBetting");

    const [sex, setSex]=useState(''); 
    const [job, setJob]=useState(''); 
    const [category, setCategory]=useState('');
    const [joboption,setjoboption]=useState('');

    const [modalOpen, setModalOpen] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [modalText, setModalText] = useState("");
    const [rankText, setRankText] = useState("");

    const openModal = () => {
        setModalOpen(true);
      }
    
      const closeModal = () => {
        setModalOpen(false);
      }
    //...모달창

    const openModal2 = () => {
        setModal2Open(true);
      }
    
      const closeModal2 = () => {
        setModal2Open(false);
      }
    //...모달창

    const navigate = useNavigate();

    const fetchUserInfo = async () => {
        try {
            const userRef = ref(db, 'users/' + user.uid);
            var snapshot = await get(userRef);
            var data = snapshot.val();
            
            if(data != null){
                setSex(data.ROLE_USER.sex);
                setCategory(data.ROLE_USER.category);
                setJob(data.ROLE_USER.job);
                //console.log(job+sex+category);
                if(data.tm_info != null){
                    setPoint(data.tm_info.point);
                }
                else{
                    set(child(userRef, "tm_info"), {
                        point: 0
                    });
                }
                setName(data.name);
            }
            else {
                fetchUserInfo();
            }
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate('/', {replace: true});
        fetchUserInfo();
    }, [user, loading]);

    const [imageBettingPath,setimageBettingPath] = useState("Pets");
    
    
    const imageNumber = 4;

    useEffect(() => {
        setImages(imageBettingPath);
    }, [imageBettingPath])


    
    const setImages = async (path) => {
        console.log(path)
        try{
            fbStorage.listAll(fbStorage.ref(storage, path)).then(res => {
                const imageIndex = selectIndex(imageNumber, 4);

                fbStorage.getDownloadURL(fbStorage.ref(storage, res.items[imageIndex[0]].fullPath))
                    .then(url => {
                        const img = document.getElementById("image_A");
                        img.setAttribute('src', url);
                    });

                fbStorage.getDownloadURL(fbStorage.ref(storage, res.items[imageIndex[1]].fullPath))
                    .then(url => {
                        const img = document.getElementById("image_B");
                        img.setAttribute('src', url);
                    });
                
                fbStorage.getDownloadURL(fbStorage.ref(storage, res.items[imageIndex[2]].fullPath))
                    .then(url => {
                        const img = document.getElementById("image_C");
                        img.setAttribute('src', url);
                    });

                fbStorage.getDownloadURL(fbStorage.ref(storage, res.items[imageIndex[3]].fullPath))
                    .then(url => {
                        const img = document.getElementById("image_D");
                        img.setAttribute('src', url);
                    });
                
                setImageMap({
                    path: path,
                    content_A: res.items[imageIndex[0]].name.split(".").join(""),
                    content_B: res.items[imageIndex[1]].name.split(".").join(""),
                    content_C: res.items[imageIndex[2]].name.split(".").join(""),
                    content_D: res.items[imageIndex[3]].name.split(".").join(""),
                })
            })
        }
        catch(e){
            console.error(e);
        }
    }

    //selecting random index without same element
    const selectIndex = (totalIndex, selectingNumber) => {
        let randomIndexArray = [];
        for (let i=0; i<selectingNumber; i++) {   //check if there is any duplicate index
            let randomNum = Math.floor(Math.random() * totalIndex)
            if (randomIndexArray.indexOf(randomNum) === -1) {
                randomIndexArray.push(randomNum)
            } else { //if the randomNum is already in the array retry
                i--
            }
        }
        return randomIndexArray
    }

    const onContentClicked = e => {
        if(select != null)
            select.style.outline = '0px';
        
        e.target.style.outline = 'solid blue';
        setSelect(e.target);
    }

    const onGetButtonClicked = async e => {
        if(select == null){
            alert("제일 선호하는 이미지를 선택해주세요.");
            return;
        }
        
        e.target.disabled = true;

        try{
            const userRef = ref(db, 'users/' + user.uid);
            var snapshot = await get(userRef);
            const data = snapshot.val();
            if (data != null){
                var nPoint = Number(data.tm_info.point) + 1000;

                const voteRef = ref(db, "vote/");
                var vote_snapshot = await get(voteRef);
                var vote_data = vote_snapshot.val();

                vote_data = vote_data == null ? {} : vote_data;
                const imgs = vote_data[imageMap.path] == null ? {} : vote_data[imageMap.path];

                var updateData = {};
                const img = imageMap[select.id]; 
                updateData[img] = imgs[img] == null ? 1 : imgs[img] + 1;

                //update할때, image.path에 한표가 추가될 때
                //bannercount 테이블 update
                //image.path/category/+"category(변수임)"  여기에 +1하기
               
                //setImage(imageMap.path+"/"+img);  //--> SceneryImages/mountains-6540497__340webp

                update(child(voteRef, imageMap.path), updateData).then(res => {
                    var getdata = {};
                    getdata['/point'] = nPoint
                    getdata['/getLogs/g_'+Date.now()] = {
                        select: select.id,
                        name: imageMap.path + "/" + img,
                    } 


                    get(ref(db, `BannerCount/${imageMap.path}/${img}/sex/${sex}`)).then((snapshot)=>{
                        if(snapshot.exists()){
                            var auth=snapshot.val()
                            console.log(auth);
                
                            const updates={};
                            updates['BannerCount/'+imageMap.path+"/"+img+'/sex/'+sex]=auth+1; 
                            update(ref(db),updates);
                           
        
                        }
                        else{
                            const updates={};
                              updates['BannerCount/'+imageMap.path+"/"+img+'/sex/'+sex]=1;
                              update(ref(db),updates);
                        }
                    })

                    get(ref(db, `BannerCount/${imageMap.path}/${img}/category/${category}`)).then((snapshot)=>{
                        if(snapshot.exists()){
                            var auth=snapshot.val()
                            console.log(auth);
            
                            const updates={};
                            updates['BannerCount/'+imageMap.path+"/"+img+'/category/'+category]=auth+1;
                            update(ref(db),updates);
                           
        
                        }
                        else{
                             const updates={};
                              updates['BannerCount/'+imageMap.path+"/"+img+'/category/'+category]=1;
                              update(ref(db),updates);
                        }
                    })

                    get(ref(db, `BannerCount/${imageMap.path}/${img}/job/${job}`)).then((snapshot)=>{
                        if(snapshot.exists()){
                            var auth=snapshot.val()
                            console.log(auth);
                
                            const updates={};
                            updates['BannerCount/'+imageMap.path+"/"+img+'/job/'+job]=auth+1;
                            update(ref(db),updates);
                           
        
                        }
                        else{
                              const updates={};
                              updates['BannerCount/'+imageMap.path+"/"+img+'/job/'+job]=1;
                              update(ref(db),updates);
                        }
                    })
                    
                    update(child(userRef, "tm_info"), getdata).then(res => {
                        select.style.outline = '0px';
                        setSelect(null);
                        e.target.disabled = false;
                        setPoint(nPoint);
                        setBetPoint(Number(betPoint) + 1000);
                        setImages(imageMap.path);
                    })
                })
            }
        } catch (err){
            console.error(err);
        }
    }

    const onBetButtonClicked = async e => {
        const betMultiplier = 3;
        const betAdder = 0.2;
        if(select == null){
            alert("대중의 선호도가 높을 것으로 예상되는 이미지를 선택해주세요.");
            return;
        }
        
        e.target.disabled = true;

        try{
            const userRef = ref(db, 'users/' + user.uid);
            var snapshot = await get(userRef);
            const data = snapshot.val();
            if(data != null){
                if (Number(betPoint) <= 0){
                    alert("베팅 포인트는 0 pt 이하일 수 없습니다.");
                    e.target.disabled = false;
                    return;
                }
                else if(Number(data.tm_info.point) < Number(betPoint)){
                    alert("베팅 포인트는 보유 중인 포인트를 넘을 수 없습니다.");
                    e.target.disabled = false;
                    return;
                }

                const voteRef = ref(db, "vote/" + imageMap.path);
                var vote_snapshot = await get(voteRef);
                var vote_data = vote_snapshot.val();
                vote_data = vote_data == null ? {} : vote_data;

                var count = {};
                count.content_A = vote_data[imageMap.content_A] == null ? 0 : vote_data[imageMap.content_A];
                count.content_B = vote_data[imageMap.content_B] == null ? 0 : vote_data[imageMap.content_B];
                count.content_C = vote_data[imageMap.content_C] == null ? 0 : vote_data[imageMap.content_C];
                count.content_D = vote_data[imageMap.content_D] == null ? 0 : vote_data[imageMap.content_D];

                var total = count.content_A + count.content_B + count.content_C + count.content_D;

                if(total == 0) {
                    alert("선호도 데이터가 없습니다. 선호도 데이터가 쌓일 때까지 기다려주세요.");
                    e.target.disabled = false;
                    return;
                }

                const portion = count[select.id]/total;
                var probability = portion + betAdder;

                var jackpot = probability > Math.random();
                var addPoint = jackpot ? betPoint * (betMultiplier - 1) : betPoint * -1
                var nPoint = Number(data.tm_info.point) + Number(addPoint);

                var alertText = 
                    "선택하신 이미지에 대한 대중의 선호도는 " + parseInt(portion * 100) + "% 입니다.\n"
                    + "배팅 성공률: " + parseInt(probability * 100) + "%\n"
                    + "배당 포인트: " + betMultiplier + "배"
                    + "\n====\n"
                if(jackpot) {
                    alertText = 
                    alertText + "축하합니다. 배팅에 성공하셨습니다.\n"
                    + "획득 포인트: " + (betPoint * betMultiplier);
                    setModalText(alertText);
                }
                else {
                    alertText = alertText + "배팅에 실패하셨습니다."
                    setModalText(alertText);
                }

                var betdata = {};
                betdata['/point'] = nPoint
                betdata['/betLogs/b_'+Date.now()] = {
                    select: select.id,
                    name: imageMap.path + "/" + imageMap[select.id],
                    betPoint: Number(betPoint),
                    jackpot: jackpot,
                    addPoint: addPoint,
                    profit: addPoint/Number(betPoint)*100+"%",
                    date:new Date(+new Date() + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, '')
                } 

                update(child(userRef, "tm_info"), betdata).then(res => {
                    select.style.outline = '0px';
                    setSelect(null);
                    // 모달... alert(alertText); 
                    e.target.disabled = false;
                    setPoint(nPoint);
                    setBetPoint(0);
                    setImages(imageMap.path);
                    openModal(); //모달창 열기
                })
            }
        } catch (err){
            console.error(err);
        }
    }

    const showRank = async () => {
        try {
            //setOpen(o => !o);

            const userRef = ref(db, 'users/');
            var snapshot = await get(userRef);
            var data = snapshot.val();

            var keys = Object.keys(data);
            console.log(keys);
            var pointMap = [];
            keys.map(v => {
                var tm_info = data[v].tm_info;
                if(tm_info == null)
                    pointMap.push([v, 0]);
                else if(tm_info.point == null)
                    pointMap.push([v, 0]);
                else
                    pointMap.push([v, tm_info.point]);
            })

            pointMap.sort((a, b) => { return b[1] - a[1] });
            const rankListNumber = 50;
            var myRank = -1;
            var rankText = "";
            pointMap.map((v, i) => {
                if(i>=rankListNumber && myRank>-1) return;
                else if(i < rankListNumber){
                    rankText = rankText + (i+1) + "위: " + data[v[0]].name + " | " + v[1] + " pt\n"
                }
                if(v[0] === user.uid){
                    myRank = i + 1;
                    rankText = name + "님은 현재 " + myRank + "위 입니다.\n\n" + rankText
                }
            });
            setRankText(rankText);
            openModal2();
            // alert(rankText);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    }

    return (
        <div>
            <div className="flex">
                <UserLNB/>
                <div className="BannerBetting_main_part">
                    <div className="Funding_main">
                    <NavMenu name={name} onChangeName={name => {setName(name)}} title={title}/>
                    <hr id="line"/>
                    
                        <div className="Title">
                            <div className="Title_name">
                            <h2>배너 배팅</h2>
                            <h5>Pick Your Best</h5>

                            </div>
                            <div className="Title_explain">
                                <p>
                                제일 트렌디한 배너에 포인트를 배팅하세요.<br/>
                                선호도가 높을 수록 배팅 성공률이 올라갑니다!  
                                </p>
                                <button className="Title_ranking" onClick={() => { showRank(); }}>
                                    순위표 보기

                                </button>
                            </div>
                        </div>
                        <hr></hr>

                        <div className="Category_menu">
                            <div className="Refresh" onClick={() => { 
                                setImages(imageBettingPath); 
                                //imageoptioncheck();
                            }}>
                                새로고침
                                <img src={Refresh}></img>
                            </div>

                            <div className="Category_select">
                            <select placeholder="직업 선택" name="joboption" 
                                    value={joboption}  onChange={(e) => {setimageBettingPath(e.target.value); setjoboption(e.target.value)}}>
                                    <optgroup label='직업을 선택하세요'>
                                    <option value='기본'></option>
                                    <option value=' '></option>
                                    <option value='it'>IT/컴퓨터</option>
                                    <option value='marketing'>마케팅</option>
                                    <option value='finance'>금융</option>
                                    <option value='game'>게임</option>
                                    <option value='culture'>문화/예술</option>
                                    <option value='beauty'>뷰티</option>
                                    <option value='sports'>스포츠/레저</option>
                                    <option value='foods'>식품</option>
                                    <option value='trip'>여행</option>
                                    <option value='medical'>의료</option>
                                    <option value='fashion'>패션의류</option>
                                    <option value='environment'>환경</option>
                                    <option value='etc'>기타</option>
                                    </optgroup>
                                    </select>

                                <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                                    {close => (
                                    <div className="o_modal">
                                        <div className="header"> Modal Title </div>
                                        <div className="content">
                                        {' '}
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                                        Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                                        delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                                        commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                                        explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                                        </div>
                                        <div className="actions">
                                        <Popup
                                            trigger={<button className="button"> Trigger </button>}
                                            position="top center"
                                            nested
                                        >
                                            <span>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                                            magni omnis delectus nemo, maxime molestiae dolorem numquam
                                            mollitia, voluptate ea, accusamus excepturi deleniti ratione
                                            sapiente! Laudantium, aperiam doloribus. Odit, aut.
                                            </span>
                                        </Popup>
                                        <button
                                            className="button"
                                            onClick={() => {
                                            console.log('modal closed ');
                                            close();
                                            }}
                                        >
                                            close modal
                                        </button>
                                        </div>
                                    </div>
                                    )}
                                </Popup>
                            </div>
                        </div>
                        
                        <div className="container-fluid">
                            <div className="o_contents">
                                <div className="row">
                                    <div className="col-md-6">
                                        <button className="banner_pick" id="content_A" onClick={onContentClicked}>
                                            <img className="o_content" id="image_A" src="" alt="A"/>
                                        </button>
                                    </div>
                                    <div className="col-md-6">
                                        <button className="banner_pick"  id="content_B" onClick={onContentClicked}>
                                            <img className="o_content" id="image_B" src="" alt="B"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="row pt-2">
                                    <div className="col-md-6">
                                        <button className="banner_pick"  id="content_C" onClick={onContentClicked}>
                                            <img className="o_content" id="image_C" src="" alt="C"/>
                                        </button>
                                    </div>
                                    <div className="col-md-6">
                                        <button className="banner_pick"  id="content_D" onClick={onContentClicked}>
                                            <img className="o_content" id="image_D" src="" alt="D"/>
                                        </button>
                                    </div>
                                </div>
                                {/* <div className="row pt-2">
                                    <div className="col-md-5"><p>1000pt <Button onClick={onGetButtonClicked}>획득</Button></p></div>
                                    <div className="col-md-5">
                                        <div className="row">
                                            <p>
                                                <input className="tr" type="number" value={betPoint} onChange={e => setBetPoint(e.target.value)} />
                                                pt <Button onClick={onBetButtonClicked}>배팅</Button>
                                            </p>                                 
                                        </div>

                                    </div>
                                </div> */}
                                
                                <div className="Button_choice">
                                    <div className ="Button_get">
                                        <p><span id="getpoint">1000pt</span> <span className="Button_pick" onClick={onGetButtonClicked}>획득</span></p>
                                    </div>
                                    <div className="Button_bet">
                                        <p>
                                            <input className="tr" id="betpoint" type="number" value={betPoint} onChange={e => setBetPoint(e.target.value)} />
                                            pt <span className="Button_pick" onClick={onBetButtonClicked}>배팅</span>
                                        </p>       
                                    </div>
                                </div>
                                <div className="point">
                                    <p>나의 잔여 포인트 <span id="blue">{point} pt</span></p>
                                </div>


                            </div>
                        </div> 
                        
                        <div className="Button_choice">
                            <div className ="Button_get">
                                <p><span id="getpoint">1000pt</span> <span className="Button_pick" onClick={onGetButtonClicked}>획득</span></p>
                            </div>
                            <div className="Button_bet">
                                <p>
                                    <input className="tr" type="number" value={betPoint} onChange={e => setBetPoint(e.target.value)} />
                                    pt <Button onClick={onBetButtonClicked}>배팅</Button>
                                    <Modal open={modalOpen} close={closeModal} footer="확인" betting={true}>
                                        {modalText}
                                    </Modal>
                                </p>                                 

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}