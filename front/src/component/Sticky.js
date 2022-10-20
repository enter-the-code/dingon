import React, { useState, useEffect } from "react";
import AssignModal from "./AssignModal";
import Hitgall from "./Hitgall";
import Loginbox from "./Loginbox";
import IsLogined from "./IsLogined";
import "../css/Sticky.css";
import "../css/IsLogined.css";

export default function Sticky({ isLogin, setIsLogin, nickname, setNickname }) {
  const [onAssign, setOnAssign] = useState(false);

  console.log(onAssign);
  return (
    <>
      {onAssign ? <AssignModal senddata={setOnAssign} /> : <></>}
      <div className="content-right">
        {isLogin ? (
          <IsLogined
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            nickname={nickname}
          />
        ) : (
          <Loginbox
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            setNickname={setNickname}
            setOnAssign={setOnAssign}
          />
        )}
        <div className="hitgall">
          <Hitgall />
        </div>
      </div>
    </>
  );
}
