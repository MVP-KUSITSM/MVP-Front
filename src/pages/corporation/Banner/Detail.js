import React, { useState, useEffect } from "react";
import "../../../assets/css/corporation/banner/detail.css";
import GNB from "../GNB/GNB";
import LNB from "../LNB/LNB";
import Plus from "../../../assets/plus.svg";
import { db, auth } from "../../../scripts/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ref, onValue } from "firebase/database";
import NavMenu from "../../NavMenu";
import { getStorage, ref as refs, getDownloadURL } from "firebase/storage";



function Detail() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [bannerUrl, setBannerUrl] = useState([]);
    const [isBanner, setIsBanner] = useState(false);
    const [title,setTitle]= useState("Banner Setting");  

    function YesBanner(props) {
        if(props.isBanner) {
            return (
            <>
            <div className="Banner-Collection">
                <div className="banner-detail-text">업로드한 배너</div>
                <div className="banner-images">
                    <ul>
                        {bannerUrl.map((banner) =>
                         <li><img className="banner-image" src={banner} onClick={MoveToBannerStatistic} /></li> )}
                    </ul>
                </div>
            </div>
            </>
            );
        } else {
            return (
                <></>
            );
        }

    }

    const MoveToBannerUpload = (e) => {
        window.location.replace('/corporation/banner/upload');
    };

    const MoveToBannerStatistic = (e) => {
        var bannerSrc = e.target.src;
        var temp1 = bannerSrc.split('/');
        var temp2 = temp1[7].split('?');
        var temp3 = temp2[0].split('.');
        var bid = temp3[0]+temp3[1];
        window.location.replace(`/corporation/banner/statistic/${bid}`);
    };

    useEffect( async () => {
        const storage = getStorage();
        if (loading) return;
        try {
            var userIdRef = ref(db, 'users/' + user.uid);
                onValue(userIdRef, (snapshot) => {
                var data = snapshot.val();
                var num = data.ROLE_CORP.count;
                console.log(num);
                if(num != 0) {
                    var url = data.ROLE_CORP.banner;
                    url.forEach(element => {
                    getDownloadURL(refs(storage, element))
                    .then((url) => {
                        setBannerUrl(prev => [...prev, url])
                    })
                    .catch((error) => {
                        console.log(error);
                      });
                    }); 
                    setIsBanner(true);
                    setName(data.name)
                };
            });
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    }, [user, loading]);

    return (
        <>
        <div className="Banner-Detail">
            <LNB/>
            <div className="Detail-Main-part">
                <GNB title={title}/>
                <div className="Banner-Add">
                    <div className="banner-add-text">배너 업로드</div>
                    <div className="banner-add" onClick={ MoveToBannerUpload }>
                        <div className="banner-add-icon">
                            <img src ={Plus}></img>
                        </div>
                    </div>
                </div>
                <YesBanner isBanner={isBanner} /> 
            </div>
        </div>
        </>
      );
}

export default Detail;