//데이지ui, 폰트어썸 사용하여 알림창 만들기
import React, { useState } from "react";

function Alert({ color: color_, children }) {
  // color: color_ -> color 의 이름을 color_ 로 받아온다.
  const color = color_ ?? "red";
  //   받아온 색이 있으면 그대로, 없으면 red로 바꿔준다.
  return (
    <div className="alert alert-info shadow-lg">
      <div className={`text-[${color}]`}>
        <span>
          <i class="fa-regular fa-comment"></i>
          {/* 폰트어썸 아이콘 링크 */}
        </span>
        <span>{children}</span>
        {/* {children} 은 Notice 함수 Alert에 적힌 text를 받는다 */}
      </div>
    </div>
  );
}

function Notice() {
  return (
    <>
      <Alert>"안녕"반가워</Alert>
      <br />
      <Alert color="blue">지금은 수업 중이야</Alert>
    </>
  );
}

export default Notice;
