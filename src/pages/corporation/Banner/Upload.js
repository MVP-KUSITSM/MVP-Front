import React, { useState } from "react";
import "../../../assets/css/corporation/banner/upload.css";
import GNB from "../GNB/GNB";
import LNB from "../LNB/LNB";

function Upload() {
  const [selectFile, setSelectFile] = useState(null);

  const handleSelectFile = (e) => {
    setSelectFile(e.target.files[0]);
  }

  return (
    <>
    <GNB />
    <LNB />
    </>
  );
}

export default Upload;