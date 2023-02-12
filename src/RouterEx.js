import React, { useState } from "react";
// url 변화에 따라 page가 변화하도록.

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
         <div>
            <span onClick={() => setUrl("home")} className="hover:text-red-300 cursor-pointer">Home</span>
            <span onClick={() => setUrl("about")} className="hover:text-red-300 cursor-pointer">About</span>
            <span onClick={() => setUrl("login")} className="hover:text-red-300 cursor-pointer">Login</span>
         </div>
         {url == "home" && <HomePage />}
         {url == "about" && <AboutPage />}
         {url == "login" && <LoginPage />}
        </>
 );
}