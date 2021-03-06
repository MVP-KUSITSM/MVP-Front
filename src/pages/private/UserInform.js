import NavMenu from "../NavMenu";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth, db, logout } from "../../scripts/firebase";
import { getDatabase,ref, get,set,update } from "firebase/database";
import { Link } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import "../Login.css";


const firebaseConfig = {
  apiKey: "AIzaSyDFMMpu-eTGrbpW3Ruu-G2ZMfwaioRCsYw",
  authDomain: "image-betting.firebaseapp.com",
  databaseURL: "https://image-betting-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "image-betting",
  storageBucket: "image-betting.appspot.com",
  appId: "image-betting"
}

const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();


export default function UserInform() {
    const [birth, setBirth] = useState("");
    const [contact, setContact] = useState("");
    const [category, setCategory] = useState("");
    const [job, setJob] = useState("");
    const [point, setPoint] = useState(0);
    const [sex, setSex] = useState("");
    const [nickname, setNickname] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");

    const navigate = useNavigate();

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
    }, [user, loading]);

    const postuser =async()=>{
      
      update(ref(db, 'users/' + user.uid), {
        auth:"ROLE_USER",
        ROLE_USER:{
          birth:birth,
          contact:contact,
          category:category,
          job:job,
          sex:sex,
          name:nickname}
        
    })
      navigate('/bb', {replace:true})
      }


    return (
      <>
        {/*<NavMenu name={name}/>*/}
        <div className="login">
        <img style={{height: 908,width: 1024}} src="main.png"/>
        <div className="login__container">
    <div style={{alignContent:"flex-end"}}>
      <img style={{width:101, height:75.75}} src="logo.png"/></div>
        
        <text>?????? ????????????</text>
            
            
            <div className="login__Box">
            <text className="login__Text">??????</text>
            <input
              type="text"
              className="login__textBox2"
              value={nickname}
              placeholder="?????? ??????"
              onChange={(e) => setNickname(e.target.value)}
            />
            </div>

            <div className="login__Box">
            <text className="login__Text">????????????</text>
            <input
              type="text"
              className="login__textBox2"
              value={birth}
              placeholder="???????????? ??????"
              onChange={(e) => setBirth(e.target.value)}
            />
            </div>


            <div className="login__Box">
            <text className="login__Text">?????????</text>
            <input
              type="text"
              className="login__textBox2"
              value={contact}
              placeholder="????????? ??????"
              onChange={(e) => setContact(e.target.value)}
            />
            </div>

            <div className="login__Box">
                <text className="login__Text">??????</text>
                <select className="login__Box" placeholder="?????? ??????" name="sexoption" 
                    value={sex}  onChange={(e) => setSex(e.target.value)}>
                  <text className="login__Text">?????????</text>
                  <optgroup label='????????? ???????????????'>
                  <option value=' '></option>
                  <option value='women'>??????</option>
                  <option value='men'>??????</option>
                  </optgroup>
                </select>
            </div>

            <div className="login__Box">
                <text className="login__Text">??????</text>
                    <select className="login__Box" placeholder="?????? ??????" name="joboption" 
                      value={job}  onChange={(e) => setJob(e.target.value)}>
                      <optgroup label='????????? ???????????????'>
                      <option value=' '></option>
                      <option value='teenager'>????????????</option>
                      <option value='student'>??????/????????????</option>
                      <option value='worker'>?????????(?????????)</option>
                      <option value='doctor'>?????????</option>
                      </optgroup>
                    </select>
            </div>

            <div className="login__Box">
              <text className="login__Text">????????????</text>
              <select className="login__Box" placeholder="???????????? ??????" name="fieldoption" 
                    value={category}  onChange={(e) => setCategory(e.target.value)}>
                      <text className="login__Text">?????????</text>
                    <optgroup label='????????? ???????????????'>
                    <option value=' '></option>
                    <option value='it'>IT/?????????</option>
                    <option value='marketing'>?????????</option>
                    <option value='finance'>??????</option>
                    <option value='game'>??????</option>
                    <option value='culture'>??????/??????</option>
                    <option value='beauty'>??????</option>
                    <option value='sports'>?????????/??????</option>
                    <option value='foods'>??????</option>
                    <option value='trip'>??????</option>
                    <option value='medical'>??????</option>
                    <option value='fashion'>????????????</option>
                    <option value='environment'>??????</option>
                    <option value='etc'>??????</option>
                    </optgroup>
              </select>
            </div>

        <button className="login__btn login__google" onClick={(e)=>postuser()}>
          ??????
        </button>
        </div>
        </div>
        </>
    )
}