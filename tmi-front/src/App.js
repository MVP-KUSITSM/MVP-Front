import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//메인페이지
import Mainpage from "./component/Mainpage";

//로그인, 회원가입 컴포넌트
import Login from "./component/user/Login";
import RegisterC from "./component/user/RegisterC";
import RegisterG from "./component/user/RegisterG";
import Detail from "./component/user/Detail";

//기업 컴포넌트
import C_Main from "./component/corporation/Dashboard/Dashboard";
import CB_Main from "./component/corporation/Banner/Main";
import CB_Detail from "./component/corporation/Banner/Detail";
import CB_Upload from "./component/corporation/Banner/Upload";
import CB_Result from "./component/corporation/Banner/Result";
import CP_Main from "./component/corporation/Prototype/Main";
import CP_Detail from "./component/corporation/Prototype/Detail";
import CP_Upload from "./component/corporation/Prototype/Upload";

//개인 컴포넌트
import B_Funding from "./component/mvp/Banner/Funding";
import Main from "./component/mvp/mainpage";
import Mypage from "./component/mvp/Mypage/Mypage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Mainpage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registerc" component={RegisterC} />
        <Route exact path="/registerg" component={RegisterG} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/corporation/main" component={C_Main} />
        <Route exact path="/corporation/banner/main" component={CB_Main} />
        <Route exact path="/corporation/banner/detail" component={CB_Detail} />
        <Route exact path="/corporation/banner/upload" component={CB_Upload} />
        <Route exact path="/corporation/banner/result" component={CB_Result} />
        <Route exact path="/corporation/prototype/main" component={CP_Main} />
        <Route exact path="/corporation/prototype/detail" component={CP_Detail} />
        <Route exact path="/corporation/prototype/upload" component={CP_Upload} />
        <Route exact path="/banner/funding" component={B_Funding} />
        <Route exact path="/main" component={Main} />
        <Route exact path ="/mypage" component={Mypage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;