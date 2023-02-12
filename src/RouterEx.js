import React, { useState } from "react";
import { Button, } from "@mui/material";
import { Routes, Route, Navigate, useLocation, NavLink, useParams, useNavigate } from "react-router-dom";
import classNames from "classnames";

// Router 사용-useNavigate 로 상세페이지에서 뒤로가기.

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

function ArticleListPage() {
    const articles = [ { id: 1 }, {id : 2} ];

    return(
    <>
    <h1>ARTICLE LIST</h1>
    <ul>
        {articles.map((article) => (
            <li key={article.id}>
                <NavLink to={`/article/detail/${article.id}`}>{article.id}번 게시물</NavLink>
            </li>
        ))}
    </ul>
    </>
 );
}

function ArticleDetailPage() {
    const navigate = useNavigate();
    const {id} = useParams();
    // useParams 를 통해 url 파라미터를 얻는다.

    return (
    <>
     <h1>ARTICLE DETAIL</h1>
     <h2>{id}번 게시물 상세페이지</h2>
     <Button variant="outlined" onClick={() => navigate(-1)}>Back</Button>
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
      <NavLink to="/article/list" className={({ isActive }) => 
        classNames("btn", {"btn-link": !isActive }, {"btn-primary": isActive })}>
        ARTICLE LIST</NavLink>  
     </header>
        <Routes>
            <Route path="/home/main" element={<HomeMainPage />} />
            <Route path="/home/about" element={<HomeAboutPage />} />
            <Route path="/article/list" element={<ArticleListPage />} />
            <Route path="/article/detail/:id" element={<ArticleDetailPage />} />
            <Route path="*" element={<Navigate to="/home/main" />} />
            {/* "*" : 모든 url을 포함. 즉 해당 url 없을 때  "/user/login" 로 Navigate to , 향한다.*/}
        </Routes>
     </>
 );
}