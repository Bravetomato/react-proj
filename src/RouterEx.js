import React, { useState } from "react";
import { Button, } from "@mui/material";
import { Routes, Route, Navigate} from "react-router-dom";

// Router 사용하기.

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

function UserLoginPage() {
    return(
    <>
     <h1>User Login</h1>
    </>
 );
}

export default function RouterEx() {
    // 이 자리는 기본 url이 들어간다. 
    return(
     <>
        <Routes>
            <Route path="/home/main" element={<HomeMainPage />} />
            <Route path="/home/about" element={<HomeAboutPage />} />
            <Route path="/user/login" element={<UserLoginPage />} />
            <Route path="*" element={<Navigate to="/user/login" />} />
            {/* "*" : 모든 url을 포함. 즉 해당 url 없을 때  "/user/login" 로 Navigate to , 향한다.*/}
        </Routes>
     </>
 );
}