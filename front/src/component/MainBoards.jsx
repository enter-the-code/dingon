import React, { useState, useEffect } from "react";
import MainBoard from "./MainBoard";
import "../css/MainBoards.css";
import axios from "axios";

const MainBoards = () => {
  // const [nick, setNick] = useState("");
  // const [name, setName] = useState(""); //board name
  // const [createdat, setCreatedat] = useState("");
  // const [clicked, setClicked] = useState("");

  let [hot, setHot] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:8050/search/top4",
      method: "get",
      data: "",
      withCredentials: true
    }).then((response) => {
      console.log(response.data)
      setHot(response.data.list);
    })

  }, []);

  return (
    <>
      <div className="MainBoardsDiv" style={{ position: "relative", height: "620px" }}>
        {hot.map((v, i) => {
          return (<MainBoard
            key={i}
            className={"box" + (i + 1)}
            title={hot[i].name}
            data={hot.length !== 0 && hot[0]}
          />)
        })}
      </div>
    </>
  );
};
export default MainBoards;
