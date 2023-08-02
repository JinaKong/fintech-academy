import React, { useState } from "react";
import AppHeader from "../components/common/AppHeader";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const AuthResultPage = () => {
  /* 
  code 저장
  */
  const queryParams = useLocation().search;
  console.log(queryParams);

  // queryString 활용해서 파싱
  const parsed = queryString.parse(queryParams);
  console.log(parsed.code);

  // 저장
  const authCode = parsed.code;


  /*
  */
  const [accessToken, setAccessToken] = useState("");
  const [userSeqNo, setUserSeqNo] = useState("");


  const handleClick = () => {
    //axios 요청 만들기
    let requestOption = {
      // 사용자 토큰발급 메뉴얼 참고
      url: "/oauth/2.0/token",
      method: "POST",
      // 헤드
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      //바디
      data: {
        code: authCode,
        client_id: "ddd07ffd-2933-4834-ab99-1f3a04c09e1a",
        client_secret: "3cf3b046-a231-4b7f-9874-e45702f5206b",
        redirect_uri: "http://localhost:3000/authResult",
        grant_type: "authorization_code",
      },
    };

    // 토큰을 브라우저에 저장
    axios(requestOption).then(({ data }) => {
      setAccessToken(data.access_token);
      setUserSeqNo(data.user_seq_no);
      
      if (data.rsp_code !== "O0001") {
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("userSeqNo", data.user_seq_no);
        alert("저장 완료");
      } else {
        alert("인증에 실패했습니다 다시 시도해 주세요");
      }
    });
  };

  return (
    <div>
      <AppHeader title={"인증결과 / 토큰 생성"}></AppHeader>
      <p>코드 : {authCode}</p>
      <button onClick={handleClick}>accessToken 요청</button>
    </div>
  );
};

export default AuthResultPage;