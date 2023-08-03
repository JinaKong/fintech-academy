import React from 'react';
import AppHeader from '../components/common/AppHeader';

import ReactDOM from 'react-dom';
import {QRCodeSVG} from 'qrcode.react'; //qr코드 라이브러리

import queryString from "query-string";
import { useLocation } from "react-router-dom";


const QrCodePage = () => {

    // url에서 fintechUseNo 저장 -> qr코드에 담기
    const queryParams = useLocation().search;
    const parsed = queryString.parse(queryParams);
    const fintechUseNum = parsed.fintechUseNo;

    return (
        <div>
            <AppHeader title={"QR 코드"}></AppHeader>
            <QRCodeSVG value={fintechUseNum}/>,
        </div>
    );
};

export default QrCodePage