import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Home from "./pages/private/Home";
import BannerBetting from "./pages/private/BannerBetting";
import PrototypeTest from "./pages/private/PrototypeTest";
import Survey from "./pages/private/Survey";
import Role from "./pages/private/Role";
import UserInform from "./pages/private/UserInform";
import CorpInform from "./pages/private/CorpInform";


export default function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/reset" element={<Reset/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/bb" element={<BannerBetting/>} />
                    <Route path="/pt" element={<PrototypeTest/>} />
                    <Route path="/survey" element={<Survey/>} />
                    <Route path="/role" element={<Role/>} />
                    <Route path="/userinform" element={<UserInform/>} />
                    <Route path="/corpinform" element={<CorpInform/>} />
                </Routes>
            </Router>
        </div>
    )
}