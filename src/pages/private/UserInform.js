import NavMenu from "../NavMenu";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth, db, logout } from "../../scripts/firebase";
import { getDatabase,ref, get,set } from "firebase/database";
import { Link } from "react-router-dom";

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';


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
    const [field, setField] = useState("");
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
      set(ref(db, 'ROLE_USER/' + user.uid), {
        birth:birth,
        contact:contact,
        field:field,
        job:job,
        point:0,
        sex:sex,
        name:nickname} )
      set(ref(db, 'authority/' + user.uid), {
          auth:"ROLE_USER",
          email: user.email,
      })
      navigate('/home', {replace:true})
      }


    return (
        <div>
            <NavMenu name={name}/>
            <h2>UserInform 사용자 정보 입력하기</h2>
            <input
          type="text"

          value={birth}
          onChange={(e) => setBirth(e.target.value)}
          placeholder="생년월일"
        />
        <input
          type="text"

          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="전화번호"
        />
        <input
          type="text"
   
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="이름"
        />
        <select className="category" placeholder="분야" name="fieldoption" 
               value={field}  onChange={(e) => setField(e.target.value)}>
              <optgroup label='분야를 선택하세요'>
               <option value='sw'>sw</option>
               <option value='it'>it</option>
               <option value='design'>design</option>
               <option value='entertain'>entertain</option>
               </optgroup>
        </select>

        <select className="category" placeholder="직업" name="joboption" 
               value={job}  onChange={(e) => setJob(e.target.value)}>
              <optgroup label='직업을 선택하세요'>
               <option value='학생'>학생</option>
               <option value='마케터'>마케터</option>
               <option value='개발자'>개발자</option>
               <option value='회사원'>회사원</option>
               </optgroup>
        </select>

        <select className="category" placeholder="성별" name="sexoption" 
               value={sex}  onChange={(e) => setSex(e.target.value)}>
              <optgroup label='성별을 선택하세요'>
               <option value='여성'>여성</option>
               <option value='남성'>남성</option>
               </optgroup>
        </select>
        <button onClick={(e)=>postuser()}>
          클릭
        </button>
        </div>
    )
}