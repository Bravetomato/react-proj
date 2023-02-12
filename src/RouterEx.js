import React, { useState } from "react";
import { Button, } from "@mui/material";

// 현재 page 하이라이트

function HomePage() {
    return(
    <>
     <h1>Home 페이지</h1>
    </>
 );
}

function AboutPage() {
    return(
    <>
     <h1>About 페이지</h1>
    </>
 );
}

function LoginPage() {
    return(
    <>
     <h1>Login 페이지</h1>
    </>
 );
}

function useHistory() {
    const initialUrl = "home";
    const [ currentIndex, setCurrentIndex ] = useState(0);
    // 현재 index 를 0으로 설정.
    const [ url, setUrl ] = useState(initialUrl);
    const [ historyUrls, setHistoryUrls ] = useState([initialUrl]);

    const des = historyUrls.map((historyUrl, index) => 
    <span style={{ color: currentIndex == index ? "red" : null }}
    clsaaName="inline-block border border-black p-2">{historyUrl}</span>);
    //  style={{ color: currentIndex == index ? "red" : null }} : map으로 돌려서 현 index와 선택된 index가 같으면
    //  red로 색으로 바꾸고 , 다르면 null

    const movePage = (url) => {
        setUrl(url);
        setHistoryUrls([url, ...historyUrls]);
    };

    // 뒤로가기 버튼
    const movePrev = () => {
        if ( currentIndex == historyUrls.length - 1 ) {
            return false;
        }

        const url = historyUrls[currentIndex + 1];
        setUrl(url);
        setCurrentIndex(currentIndex + 1);

    };

    // 앞으로가기 버튼
    const moveNext = () => {
        if ( currentIndex == 0 ) {
            return false;
        }

        const url = historyUrls[currentIndex - 1];
        setUrl(url);
        setCurrentIndex(currentIndex - 1);
    };

    return {
        url,
        movePage,
        historyUrls,
        movePrev,
        moveNext,
        des,
    };
}

export default function RouterEx() {
    const history = useHistory();

    return(
        <>
        <div className="p-5">현재 주소 : {history.url}</div>
        <div className="p-5">히스토리 : {history.des}
        <br />
        <Button variant="contained" onClick={history.movePrev}>back</Button>
        <Button variant="contained" onClick={history.moveNext}>front</Button>
        </div>
         <ul className="flex gap-3 p-5">
            <li onClick={() => history.movePage("home")} className="hover:text-red-300 cursor-pointer">
                <Button variant="outlined">Home</Button>
            </li>
            <li onClick={() => history.movePage("about")} className="hover:text-red-300 cursor-pointer">
                <Button variant="outlined">About</Button>
            </li>
            <li onClick={() => history.movePage("login")} className="hover:text-red-300 cursor-pointer">
                <Button variant="outlined">Login</Button>
            </li>
         </ul>
         <div className="p-5">
         {history.url == "home" && <HomePage />}
         {history.url == "about" && <AboutPage />}
         {history.url == "login" && <LoginPage />}
         </div>
        </>
 );
}