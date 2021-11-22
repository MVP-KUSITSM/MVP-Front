import React, { useEffect, useState  } from "react";
import { storage, storageRef, db,auth } from "../../../scripts/firebase";
import "../../../assets/css/corporation/banner/upload.css";
import { getDatabase,ref, get,set,update,push } from "firebase/database";
import GNB from "../GNB/GNB";
import LNB from "../LNB/LNB";
import firebase from "firebase/compat";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";





function Upload() {
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [bannerlist,setbannerlist]=useState([]);
  
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

  const upload = () => {
      if (image == null)
          return;
            var uploadimageurl=category+'/'+image.name;
          push(ref(db, 'users/' + user.uid+'/ROLE_CORP'), {
            banner:[uploadimageurl]
            }
          )
      storageRef.child(`/${category.valueOf()}/${image.name}`).put(image).on("state_changed", alert("success"), alert);

      
  }

  return (
    <>
    <div className="flex">

    
    <LNB />
    <div class="Banner-Upload">
      <GNB />
        <p class="title">배너 업로드</p>
        <p class="description">
          배너 펀딩에 참여하여 사용자들의 선호도를 알아볼 배너 이미지 파일을 업로드 하세요.
        <br/>
        파일은 최대 n개까지 업로드할 수 있어요.</p>
        <div className="file-select">
            <center>
                <text className="file-category-text">배너 분야</text>
                <select className="file-category" placeholder="배너 분야 선택" name="fieldoption" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <optgroup label='분야를 선택하세요'>
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
                <input type="file" onChange={(e) => {setImage(e.target.files[0])}}/>
                <button onClick={upload}>Upload</button>
            </center>
        </div>
        <div class="line"></div>
        <p class="banner-description-text">배너 설명</p>
        <input class="banner-description" placeholder="배너에 대한 간단한 설명을 입력하세요."></input>
    </div>
    </div>
    </>
  );
}

export default Upload;