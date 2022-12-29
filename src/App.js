import React, { useState, useEffect, useRef } from "react";

import "./App.css";
// 제이쿼리 다크모드 코드를 리액트 문법으로 바꾸기
function App() {
  const [isDark, setIsDark] = useState(false);
  // 기본상태는 false임.

  //js문법을 적어야하는 경우 useEffect에 넣어주는 것이 좋다
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    // document에서 tagname이 html인 el를 가져온다.
    // 만약 isDark면 html의 classList에 dark를 추가하고 아니면, dark를 삭제한다.
    // [isDark] -> isDark 값이 변할 때만 실행된다.
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <div>
        <button className="btn-toggle-theme" onClick={() => setIsDark(!isDark)}>
          테마토글
        </button>
      </div>
      {/* 클릭하면 setIsDark는 isDark가 아니다.  */}
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        tempore similique quaerat, rerum sunt alias repellat aliquid! Nesciunt
        fugit maiores quia obcaecati sed! A veniam eos earum porro eaque
        commodi?
      </div>

      <h1 className="color-primary">하하 호호</h1>
    </>
  );
}

export default App;
