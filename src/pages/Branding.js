import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Branding.css"


function Branding() {
  
  const navigate = useNavigate();

     


    

  return (

   
      <>
      <div className= "loginbutton">
      <img className="branding_img" style={{width:"60px", height:"50px", overflow:"auto"}} src="logo.png"/>
          <button className="branding_GNB" onClick={()=>navigate('/')}>로그인</button>

      </div>
    <img style={{width:"100%", height:"auto", overflow:"auto"}} src="brandingcut.png"/>
     </>
    
  );
}

export default Branding;