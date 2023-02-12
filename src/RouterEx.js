import React, { useState } from "react";
import { Button, } from "@mui/material";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// Router 사용-현재 주소에 접근하기.

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
     <header>현재 주소 : {location.pathname}</header>
        <Routes>
            <Route path="/home/main" element={<HomeMainPage />} />
            <Route path="/home/about" element={<HomeAboutPage />} />
            <Route path="*" element={<Navigate to="/home/main" />} />
            {/* "*" : 모든 url을 포함. 즉 해당 url 없을 때  "/user/login" 로 Navigate to , 향한다.*/}
        </Routes>
     </>
 );
}