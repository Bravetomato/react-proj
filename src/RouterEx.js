import React, { useState } from "react";
import { Button, } from "@mui/material";

// page 앞으로 가기, 뒤로 가기 버튼 만들기. 

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

    // 클릭하면 movePage의 seturl이 home으로 변화하고, setHistoryUrls에 적용됨.
    const movePage = (url) => {
        setUrl(url);
        setHistoryUrls([url, ...historyUrls]);
    };

    // 뒤로가기 버튼
    const movePrev = () => {
        // historyUrls 의 길이 이상으로 뒤로 갈 수 없도록 -1을 해준다. 
        // 히스토리에 페이지가 하나일때 뒤로 가지 않고 현 페이지 보여주기 위해
        if ( currentIndex == historyUrls.length - 1 ) {
            return false;
        }

        const url = historyUrls[currentIndex + 1];
        // currentIndex 즉 현재 0이기 때문에 +1 해서 뒤로 가는것
        setUrl(url);
        // 현 url 은 0 으로 세팅.
        setCurrentIndex(currentIndex + 1);
        // setCurrentIndex 은 1 로 세팅.

    };

    // 앞으로가기 버튼
    const moveNext = () => {
        // 현재 페이지 그 이상 이동할 수 없도록 설정.
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
    };
}

export default function RouterEx() {
    const history = useHistory();

    return(
        <>
        <div className="p-5">현재 주소 : {history.url}</div>
        <div className="p-5">히스토리 : {history.historyUrls.join(",")}
        <br />
        <Button variant="contained" onClick={history.movePrev}>back</Button>
        <Button variant="contained" onClick={history.moveNext}>front</Button>
        </div>
         <ul className="flex gap-3 p-5">
            {/* 클릭시 history 에 있는 movePage 를 home 으로 바꿔준다.  */}
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