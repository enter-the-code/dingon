import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/Allgall.css";
import { Link } from "react-router-dom";
import beermode from '../'
export default function Allgall() {
  const [all, setAll] = useState([]);

  useEffect(() => {
    axios({
      url: "http://43.201.15.34:8050/gallery/all",
      method: "get",
    }).then(response => {
      setAll(response.data.list);
    });
  }, []);


    return (
      <>
      <div className="wrapper">
        <div className="top-div">
          <div className="allSelect">전체 갤러리</div>
          {/* <div className="namesort">ㄱㄴㄷ순</div> */}
        </div>
        <div className="box-wrapper">
        <div className="mid-div">
          {all.map(item => (
            <div key={item.name}>
              <Link to={`/gallery/${item.name}`}>
                <span>{item.name}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="ad-box">
          <div className="img-container">
            <img className="ad-img" src="/img/BM-banner.gif"></img>
          </div>
          <div className="img-container">
            <img className="ad-img" src="/img/SGT-banner.gif"></img>
          </div>
          <div className="img-container">
            <img className="ad-img" src="/img/nakdang-banner.gif"></img>
          </div>
          <div className="img-container">
            <img className="ad-img" src="/img/sponge-banner.gif"></img>
          </div>
          <div className="img-container">
            <img className="ad-img" src="/img/mbti-banner.gif"></img>
          </div>
          <div className="img-container">
            <a href="https://codingon.co.kr/">
            <img className="ad-img" src="/img/codingon-banner.gif"></img>
            </a>
          </div>
          <div className="img-container">
          <a href="https://codingon.co.kr/">
            <img className="ad-img" src="/img/codingon-banner.gif"></img>
            </a>
          </div>
          <div className="img-container">
            <img className="ad-img" src="/img/neighbor-banner.gif"></img>
          </div>
          <div className="img-container">
            <img className="ad-img" src="/img/bread-banner.gif"></img>
          </div>
          <div className="img-container">
            <img className="ad-img" src="/img/campang-banner.gif"></img>
          </div>
          <div className="img-container">
            <img className="ad-img" src="/img/pickme-banner.gif"></img>
          </div>
          <div className="img-container">
            <img className="ad-img" src="/img/BM-banner.gif"></img>
          </div>
          <div className="img-container">
            <img className="ad-img" src="/img/BM-banner.gif"></img>
          </div>
          <div className="img-container">
            <img className="ad-img" src="/img/BM-banner.gif"></img>
          </div>
          <div className="img-container">
            <img className="ad-img" src="/img/BM-banner.gif"></img>
          </div>
        </div>
          </div>
      </div>
    </>
  );
}
