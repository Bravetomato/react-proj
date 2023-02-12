import React, { useState } from "react";
import { Button, } from "@mui/material";

// url 변화에 따라 page가 변화하도록-디자인 추가

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

export default function RouterEx() {
    const [ url, setUrl ] = useState("home");
    // default 는 home 이기 때문에 처음에는 Homepage가 나타남. 
    return(
        <>
        {/* 현재 url을 표시하기 위해 */}
        <div className="p-5">현재 주소 : {url}</div>
         <ul className="flex gap-3 p-5">
            <li onClick={() => setUrl("home")} className="hover:text-red-300 cursor-pointer">
                <Button variant="outlined">Home</Button>
            </li>
            <li onClick={() => setUrl("about")} className="hover:text-red-300 cursor-pointer">
                <Button variant="outlined">About</Button>
            </li>
            <li onClick={() => setUrl("login")} className="hover:text-red-300 cursor-pointer">
                <Button variant="outlined">Login</Button>
            </li>
         </ul>
         <div className="p-5">
         {url == "home" && <HomePage />}
         {url == "about" && <AboutPage />}
         {url == "login" && <LoginPage />}
         </div>
        </>
 );
}