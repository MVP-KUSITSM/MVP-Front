import NavMenu from "../NavMenu";
import React, { useEffect, useState} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth, db, logout } from "../../scripts/firebase";
import { ref, get,set } from "firebase/database";
import { Link, Router } from "react-router-dom";

export default function CorpInform() {
    const [boss, setBoss] = useState("");
    const [boss_contact, setBosscontact] = useState("");
    const [capital_size, setCapitalsize] = useState("");
    const [contact, setContact] = useState("");
    const [field, setField] = useState("");
    const [scale, setScale] = useState("");
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

    const postcorp =async()=>{
      set(ref(db, 'ROLE_CORP/' + user.uid), {
        boss:boss,
        boss_contact:boss_contact,
        capital_size:capital_size,
        contact:contact,
        field:field,
        name:nickname,
        scale:scale,
        name:nickname,
        result: 0,
      })

      set(ref(db, 'authority/' + user.uid), {
          auth:"ROLE_CORP",
          email: user.email,
      })
      navigate('/home', {replace:true})
      }
    return (
        <div>
            <NavMenu name={name}/>
            <h2>CorpInform 기업 정보 입력</h2>
            <input
          type="text"

          value={boss}
          onChange={(e) => setBoss(e.target.value)}
          placeholder="대표 성명"
        /><input
        type="text"

        value={boss_contact}
        onChange={(e) => setBosscontact(e.target.value)}
        placeholder="대표 전화번호"
      />
      
        <input
          type="text"

          value={capital_size}
          onChange={(e) => setCapitalsize(e.target.value)}
          placeholder="자본규모"
        /><input
        type="text"

        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="기업 대표 전화번호"
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

        <select className="category" placeholder="기업 규모" name="fieldoption" 
               value={scale}  onChange={(e) => setScale(e.target.value)}>
              <optgroup label='기업 규모를 선택하세요'>
               <option value='10인 이하'>10인 이하</option>
               <option value='10~50인'>10~50인</option>
               <option value='50~100인'>50~100인</option>
               <option value='100인 이상'>100인 이상</option>
               </optgroup>
        </select>
        <button onClick={(e)=>postcorp()}>
          클릭
        </button>
    
       
        </div>
    )
}