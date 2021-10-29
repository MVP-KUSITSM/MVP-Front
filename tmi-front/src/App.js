import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//메인페이지
import Mainpage from "./component/Mainpage";

//로그인, 회원가입 컴포넌트
import Login from "./component/user/Login";
import Register from "./component/user/Register";
import Detail from "./component/user/Detail";

//기업 컴포넌트
import C_Main from "./component/corporation/Dashboard/Dashboard";
import CB_Main from "./component/corporation/Banner/Main";
import CB_Detail from "./component/corporation/Banner/Detail";
import CB_Upload from "./component/corporation/Banner/Upload";
import CP_Main from "./component/corporation/Prototype/Main";
import CP_Detail from "./component/corporation/Prototype/Detail";
import CP_Upload from "./component/corporation/Prototype/Upload";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Mainpage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/corporation/main" component={C_Main} />
        <Route exact path="/corporation/banner/main" component={CB_Main} />
        <Route exact path="/corporation/banner/detail" component={CB_Detail} />
        <Route exact path="/corporation/banner/upload" component={CB_Upload} />
        <Route exact path="/corporation/prototype/main" component={CP_Main} />
        <Route exact path="/corporation/prototype/detail" component={CP_Detail} />
        <Route exact path="/corporation/prototype/upload" component={CP_Upload} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;