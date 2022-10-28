import TextField from "@mui/material/TextField";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import "../css/AssignModal.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Swal from "sweetalert2";

function AssignModal({ senddata }) {
  const [nickName, setName] = useState("");
  const [Pw, setPw] = useState("");
  const [Email, setEmail] = useState("");
  const [EwriteState, EsetwriteState] = useState(false);
  const [IwriteState, IsetwriteState] = useState(false);
  const [PriteState, PsetwriteState] = useState(false);
  const [emailOk, setEmailOk] = useState(false);
  const [isNameOk, setIsNameOk] = useState(false);
  const [SubmitAble, setSubmitAble] = useState(false);
  useEffect(()=>{
    if(emailOk && isNameOk && Pw) setSubmitAble(true); 
    else setSubmitAble(false); 
  },[emailOk ,isNameOk, Pw]);

  const Emailvalidate = () => {
    let check =
      /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
    if (!EwriteState) {
      return false;
    } else {
      return !check.test(Email);
    }
  };
  const namevalidate = () => {
    let check = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
    if (!IwriteState) {
      return false;
    } else {
      return !check.test(nickName);
    }
  };

  const Pwvalidate = () => {
    let check =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!PriteState) {
      return false;
    } else {
      return false;
    }
  };


  const submit = () => {
    let data = {
      email: Email,
      password: Pw,
      nickName: nickName,
    };

    axios({
      url: "http://43.201.15.34:8050/auth/signup",
      method: "post",
      data: data,
    }).then((result) => {
      console.log(result.data);

      if (result.data.code === 200) {
        Swal.fire({
          title : "가입이 완료되었습니다",
          icon : "success"
        })
        window.location.replace("/");
      } else {
        Swal.fire({
          title : "예기치 못한 오류가 발생했습니다.",
          icon : "error"
        })
      }
    });
  };
  const checkIsAlready = () => {
    axios({
      url: "http://43.201.15.34:8050/auth/emailCheck",
      method: "post",
      data: { email: Email },
    }).then((result) => {
      console.log(result.data);
      let check =
      /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
      if (result.data.code === 400) {
        console.log("겹침");
        Swal.fire({
          title : "이미 사용중 다른거 쓰세요",
          icon : "error"
        })
        setEmailOk(false);
      }
      else if (Email === ""){
        Swal.fire({
          title : "내용을 입력해주세요",
          icon : "warning"
        })
      }
      else if (!check.test(Email)){
        Swal.fire({
          title : "형식에 맞게 제대로 쓰세요",
          icon : "question"
        })
      }
      else {
        Swal.fire({
        title : "아아 가능 가능",
        icon : "success"
        })
        setEmailOk(true);
      }
    });
  };
  const checkIsAlreadyName = () => {
    axios({
      url: "http://43.201.15.34:8050/auth/nickNameCheck",
      method: "post",
      data: { nickName: nickName },
      withCredentials: true,
    }).then((result) => {
      console.log(result.data);
      let check = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,8}$/;

      if (result.data.code === 400) {
        console.log("겹침");
        Swal.fire({
          title : "이미 사용중인 닉네임입니다",
          icon : "error"
        })
        setIsNameOk(false);
      } 
      else if (nickName === ""){
        Swal.fire({
          title : "내용을 입력해주세요",
          icon : "warning"
        })
      }
      else if(!check.test(nickName)){
        Swal.fire({
          title : "2~8자 이내로 입력해주세요",
          text : "초성, 특수문자 사용 불가능",
          icon : "question"
        })
      }
      else {
        Swal.fire({
          title : "사용 가능한 닉네임입니다.",
          icon : "success"
          })
        setIsNameOk(true);
      }
    });
  };
  return (
    <div
      onClick={(e) => {
        if (e.target.getAttribute("class") == "ocapacity") {
          senddata(false);
        }
      }}
      className="ocapacity"
    >
      <div className="Modal">
        <div className="title">회원가입</div>
        <div className="metirial">
          <TextField
            disabled={emailOk}
            onChange={(e) => {
              EsetwriteState(true);
              setEmail(e.target.value);
            }}
            className="inputTag"
            label="Email"
            variant="outlined"
            error={Emailvalidate()}
            helperText={Emailvalidate() ? "형식에 맞게 입력하세요." : ""}
          />
          <Button
            disabled={emailOk}
            onClick={() => {
              checkIsAlready();
            }}
            style={{ marginLeft: "10px" }}
          >
            중복확인
          </Button>
        </div>
        <div className="metirial">
          <TextField
            disabled={isNameOk}
            className="inputTag"
            onChange={(e) => {
              setName(e.target.value);
              IsetwriteState(true);
            }}
            label="NickName"
            variant="outlined"
            error={namevalidate()}
            helperText={namevalidate() ? "형식에 맞게 입력하세요" : ""}
          />
          <Button
            disabled={isNameOk}
            onClick={() => {
              checkIsAlreadyName();
            }}
            style={{ marginLeft: "10px" }}
          >
            중복확인
          </Button>
        </div>
        <div className="metirial">
          <TextField
            type="password"
            style={{ width: "66%" }}
            className="inputTag"
            onChange={(e) => {
              setPw(e.target.value);
              PsetwriteState(true);
            }}
            label="password"
            variant="outlined"
            error={Pwvalidate()}
            helperText={Pwvalidate() ? "형식에 맞게 입력하세요" : ""}
          />
        </div>

        <div className="captar">
          <div
            id="captcha"
            className="g-recaptcha"
            data-sitekey="6LcG3ZEiAAAAAN-O78MeoLy3N9lU9J7jGvmHYsiD"
          ></div>
        </div>

        <Button 
         onClick={submit} 
         className="buton" 
         variant="outlined"
         disabled={!SubmitAble}
         >
          회원가입 하기
        </Button>
      </div>
    </div>
  );
}

export default AssignModal;
