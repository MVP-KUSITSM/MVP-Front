import React, { useEffect, useState  } from "react";
import { storageRef, db,auth } from "../../../scripts/firebase";
import "../../../assets/css/corporation/banner/upload.css";
import { ref, get, update } from "firebase/database";
import GNB from "../GNB/GNB";
import LNB from "../LNB/LNB";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";

function Upload() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

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
      
    storageRef.child(`/${category.valueOf()}/${image.name}`).put(image).on("state_changed", alert("success"), alert);

    var imgUrl = `${category}/${image.name}`;
      
    get(ref(db, 'users/'+user.uid+'/ROLE_CORP'))
    .then((snapshot)=>{
      if(snapshot.val().count != 0){
        console.log(snapshot.val().banner);
        var url = snapshot.val().banner;
        url.push(imgUrl);
        console.log(url);
        update(ref(db, 'users/' + user.uid+'/ROLE_CORP'), {
                banner: url
                }
              ) //banner db에 저장
          const updates={};
          updates['users/' + user.uid+'/ROLE_CORP/count'] = snapshot.val().count+1; 
          update(ref(db),updates); 
      }
      else{

          var url = [];
          url.push(imgUrl);
          update(ref(db, 'users/' + user.uid+'/ROLE_CORP'), {
            banner: url
            }
          ) //banner db에 저장
          const updates={};
          updates['users/' + user.uid+'/ROLE_CORP/count']=1;
          update(ref(db),updates);
          //banner count 1
      }
  })
  
}

  return (
    <>
    <GNB />
    <LNB />
    <div class="Banner-Upload">
        <p class="title">배너 업로드</p>
        <p class="description">
          배너 펀딩에 참여하여 사용자들의 선호도를 알아볼 배너 이미지 파일을 업로드 하세요.<br/>
          파일은 최대 n개까지 업로드할 수 있어요.
        </p>
        <div className="file-select">
            <center>
              <label className="input-file-button" for="file-box">
                파일 선택
              </label>
              <input id="file-box" type="file" onChange={(e) => {setImage(e.target.files[0])}}/>
            </center>
        </div>
        <div class="line"></div>
        <div className="banner-option-text">배너 속성</div>
        <div className="banner-option-description">배너 카테고리를 선택하세요. </div>
        <text className="file-category-text">카테고리</text>
                <select className="file-category" name="fieldoption" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option className="category-placeholder" value="" disabled selected hidden>카테고리를 선택</option>
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
        <button class="upload-btn" onClick={upload}>업로드하기</button>
    </div>
    </>
  );
}

export default Upload;