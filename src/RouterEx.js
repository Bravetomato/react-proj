import React, { useState } from "react";
import { Button, } from "@mui/material";

// page 이동기록 히스토리

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
    // home 을 initialUrl 변수에 넣어주면, home 대신 initialUrl 을 사용하면 된다. 
    const [ url, setUrl ] = useState(initialUrl);
    const [ historyUrls, setHistoryUrls ] = useState([initialUrl]);
    // const [ historyUrls, setHistoryUrls ] 의 경우, 기록이 여러개 남기 때문에 [] 배열에 initialUrl을 담아준다. 

    // 클릭하면 movePage의 seturl이 home으로 변화하고, setHistoryUrls에 적용됨.
    const movePage = (url) => {
        setUrl(url);
        setHistoryUrls([url, ...historyUrls]);
        // 방금 클릭한 url 먼저 나오고, 기존 기록 url들이 나타남.
    };

    return {
        url,
        movePage,
        historyUrls,
    };
}

export default function RouterEx() {
    const history = useHistory();

    return(
        <>
        {/* 현재 url을 표시하기 위해 */}
        <div className="p-5">현재 주소 : {history.url}</div>
        <div className="p-5">히스토리 : {history.historyUrls.join(",")}</div>
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