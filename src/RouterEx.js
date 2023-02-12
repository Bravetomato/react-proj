import React, { useState } from "react";
import { Button, } from "@mui/material";
import { Routes, Route, Navigate, useLocation, NavLink } from "react-router-dom";
import classNames from "classnames";

// Router 사용-NavLink 의 isActive, classNames 사용.

function HomeMainPage() {
    return(
    <>
     <h1>HOME, MAIN</h1>
    </>
 );
}

function HomeAboutPage() {
    return(
    <>
     <h1>HOME, ABOUT</h1>
    </>
 );
}

export default function RouterEx() {
    const location = useLocation();
    // 이 자리는 기본 url이 들어간다. 
    return(
     <>
     {/* react router site 참고 */}
     {/* 현재 주소 location.pathname 으로 얻을 수 있다.  */}
     <header>현재 주소 : {location.pathname}
      <hr />
      <NavLink to="/home/main" className={({ isActive }) => 
        classNames("btn", {"btn-link": !isActive }, {"btn-primary": isActive })}>
        MAIN</NavLink>
        {/* {"btn-link": !isActive } : 현재 페이지가 아닐때는 btn-link 를 쓰고
            {"btn-primary": isActive } : 현재 페이지 일때에는  btn-primary 를 쓰겠다.*/}
        {/* isActive =  false -> btn btn-link
            isctive = true -> btn btn-primary */}
      <NavLink to="/home/about" className={({ isActive }) => 
        classNames("btn", {"btn-link": !isActive }, {"btn-primary": isActive })}>
        ABOUT</NavLink>
     </header>
        <Routes>
            <Route path="/home/main" element={<HomeMainPage />} />
            <Route path="/home/about" element={<HomeAboutPage />} />
            <Route path="*" element={<Navigate to="/home/main" />} />
            {/* "*" : 모든 url을 포함. 즉 해당 url 없을 때  "/user/login" 로 Navigate to , 향한다.*/}
        </Routes>
     </>
 );
}