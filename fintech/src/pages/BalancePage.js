import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppHeader from "../components/common/AppHeader";
import queryString from "query-string";
import axios from "axios";

const BalancePage = () => {
    let accessToken = "";
    let userSeqNo = "";
    const [balance, setBalance] = useState("아직없음");

    // url에서 fintechUseNo 저장
    const queryParams = useLocation().search;
    const parsed = queryString.parse(queryParams);
    const fintechUseNum = parsed.fintechUseNo;

    // 9자리 랜덤 수 생성
    function generateRandom9DigitNumber() {
        const min = 100000000; // Minimum value (smallest 9-digit number)
        const max = 999999999; // Maximum value (largest 9-digit number)

        const random9DigitNumber =
        Math.floor(Math.random() * (max - min + 1)) + min;
        return random9DigitNumber.toString();
    }

    // 랜덤 수로 trans id 생성
    const getTrasId = () => {
        return "M202300440U" + generateRandom9DigitNumber();
    };

    //
    useEffect(() => {
        console.log(localStorage.getItem("accessToken"));
        console.log(localStorage.getItem("userSeqNo"));
        console.log(fintechUseNum);
        console.log(getTrasId());
        accessToken = localStorage.getItem("accessToken");
        userSeqNo = localStorage.getItem("userSeqNo");
        getBalance();
    }, []);


    // 잔액 조회
    const getBalance = ()=>{
        /*
        axios 요청 작성하기
        */
        const sendData = {
            bank_tran_id: getTrasId(),
            fintech_use_num: fintechUseNum,
            tran_dtime: "20230802161900",
          };

        const option = {
                      method: "GET",
          url: "/v2.0/account/balance",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Authorization: `Bearer ${accessToken}`,
          },
          params: sendData,
        };

                // axios
        axios(option).then(({ data }) => {
          console.log(data.res_list);
          setAccountList(data.res_list);
        });
    }

    return (
        <div>
            <AppHeader title="잔액조회"></AppHeader>
            {balance}
        </div>
    );
};

export default BalancePage;